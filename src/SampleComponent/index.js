import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

const SampleComponent = () => {
    return (
        <View>
        <Hans />
        <Text>Hafiizh</Text>
        <Text>Hafiizh</Text>
        <Text>Hafiizh</Text>
        <Text>Hafiizh</Text>
        <Text>Hafiizh</Text>
        <Text>Hafiizh</Text>
        <Text>Hafiizh</Text>
        <Text>Hllor</Text>
        <Text>Hllor</Text>
        <Text>Hllor</Text>
        <Text>Hllor</Text>
        <Text>Hllor</Text>
        <Text>Hllor</Text>

        <Photo />
        <TextInput style={{borderWidth: 1}}/>
        </View>
    )
}

const Hans = () => {
    return <Text>Raihan</Text>
}

const Photo = () => {
    return <Image source={{uri: 'http://placeimg.com/100/100/tech'}} style={{width: 100, height:100}}/>
}

export default SampleComponent;