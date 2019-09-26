import React from 'react'
import { View, Text, ActivityIndicator } from 'react-native'

const MiActivityIndicator = () => {



    /*
    Es un loading
    - Recibe 2 propiedades:
    -- Size -> 'small' / 'large'
    -- Color -> Hexa /nombre
    */

    return (
        <View>
            <ActivityIndicator
                size='large'
                color= '#0000ff'
            />
            <ActivityIndicator
                size='small'
                color= 'red'
            />
            <ActivityIndicator
                size='large'
                color= 'teal'
            />
            
        </View>
    )
}

export default MiActivityIndicator
