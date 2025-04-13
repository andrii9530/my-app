import { Button, Modal,SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Lists from './Lists'

export type TestModaProps = {
    visible: boolean,
    onClose: () => void
}

const TectModal = ({visible, onClose}: TestModaProps) => {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}>
            <SafeAreaView style={styles.modalContainer}>
                {/*<Text style={styles.text}>
                    Lorem ipsum dolor sit amet. 
                </Text>*/}
                <Lists/>
                <Button title="Close" onPress={onClose}></Button>
            </SafeAreaView>    
        </Modal>
    )
}

export default TectModal

const styles = StyleSheet.create({
    modalContainer:{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 8,
    },
    text:{
        fontSize: 28,
        textAlign: 'center'
    }
})