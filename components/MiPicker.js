import React, {useState, useEffect} from 'react'
import { View, Text, Picker } from 'react-native'

const MiPicker = () => {

    const initialState = {
        value: ''
    };
    const [state, setState] = useState(initialState);

    const {value} = state;

    useEffect(
        ()=>{
            setState({value: 'id_3'});
        },[]
    )

    const handleValueChange = (value, index) => {
        setState( {value} );
    }

    /* 
    - Picker posee propiedades:
    -- selectedValue: Valor seleccionado por defecto

    - Picker posee componentes hijos:
    -- Picker.Item: tiene 2 propiedades:
    --- label: Etiqueta / Nombre que vamos a ver del item
    --- value: Generalmente es el ID del item que vamos a hacer referencia
    */
    return (

            <Picker
                selectedValue={value}
                style={{width: 300}}
                onValueChange={(value, index) => handleValueChange(value, index)}
            >

                <Picker.Item
                    label="Norberto Ledo"
                    value="id_1"
                />
                <Picker.Item
                    label="Alicia Centurión"
                    value="id_2"
                />
                <Picker.Item
                    label="Oscar Ledo"
                    value="id_3"
                />
                <Picker.Item
                    label="Elvis Mostro"
                    value="id_4"
                />
                <Picker.Item
                    label="Negra Flaca"
                    value="id_5"
                />
            
            </Picker>

    )
}

export default MiPicker
