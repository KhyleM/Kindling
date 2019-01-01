import React, { Component } from 'react';
import {
    View, 
    Animated,
    PanResponder,
    Dimensions
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

// Minimum amount of distance to drag card to consider it liked
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;

class Deck extends Component {
    constructor(props) {
        super(props);

        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {
                position.setValue({ x: gesture.dx, y: gesture.dy })
            },
            onPanResponderRelease: (event, gesture) => {
                if (gesture.dx > SWIPE_THRESHOLD) {
                    console.log('swiped right!')
                } else if (gesture.dx < -SWIPE_THRESHOLD) {
                    console.log('swiped left!');
                } else {
                    this.resetPosition();
                }
            }
        });


        this.state = { panResponder, position };
    }

    resetPosition() {
        Animated.spring(this.state.position, {
            toValue: { x: 0, y: 0}
        }).start();
    }

    getCardStyle() {
        const { position } = this.state;
        const rotate = position.x.interpolate({
            /* Note - tying it to a hard value like -500 or 500 
            is not the best idea, tying to actual width of screen better
            for consistency!
            InputRange: [-500, 0, 500], 
            */
            inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
            outputRange: ['-120deg', '0deg', '120deg']

        });


        return {
            ...position.getLayout(),
            transform: [{ rotate }]

        }
    }

    renderCards() {
        return this.props.data.map((item, index) => {
            if (index === 0) {
                return (
                    <Animated.View
                     key={item.id}
                     style={this.getCardStyle()}
                     {...this.state.panResponder.panHandlers}
                    >
                        {this.props.renderCard(item)}
                    </Animated.View>
                )
            }
            return this.props.renderCard(item);
        });
    }
    render() {      
        return (
            <View>
                {this.renderCards()}
            </View>
        )
    }
}

export default Deck;