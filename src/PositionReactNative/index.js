import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import cart from './../../assets/img/cart.png'

const PositionReactNative = () => {
    return (
        <View style={styles.wrapper}>
            <Text>Materi Position</Text>
            <View style={styles.cartWrapper}>
                <Image source={cart} style={styles.iconCart}/>
                <Text style={styles.notif}>10</Text>
            </View>
            <Text style={styles.text}>Keranjang Belanja Anda</Text>
        </View>
    )
}

export default PositionReactNative;

const styles = StyleSheet.create({
    iconCart : {width: 50, height: 50},
    cartWrapper : {borderWidth: 1, borderColor: '#4398D1', width: 93, height:93, borderRadius: 93/2, justifyContent: 'center', alignItems: 'center', position: 'relative', marginTop: 20},
    wrapper: {padding: 20, alignItems: 'center'},
    text : {fontSize: 12, color: '#777777', fontWeight: '700', marginTop: 8},
    notif : {
        fontSize : 12,
        color : 'white',
        backgroundColor : '#6FCF97',
        padding: 4,
        borderRadius : 25,
        width: 24,
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0
    }
})
