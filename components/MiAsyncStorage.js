import React, {useState, useEffect} from 'react'
import { View, Text, Alert, Button, AsyncStorage } from 'react-native'

const MiAsyncStorage = () => {


    const getDato = async () => {
        const dato = await AsyncStorage.getItem('dato');
        Alert.alert("DATO!", dato);
    };

    const setDato = async (valor) => {
        await AsyncStorage.setItem('dato', valor);
    }

    const handlePress = async()=>{
        const dato = await setDato('Texto guardado en el storage4');
    }

    useEffect(()=>{ 
        getDato();
        
    },[]);

    return (
        <View>
            <Button
                title='Valor Storage'
                onPress={handlePress}
            />
        </View>
    )
}

export default MiAsyncStorage
