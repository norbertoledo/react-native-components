import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const MiImage = () => {
    
    /**
     * IMAGE
     * Dos formas de SOURCE:
     * - Alojadas en la aplicacion
     * - Alojadas en el servidor
     * -- Las imagenes que vienen por uri 
     * -- deben servirse desde un servidor https
     * -- y hay que asignarles un width y un height
     * 
     */

    return (
        <View style={ styles.container}>
            <Image
                source={ require('../assets/icon.png') }
            />
            <Image
                source={ {uri: 'https://placekitten.com/300/300'} }
                style={ {width: 300, height: 300} }
            />
        </View>
    )
}

export default MiImage

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flex: 1,
        justifyContent:  'center',
        alignItems: 'center'
    }
});
