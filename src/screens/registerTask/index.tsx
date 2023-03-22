import React, { useState } from 'react';
import {Button, Pressable, Text, TextInput, View} from 'react-native';
import { styles } from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function RegisterTask({ navigation }) {

    const [description, setdescription] = useState('');

    const cadastrar = async (key) => {
        if(description != ''){
            const keyLenght = await getAllKeys();
            const newKey = (keyLenght.length != 0) ? Math.max(...keyLenght) + 1 : 1;
            AsyncStorage.setItem(newKey.toString(), description);
            navigation.navigate('Homepage');
            const afterKeyLenght = await getAllKeys();
            buscar(afterKeyLenght.length.toString());
        }
    }

    const buscar = async (key) => {
        const valor = await AsyncStorage.getItem(key);        
    }
   
    const getAllKeys = async () => {
        let keys = [];
        try {
          keys = await AsyncStorage.getAllKeys();
        } catch(e) {
          console.log(e);
        }
        return keys;
      }

  return (
    <View style={styles.container}>
        
        <Text style={styles.title}>Cadastre uma nova tarefa</Text>
        <Text style={styles.descricaoText}>Descrição: </Text>
        <TextInput
        style={styles.input}
        onChangeText={(value) => setdescription(value)}
        placeholder="Exemplo: Almoço"
        />
        <Pressable style={styles.registerButton} onPress={cadastrar}>
        <Text style={styles.registerText}>Cadastrar</Text>
        </Pressable>
    </View>
  );
}
