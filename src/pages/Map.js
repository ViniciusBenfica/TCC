import { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export default function Map() {
    const [data, setData] = useState([
        {key: 'basket', label: 'Vestuário'},
        {key: 'gas', label: 'Combustivel'},
    ])
    const [filter, setFilter] = useState('')

    const [coordinate, setCoordinate] = useState([
        {latitude: 5, longitude: 5, label: 'Vestuário'},
        {latitude: 10, longitude: 10, label: 'Vestuário'},
        {latitude: 20, longitude: 20, label: 'Combustivel'},
    ])
    
    const filteredData = coordinate.filter(m => m.label === filter)
    
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
                {(filter ? filteredData : coordinate).map((item) => (
                    <Marker
                        key={item.key}
                        coordinate={{
                            latitude: item.latitude,
                            longitude: item.longitude,
                        }}
                    />
                ))}
            </MapView>
            <View>
                <FlatList
                    data={data}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                        alignItems: 'center'
                    }}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => setFilter(item.label)}
                            key={item.key}
                        >
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
   map:{
    flex: 1,
   }
   
});