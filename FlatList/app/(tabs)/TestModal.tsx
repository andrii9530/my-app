import { Button, Modal,SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type TestModaProps = {
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
                <ScrollView>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique quia perspiciatis aliquam rem non! Quasi suscipit harum possimus ea unde quam placeat repellat, esse facilis aliquam assumenda ducimus odit impedit?</Text>
                    <Button title="Close" onPress={() => onClose}></Button>
                </ScrollView>
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