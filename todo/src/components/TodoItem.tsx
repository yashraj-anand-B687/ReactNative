import React,{FC} from 'react';
import {Alert, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import {firestore} from '../../App';

type items = {
  id: string;
  todo: string;
  completed: boolean;
}

interface Props {
  item: items;
  deleo: () => void;
  editHandler: (arg0: string) => void;
}

const TodoItem: FC<Props> = (props) => {
  const usersCollectionRef = firestore().collection('todos');

  const delet = () => {
    usersCollectionRef //delete specific object
      .doc(props.item.id) //pass id
      .delete()
      .then(() => {
        console.log('todo removed!');
      })
      .catch(err => {
        Alert.alert(err);
      });
    props.deleo();
  };

  const compp = () => {
    // dispatch(complete(item.key));
    if (props.item.completed) {
      usersCollectionRef //delete specific object
        .doc(props.item.id) //pass id
        .update({
          completed: false,
        })
        .then(() => {
          console.log('todo incompleted!');
        })
        .catch(err => {
          Alert.alert(err);
        });
      props.deleo();
    } else {
      usersCollectionRef //delete specific object
        .doc(props.item.id) //pass id
        .update({
          completed: true,
        })
        .then(() => {
          console.log('todo completed!');
        })
        .catch(err => {
          Alert.alert(err);
        });
      props.deleo();
    }
  };

  return (
    <View style={styles.item}>
      <View style={styles.iteml}>
        <CheckBox
          style={styles.cbox}
          disabled={false}
          value={props.item.completed}
          onValueChange={compp}
        />
        {props.item.completed ? (
          <>
            <Text style={styles.textc}>{props.item.todo}</Text>
          </>
        ) : (
          <>
            <Text style={styles.textt}>{props.item.todo}</Text>
          </>
        )}
      </View>
      <View style={styles.icon}>
        <TouchableHighlight>
          <AntDesign
            style={styles.iconn}
            name="edit"
            onPress={() => props.editHandler(props.item.id)}
          />
        </TouchableHighlight>
        <AntDesign style={styles.iconn} name="delete" onPress={delet} />
      </View>
    </View>
  );
}

export default TodoItem;

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
