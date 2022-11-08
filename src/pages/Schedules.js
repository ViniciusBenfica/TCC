import { useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import Container from "../components/Container"
import { api } from '../services/Api';

export default function Schedules({ navigation, route }) {

console.log(route)

useEffect(() => {
    const getLocate = async () => {
        const {data} = await api.get(`?id=${route.id}`)
        console.log(data)
    }
    getLocate()
},[])

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>TESTE</Text>
      
      
    </Container>
  );
}

const styles = StyleSheet.create({

});