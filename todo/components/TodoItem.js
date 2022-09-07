import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';

export default function TodoItem({item, pressHandler, editHandler, comp}) {
  return (
    <View style={styles.item}>
      <View style={styles.iteml}>
        <CheckBox
          style={styles.cbox}
          disabled={false}
          value={item.complete}
          onValueChange={() => comp(item.key)}
        />
        {item.complete ? (
          <>
            <Text style={styles.textc}>{item.text}</Text>
          </>
        ) : (
          <>
            <Text style={styles.textt}>{item.text}</Text>
          </>
        )}
      </View>
      <View style={styles.icon}>
        <TouchableHighlight>
          <AntDesign
            style={styles.iconn}
            name="edit"
            onPress={() => editHandler(item.key)}
          />
        </TouchableHighlight>
        <AntDesign
          style={styles.iconn}
          name="delete"
          onPress={() => pressHandler(item.key)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 1,
    marginRight: 1,
    backgroundColor: '#EEEEEE',
    color: '#000',
    fontWeight: 'bold',
    borderTopWidth: 0,
    elevation: 3,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  textt: {
    marginTop: 6,
    fontWeight: 'bold',
    color: '#000',
  },
  textc: {
    marginTop: 6,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontWeight: 'bold',
    color: '#000',
  },
  icon: {
    marginTop: 5,
    color: '#333',
    marginRight: 5,
    flexDirection: 'row',
  },
  iconn: {
    padding: 5,
    color: '#333',
    fontSize: 18,
  },
  iteml: {
    flexDirection: 'row',
  },
  cbox: {
    marginRight: 5,
  },
});
