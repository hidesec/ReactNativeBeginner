import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import flower from './../assets/img/flower.jpg';

const StylingReactNativeComponent = () => {
    return (
        <View>
        {/* <Text style={styles.text}>Styling</Text> */}
        <View style={styles.view}>
            <Image source={flower} style={styles.image}/>
            <Text style={styles.flowerstxt}>Red Flower</Text>
            <Text style={styles.price}>Rp. 250.000,-</Text>
            <Text style={styles.address}> Jakarta Barat</Text>
            <View style={styles.viewBeli}>
            <Text style={styles.textBeli}>BELI</Text>
            </View>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'green'
    },

    view: {
        padding: 12, 
        backgroundColor: '#F2F2F2', 
        width: 212,
        borderRadius: 8
    },

    image: {
        width: 188,
        height: 107,
        borderRadius: 8
    },

    flowerstxt: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 16
    },

    price: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#F2994A',
        marginTop: 12
    },

    address: {
        fontSize: 12, 
        fontWeight: '300',
        marginTop: 12
    },

    viewBeli: {
        backgroundColor: '#6FCF97',
        paddingVertical: 6,
        borderRadius: 22,
        marginTop: 20
    }, 

    textBeli: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white', 
        textAlign: 'center'
    }
})

export default StylingReactNativeComponent;