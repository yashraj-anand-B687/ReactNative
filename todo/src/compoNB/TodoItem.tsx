import {Alert, Box, Checkbox, Container, HStack, Icon, Text} from 'native-base';
import React, {FC} from 'react';
import Foundation from 'react-native-vector-icons/Foundation';
import {firestore} from '../../App';

type items = {
  id: string;
  todo: string;
  completed: boolean;
};

interface Props {
  item: items;
  deleo: () => void;
  editHandler: (arg0: string) => void;
}

const TodoItem: FC<Props> = props => {
  const usersCollectionRef = firestore().collection('todos');

  const compl = () => {
    if (props.item.completed) {
      usersCollectionRef //delete specific object
        .doc(props.item.id) //pass id
        .update({
          completed: false,
        })
        .then(() => {
          // console.log('todo incompleted!');
        })
        .catch(err => {
          Alert(err);
        });
      props.deleo();
    } else {
      usersCollectionRef //delete specific object
        .doc(props.item.id) //pass id
        .update({
          completed: true,
        })
        .then(() => {
          // console.log('todo completed!');
        })
        .catch(err => {
          Alert(err);
        });
      props.deleo();
    }
  };

  const delet = () => {
    usersCollectionRef //delete specific object
      .doc(props.item.id) //pass id
      .delete()
      .then(() => {
        // console.log('todo removed!');
      })
      .catch(err => {
        Alert(err);
      });
    props.deleo();
  };

  return (
    <>
      <Box>
        <Box
          bg="#fff"
          borderColor="#000"
          borderWidth="1"
          _text={{
            fontSize: 'md',
            fontWeight: 'medium',
            color: 'warmGray.50',
            letterSpacing: 'lg',
          }}
          rounded="lg"
          m="1"
          px="4"
          py="4">
          <HStack space={2} justifyContent="space-between">
            <Container flexDirection="row">
              <Checkbox
                value="true"
                isChecked={props.item.completed}
                accessibilityLabel="This is a dummy checkbox"
                mr="2"
                onChange={() => compl()}
              />
              {props.item.completed ? (
                <Text textDecorationLine="line-through">{props.item.todo}</Text>
              ) : (
                <Text>{props.item.todo}</Text>
              )}
            </Container>
            <Container flexDirection="row">
              <Icon
                as={<Foundation name="pencil" />}
                size={5}
                mr="2"
                flexDirection="row-reverse"
                color="#000"
                onPress={() => props.editHandler(props.item.id)}
              />
              <Icon
                as={<Foundation name="trash" />}
                size={5}
                mr="2"
                flexDirection="row-reverse"
                color="#000"
                onPress={() => delet()}
              />
            </Container>
          </HStack>
        </Box>
      </Box>
    </>
  );
};

export default TodoItem;
