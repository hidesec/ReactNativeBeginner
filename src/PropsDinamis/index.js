import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

const Story = (props) => {
    return(
        <View style={{alignItems: 'center', marginRight: 20}}>
            <Image source={{uri: props.gambar}} style={{width: 70, height: 70, borderRadius: 70 / 2}}/>
            <Text>{props.judul}</Text>
        </View>
    )
}

const PropsDinamis = () => {
    return (
        <View>
            <Text>Props Dinamis</Text>
            <ScrollView horizontal>
                <View style={{flexDirection: 'row'}}>
                    <Story judul="Story IG" gambar="https://uiaa-web.azureedge.net/wp-content/uploads/2017/12/2018_banner.jpg"/>
                    <Story judul="Story WA" gambar="https://cdn.cdnparenting.com/articles/2018/08/602444213-H.jpg"/>
                </View>
            </ScrollView>
        </View>
    )
}

export default PropsDinamis
