import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Communication = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.textTitle}>Komunikasi Anta Komponen</Text>
        </View>
    )
}

export default Communication;

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    textTitle: {
        textAlign: 'center'
    }
})
