import React from 'react';
import { ListItem } from 'react-native-elements';
import { View, ScrollView, StyleSheet, StatusBar ,Image} from 'react-native';
import NEWS_LIST from '../screens/NewsData';

const Tab2Screen = (props) => {
  return (
    <View>
      <ScrollView>
        {NEWS_LIST.map((item, index) => (
          <ListItem 
            key={index}
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
});



export default Tab2Screen;
