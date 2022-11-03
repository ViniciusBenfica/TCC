import { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView, FlatList, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Profile from "../assets/profile.svg"
import axios from 'axios'
import { UserContext } from "../providers/UserContext"

export default function MapMarker() {
    const { user } = useContext(UserContext)
    const [region, setRegion] = useState({
        latitude: 51.5079145,
        longitude: -0.0899163,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

    const [data, setData] = useState([
        { key: 'Vidro', label: 'Vidros', image: Profile },
        { key: 'Papel', label: 'Papel', image: Profile },
        { key: 'Plástico', label: 'Plástico', image: Profile },
        { key: 'Metal', label: 'Metal', image: Profile },
    ])

    const [select, setSelect] = useState()

    console.log(user)
      const register = async () => {
        const {data} = await axios.post('http://192.168.3.125:3333/local',
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
            {/* <Text style={styles.text}>Current latitude: {region.latitude}</Text>
            <Text style={styles.text}>Current longitude: {region.longitude}</Text> */}
            <MapView
                style={styles.map}
                /* initialRegion={{
                    latitude: coordinate[1].latitude,
                    longitude: coordinate[1].longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }} */
                onRegionChangeComplete={(region) => setRegion(region)}
            >
                <Marker
                    // key={item.key}
                    coordinate={{
                        latitude: region.latitude,
                        longitude: region.longitude,
                    }}
                // onPress={() => {}} navigate
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
                            onPress={() => setSelect(select === item.key ? "" : item.key )}
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
    marker:{
        height: 30,
        backgroundColor: 'red',
        width: 130,
        position: 'absolute',
        inset: 0,
        top: '10%',
        right: '50%',
        zIndex: 50000,
        transform: [
            { translateX: 50  },
            { translateY: -50 }
        ],
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