import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => (
  	<SafeAreaView style={{ justifyContent: "center", alignItems: "center"}}>
    	<TouchableOpacity onPress={() => navigation.navigate('approvedFoods')}>
      	<Text>Go to Approved Foods</Text>
    	</TouchableOpacity>
  	</SafeAreaView>
);

export default HomeScreen