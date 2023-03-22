import React, { useCallback, useEffect, useState } from 'react';
import {Image, RefreshControl, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ListItem from '../../components/ListItem';
import { styles } from '../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';


export default function Homepage({ navigation }: any) {
 
    const [allKeys, setGetLocalStorageKeys] = useState([]);
    const [arrayItems, setArrayItems] = useState([]);

    const getData = async () => {
        await getAllKeys();
    }

    const getAllKeys = async () => {
        let keys = [];
        try {
          setGetLocalStorageKeys(await AsyncStorage.getAllKeys());
        } catch(e) {
          console.log(e);
        }
        return keys;
      }

      const clearAll = async () => {
        try {
          await AsyncStorage.clear();
          await getData();
        } catch(e) {
          console.log(e);
        }
      }

       const getItem = async (prop: string) => {
        try {
          const item= await AsyncStorage.getItem(prop);
          return item != null ? item : null;
          } catch (e) {
            console.log(e);
          }
        };

        const getAllItens = async () => {
          const tempArr = [];
          if(allKeys.length > 0){
          for (let i = 0; i < allKeys.length; i++) {
          tempArr.push({id: allKeys[i], value: await getItem(allKeys[i])});
         }
       }
       setArrayItems(tempArr);
    }

     useFocusEffect(
        useCallback(() => {
            getAllKeys();
        }, [])
      );

      useEffect(() => {
        getAllItens();   
     }, [allKeys]);

     const handleDelete = async (key: string) => {
      try {
          await AsyncStorage.removeItem(key);
          await getData();
        } catch(e) {
          console.log(e);
        }
      }

  return (
      <SafeAreaView>
        <View style={styles.homeContainer}>
        <TouchableOpacity
        onPress={() => clearAll()} >
        <Text style={styles.limparText}>Limpar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>To Do List</Text> 
        <TouchableOpacity
        onPress={() => navigation.navigate('RegisterTask')} >
        <Image 
        source={require('../../assets/add.png')}
        style={styles.addButton} />
        </TouchableOpacity>
        </View>  

        <FlatList
        data={arrayItems}
        renderItem={ ({ item }) => <ListItem data={item} onRemove={handleDelete}/>}
        keyExtractor={({ id }) => id} />
    
    </SafeAreaView>
  );
}


