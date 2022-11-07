import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { api } from '../services/Api';
import Document from '../assets/document.png';
import Glass from '../assets/glass.png';
import Metal from '../assets/metal.png';
import Plastic from '../assets/plastic.png';

import { UserContext } from "../providers/UserContext"

export default function MapMarker() {
    const { user } = useContext(UserContext)
    const [select, setSelect] = useState()

    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    const [data, setData] = useState([
        { key: 'Vidros', label: 'Vidros', image: Glass },
        { key: 'Papel', label: 'Papel', image: Document },
        { key: 'Plástico', label: 'Plástico', image: Plastic },
        { key: 'Metal', label: 'Metal', image: Metal },
    ])

    const register = async () => {
        const { data } = await api.post('/local',
            {
                latitude: region.latitude,
                longitude: region.longitude,
                tipoLixo: select,
                produtorId: user.produtorId
            }
        )
        console.log(data)
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.marker} onPress={() => register()}><Text>MARCAR LOCAL</Text></TouchableOpacity>
            <Text>ZECO</Text>
            <MapView
                style={styles.map}
                /* initialRegion={{
                    latitude: coordinate[1].latitude,
                    longitude: coordinate[1].longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} */
                onRegionChangeComplete={(region) => setRegion(region)}>
                <Marker
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                    pinColor="green"
                />
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
                            style={[styles.categoryItem, select == item.key ? styles.selectedCategory : null]}
                            onPress={() => setSelect(select === item.key ? "" : item.key)}>
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
    marker: {
        height: 30,
        backgroundColor: '#5FD189',
        width: 150,
        position: 'absolute',
        bottom: 130,
        right: '50%',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        
        zIndex: 50000,
        transform: [
            { translateX: 65 },
        ],
    },
    categoryImage: {
        width: 50,
        height: 50,
    },
    selectedCategory: {
        backgroundColor: 'black',
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
    selectedCategory: {
        backgroundColor: '#5C7A67',
    },
});