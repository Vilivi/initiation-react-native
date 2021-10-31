import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, Image } from 'react-native';
import { styles } from "./App.styles";
import { Separator } from './components/Separator';

export default function App() {
  return (
    <View style={styles.container}>
      <Text
        style={styles.headerStyle}
      >
        Bienvenue sur mon application !
      </Text>
      <Separator color="pink" />
      <Image 
        style={{
            width: 200,
            height: 200
        }}
        source={{
          uri: "https://images.unsplash.com/photo-1635087940500-bc49d0cd6d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=406&q=80"
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}
