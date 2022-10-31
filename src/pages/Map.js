import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Profile from "../assets/profile.svg"

export default function Map() {
    const [data, setData] = useState([
        { key: 'Vidros', label: 'Vidros', image: Profile },
        { key: 'Papel', label: 'Papel', image: Profile },
        { key: 'Plástico', label: 'Plástico', image: Profile },
        { key: 'Metal', label: 'Metal', image: Profile },
    ])

    const [filter, setFilter] = useState('')

    const [coordinate, setCoordinate] = useState([
        { latitude: 5, longitude: 5, key: 'Vidros' },
        { latitude: 10, longitude: 10, key: 'Papel' },
        { latitude: 12, longitude: 12, key: 'Papel' },
        { latitude: 20, longitude: 20, key: 'Plástico' },
        { latitude: 20, longitude: 20, key: 'Metal' },
    ])

    const filteredData = coordinate.filter(m => m.key === filter)

    return (
        <SafeAreaView style={styles.container}>
            <Text>ZECO</Text>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: coordinate[1].latitude,
                    longitude: coordinate[1].longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                {(filter ? filteredData : coordinate).map((item, index) => (
                    <Marker
                        // key={item.key}
                        key={index}
                        coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }}
                    // onPress={() => {}} navigate
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
                            <Profile width={70} height={70} fill="#4BC35F" />
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
    },
    categoryItem: {
        height: 110,
        backgroundColor: 'red',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    categoryImage: {
        width: 50,
        height: 50,
    },
    selectedCategory:{
        backgroundColor: 'black',
    }
});