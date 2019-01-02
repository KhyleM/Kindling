import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View 
} from 'react-native';

import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';


const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://i.ytimg.com/vi/hbgsv9CJzl4/maxresdefault.jpg' },
  { id: 2, text: 'Card #2', uri: 'https://consequenceofsound.files.wordpress.com/2018/08/nicki-minaj-harriet-tubman.png?w=807' },
  { id: 3, text: 'Card #3', uri: 'https://ichef.bbci.co.uk/images/ic/960x540/p01br7g4.jpg' },
  { id: 4, text: 'Card #4', uri: 'https://static01.nyt.com/images/2018/06/19/arts/19xxx/19xxx-articleLarge-v2.jpg?quality=75&auto=webp&disable=upscale' },
  { id: 5, text: 'Card #5', uri: 'https://djbooth.net/.image/t_share/MTU5MTMwMzc2NTYyODEyNjk2/trippie-redd-2018-sl.jpg' },
  { id: 6, text: 'Card #6', uri: 'https://images.complex.com/complex/images/c_scale,w_1920/fl_lossy,pg_1,q_auto/szfrqodkzvi3yqsxdttb/bhad-bhabbie-eyes' },
  { id: 7, text: 'Card #7', uri: 'http://townsquare.media/site/812/files/2018/11/6ix9ine.jpg?w=980&q=75' },
  { id: 8, text: 'Card #8', uri: 'https://assets1.ignimgs.com/2018/07/18/goku-1531912434329_1280w.jpg' },
];


export default class App extends React.Component {
  renderCard(item) {
    return (
      <Card
      key={item.id}
      title={item.text}
      image={{ uri: item.uri }}
      >
      <Text style={{ marginBottom: 10 }}>
        Sample text just for testing.
      </Text>
      <Button 
        icon={{ name: 'code'}}
        backgroundColor="#03A9F4"
        title="View Now!"
      />

      </Card>
    );
  }

  renderNoMoreCards() {
    return (
      <Card title="Out of cards!">
        <Text style={{ marginBottom: 10 }}>
          There's no more content here!
        </Text>
        <Button
        backgroundColor="#03A9F4"
        title="Get more!"
        />
      </Card>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck 
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
