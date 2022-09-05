import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title1}>Hello User</Text>
      <Text style={styles.title2}>What are you going to do?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 130,
    paddingTop: 65,
    backgroundColor: 'transparent',
  },
  title1: {
    textAlign: 'left',
    color: '#fff',
    marginLeft: 5,
    fontSize: 30,
    marginBottom: 6,
    fontWeight: 'bold',
  },
  title2: {
    textAlign: 'left',
    color: '#fff',
    marginLeft: 5,
    fontSize: 18,
    marginBottom: 2,
    fontWeight: 'bold',
  },
});
