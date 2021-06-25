import React from 'react';
import { ListItem } from 'react-native-elements';
import { View, ScrollView, StyleSheet, StatusBar ,Image, Text} from 'react-native';
import NEWS_LIST from '../screens/NewsData';

const Tab1Screen = (props) => {
  const Separator = () => {
    return <View style={styles.separator} />;
  };
  return (
    <View>
      <ScrollView>
        {NEWS_LIST.map((item, id) => (
          <ListItem 
            key={id}
            onPress={() =>
              props.navigation.navigate('news', 
                                         { title: item.title,
                                           image:  item.image,
                                           content:  item.content})
            }>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
            </ListItem.Content>
              <Image style={styles.logo} size source={item.image}/>
          </ListItem>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  separator: {
    marginVertical: 1,
    borderBottomColor: 'blue',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 20,
  },
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  text: {
    textAlign: 'right',
  },
});



export default Tab1Screen;
