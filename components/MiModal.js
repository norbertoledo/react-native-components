import React, {useState} from 'react'
import { View, StyleSheet, Text, Button, Modal, Alert } from 'react-native'


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'   
    },
    modalBackground: {
        backgroundColor: 'orange',
        margin: 55
    },
    purple: {
        backgroundColor: 'purple'
    }
});

export default MiModal = () => {


    const initialState = {
        modalVisible: false
    }

    const [state, setState] = useState(initialState);
    const {modalVisible} = state;

    const handlePress = ()=>{
        setState({modalVisible: !modalVisible})
    }


    return (
        <View style={[styles.container, styles.purple]}>
            
            <Button
                title="Abrir Modal!"
                onPress={handlePress}
            />
            <Modal
                visible={modalVisible}
                animationType='slide'
                transparent={true} 
                //Si no asignamos un backgroundColor desde los estilos, el fondo seria transparente
            >
                <View style={[styles.container, styles.modalBackground]}>
                    <Button 
                        title='Cerrar Modal'
                        onPress={handlePress}
                    />    
                </View>
            </Modal>

        
        </View>
    )
}


