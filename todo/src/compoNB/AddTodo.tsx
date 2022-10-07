import {Box, Icon, Input, Text} from 'native-base';
import Foundation from 'react-native-vector-icons/Foundation';
import React, {FC, useState} from 'react';
import {firestore} from '../../App';

interface Props {
  addo: () => void;
}

const AddTodo: FC<Props> = props => {
  const usersCollectionRef = firestore().collection('todos');
  const [text, setText] = useState<string>('');

  const addVal = () => {
    setText('');
    usersCollectionRef //addition of object to collection
      .add({
        todo: text,
        completed: false,
      })
      .then(() => {
        // console.log('todo added!');
      });
    props.addo();
  };

  const changeHandler = (val: string): void => {
    setText(val);
  };

  return (
    <>
      <Box>
        <Input
          variant="outline"
          backgroundColor="#fff"
          rounded="lg"
          placeholder="add todo"
          InputRightElement={
            <Icon
              as={<Foundation name="plus" />}
              size={5}
              mr="2"
              color="#000"
              onPress={addVal}
            />
          }
          _focus={{borderColor: '#000'}}
          color="#000"
          m="1"
          h="50"
          mt="5"
          fontSize="15"
          onChangeText={val => changeHandler(val)}
          onSubmitEditing={addVal}
        />
        <Text ml="3" fontSize="15" bold color="#fff" mb="2" mt="4">
          Your To-Do List:
        </Text>
      </Box>
    </>
  );
};

export default AddTodo;
