import {StatusBar} from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Card, Button, Icon} from 'react-native-elements'

const dataURL = 'https://0q27loouph.execute-api.us-east-1.amazonaws.com';

const App = () => {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    useEffect(() => {
        loadData()
    }, [])

    const loadData = () => {
        fetch(dataURL)
            .then((res) => res.json())
            .then(data => setData(data))
            .catch((error) => console.log(error))
            .finally(() => setLoading(false))
    }

    return (
        <View style={styles.container}>
            <Card>
                <Card.Title>
                    {data.name}
                    {"\n"}
                    {data.nutritionist}
                </Card.Title>
                <Card.Divider/>
                <Card.Image source={{uri: data.image}}>
                </Card.Image>

                <Text style={{marginBottom: 10}}>
                    <Icon name='email' color='blue'/>{data.email}
                </Text>
                <Text style={{marginBottom: 10}}>
                    <Icon name='phone' color='blue'/>
                    {data.phone}
                </Text>
                <Button
                    onPress={() => {
                        loadData()
                    }}
                    icon={<Icon name='repeat' color='#ffffff'/>}
                    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                    title='Cambiar'/>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {color: '#42ff00'}
});

export default App