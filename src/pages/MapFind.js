import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { api } from '../services/Api';
import { useNavigation } from '@react-navigation/native';

import Document from '../assets/document.png';
import Glass from '../assets/glass.png';
import Metal from '../assets/metal.png';
import Plastic from '../assets/plastic.png';

export default function MapFind() {

    const [data, setData] = useState([
        { key: 'Vidros', label: 'Vidros', image: Glass },
        { key: 'Papel', label: 'Papel', image: Document },
        { key: 'Plástico', label: 'Plástico', image: Plastic },
        { key: 'Metal', label: 'Metal', image: Metal },
    ])
    const [filter, setFilter] = useState('')
    const navigation = useNavigation();
    const [coordinate, setCoordinate] = useState([])
    const filteredData = coordinate.filter(m => m.tipoLixo === filter)

    useEffect(() => {
        const getLocate = async () => {
            const {data} = await api.get('/local')
            setCoordinate(data)
        }
        getLocate()
    },[])

    return (
        <SafeAreaView style={styles.container}>
            <Text style={{ fontSize: 38, color: "#60D482", textAlign: 'center', backgroundColor: '#DCDCDC' }}>Zeco</Text>
            <MapView
                style={styles.map}
                /* initialRegion={{
                    latitude: coordinate[1].latitude,
                    longitude: coordinate[1].longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} */
            >
                {(filter ? filteredData : coordinate).map((item, index) => (
                    <Marker
                        // key={item.key}
                        key={index}
                        coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }}
                        pinColor="green"
                        onPress={() => navigation.navigate('Schedules', { item } )}
                    />
                ))}
            </MapView>
            <View style={styles.categoryContainer}>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                    contentContainerStyle={{
                        alignItems: 'center'
                    }}
                    renderItem={({ item }) => (
                        <TouchableOpacity 
                            style={[styles.categoryItem, filter == item.key ? styles.selectedCategory : null]}
                            onPress={() => setFilter(filter === item.key ? "" : item.key )}
                        >
                             <Image
                                source={item.image}
                                style={{ width: 30, height: 30, marginBottom: 5 }}
                            />
                            <Text>{item.label}</Text>
                        </TouchableOpacity>
                    )}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    categoryContainer: {
        padding: 10,
        backgroundColor: '#DCDCDC',
    },
    categoryItem: {
        height: 90,
        width: 90,
        backgroundColor: '#5FD189',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    categoryImage: {
        width: 50,
        height: 50,
    },
    selectedCategory:{
        backgroundColor: '#5C7A67',
    }
});