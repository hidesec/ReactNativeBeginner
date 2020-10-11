import React, {Component, useState} from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

const Counter = () =>{
    const [Number, setNumber] = useState(0)
    return (
        <View>
            <Text>{Number}</Text>
            <Button title="Tambah" onPress={() => setNumber(Number + 1)}/>
        </View>
    )
}

class CounterClass extends Component{
    state = {
        Number: 0
    }
    render(){
        return(
            <View>
                <Text>{this.state.Number}</Text>
                <Button title="Tambah" onPress={() => this.setState({Number: this.state.Number + 1})}/>
            </View>
        )
    }
}

const StateDinamis = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.textTitle}>State Dinamis</Text>
            <Counter />
            <CounterClass />
        </View>
    )
}

export default StateDinamis;

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center',
    }
})