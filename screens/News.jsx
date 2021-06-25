import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, StatusBar, SafeAreaView } from 'react-native';


const News = (props) => {
  const {title, image,content } = props.route.params;

  const Separator = () => {
    return <View style={styles.separator} />;
  };
  const Separator2 = () => {
    return <View style={styles.separator2} />;
  };
  const Separator3 = () => {
    return <View style={styles.separator3} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        
        <Separator />
        <Text style={styles.title}>
        {title}
        </Text>
        <Separator2 />
        <Image style={styles.image} size source={image}/>
        <Separator3 />
        <Text style={styles.text}>
        {content}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    marginHorizontal: 15,
  },
  title: {
    fontSize:20,
    width: 360,
    height: 60,
  },
  image: {
    width: 360,
    height: 250,
  },
  text: {
    fontSize: 15,
  },
  separator: {
    marginVertical: 5,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  separator2: {
    marginVertical: 5,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  separator3: {
    marginVertical: 10,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default News;