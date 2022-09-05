import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';

export default function TodoItem({item, pressHandler, comp}) {
  //   const [isSelected, setSelection] = useState(false);
  //   const [toggleCheckBox, setToggleCheckBox] = useState(false);

  //   const cbox = (newValue, key) => {
  //     // comp(key);
  //     setToggleCheckBox(newValue);
  //   };

  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <View style={styles.iteml}>
          <CheckBox
            style={styles.cbox}
            disabled={false}
            value={item.complete}
            // onChange={pressHandler(item.key)}
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
          {/* <Text style={styles.textt}>
          {item.complete === 'true' ? item.complete : item.text}
        </Text> */}
        </View>
        <AntDesign
          name="delete"
          onPress={() => pressHandler(item.key)}
          style={styles.icon}
        />
      </View>
    </TouchableOpacity>
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
    fontSize: 18,
    marginRight: 5,
  },
  iteml: {
    flexDirection: 'row',
  },
  cbox: {
    marginRight: 5,
  },
});
