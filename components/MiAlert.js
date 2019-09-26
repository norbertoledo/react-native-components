import React from 'react'
import { View, Text, Alert, Button } from 'react-native'

const MiAlert = () => {

    /*
    Alert -> Recibe 3 argumentos:
    - titulo
    - mensaje
    - Arreglo de objetos por cada boton
    */
    const handlePress = ()=>{
        Alert.alert(
            'Soy el titulo', 
            'Mensaje de la alerta',
            [
                {
                    text: 'Aceptar',
                    onPress: ()=>Alert.alert('Presionaste CANCELAR')
                },
                {
                    text: 'Cancelar',
                    onPress: ()=>Alert.alert('Presionaste CANCELAR')
                }
            ]
            );
    }

    return (
        <View>
        <Button
            title="Pinchame!"
            onPress={handlePress}
        />
            
        </View>
    )
}

export default MiAlert
