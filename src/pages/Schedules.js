import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from "../components/Container"
import { api } from '../services/Api';
import Body from '../components/Body';

export default function MarkerSchedules({ route }) {

  const [dataTime, setDataTime] = useState({
    'segunda': {open: false, inicio: '', fim: ''},
    'terca': {open: false, inicio: '', fim: ''},
    'quarta': {open: false, inicio: '', fim: ''},
    'quinta': {open: false, inicio: '', fim: ''},
    'sexta': {open: false, inicio: '', fim: ''},
    'sabado': {open: false, inicio: '', fim: ''},
    'domingo': {open: false, inicio: '', fim: ''},
  })

  useEffect(() => {
      const getLocate = async () => {
          const {data} = await api.get(`/schedules?id=1`)
          setDataTime(data.time)
      }
      getLocate()
  },[])

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>Informações sobre a coleta</Text>
      <Body>
        <Text style={{fontSize: 17, color: "#808080"}}>Dias de coleta</Text>
        <View style={styles.days}>
          <View 
            style={[styles.day, dataTime?.segunda.open ? styles.daySelect : null]}>
            <Text>D</Text>
          </View>
          <View 
            style={[styles.day, dataTime?.terca.open ? styles.daySelect : null]}>
            <Text>S</Text>
          </View>
          <View 
            style={[styles.day, dataTime?.quarta.open ? styles.daySelect : null]}>
            <Text>T</Text>
          </View>
          <View 
            style={[styles.day, dataTime?.quinta.open ? styles.daySelect : null]}>
            <Text>Q</Text>
          </View>
          <View 
            style={[styles.day, dataTime?.sexta.open ? styles.daySelect : null]}>
            <Text>Q</Text>
          </View>
          <View 
            style={[styles.day, dataTime?.sabado.open ? styles.daySelect : null]}>
            <Text>S</Text>
          </View>
          <View 
            style={[styles.day, dataTime?.domingo.open ? styles.daySelect : null]}>
            <Text>S</Text>
          </View>
        </View>
      </Body>

      <Body>
        <Text style={{fontSize: 17, color: "#808080"}}>Periodo de coleta</Text>
        <View style={styles.hour}>
          <View style={styles.input}><Text>{dataTime.segunda.inicio}</Text></View>
          
          <View style={styles.input}><Text>{dataTime.segunda.fim}</Text></View>
        </View>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  days:{
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  day:{
    width: 30,
    height: 30,
    borderRadius: 100,
    backgroundColor: '#F9F9F9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  daySelect:{
    backgroundColor: '#5FD189',
  },
  input: {
    backgroundColor: '#F9F9F9',
    height: 30,
    width: 50,
    borderRadius: 10,
    padding: 5,
  },
  hour:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '40%',
  }
});