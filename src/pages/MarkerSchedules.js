import { useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Input from '../components/Input';
import Container from "../components/Container"
import SimpleButton from '../components/SimpleButton';
import { api } from '../services/Api';
import Body from '../components/Body';

export default function MarkerSchedules({ navigation, route }) {

  const [dataTime, setDataTime] = useState({
    'segunda': {open: false, inicio: '12:00', fim: '00:00'},
    'terca': {open: false, inicio: '12:00', fim: '00:00'},
    'quarta': {open: false, inicio: '12:00', fim: '00:00'},
    'quinta': {open: false, inicio: '12:00', fim: '00:00'},
    'sexta': {open: false, inicio: '12:00', fim: '00:00'},
    'sabado': {open: false, inicio: '12:00', fim: '00:00'},
    'domingo': {open: false, inicio: '12:00', fim: '00:00'},
  })

  const [selectDay, setSelectDay] = useState()
  const [inputInicio, setInputInicio] = useState()
  const [inputFim, setInputFim] = useState()

// console.log(route)

/* useEffect(() => {
    const getLocate = async () => {
        const {data} = await api.get(`?id=${route.id}`)
        console.log(data)
    }
    getLocate()
},[]) */

const confirmeDay = () => {
  setDataTime({...dataTime, [selectDay]: {...dataTime[selectDay], inicio: inputInicio, fim: inputFim}})
}

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>Finalize informações sobre a coleta</Text>
      <Body>
        <Text style={{fontSize: 17, color: "#808080"}}>Dias de coleta</Text>
        <View style={styles.days}>
          <TouchableOpacity 
            onPress={() => {setDataTime({...dataTime, segunda: {...dataTime['segunda'], open: !dataTime.segunda.open}}), setSelectDay(segunda)}} 
            style={[styles.day, dataTime?.segunda?.open ? styles.daySelect : null]}>
            <Text>D</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setDataTime({...dataTime, terca: {...dataTime['terca'], open: !dataTime.terca.open}})}
            style={[styles.day, dataTime.terca.open ? styles.daySelect : null]}>
            <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setDataTime({...dataTime, quarta: {...dataTime['quarta'], open: !dataTime.quarta.open}})}
            style={[styles.day, dataTime.quarta.open ? styles.daySelect : null]}>
            <Text>T</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setDataTime({...dataTime, quinta: {...dataTime['quinta'], open: !dataTime.quinta.open}})}
            style={[styles.day, dataTime.quinta.open ? styles.daySelect : null]}>
            <Text>Q</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setDataTime({...dataTime, sexta: {...dataTime['sexta'], open: !dataTime.sexta.open}})}
            style={[styles.day, dataTime.sexta.open ? styles.daySelect : null]}>
            <Text>Q</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setDataTime({...dataTime, sabado: {...dataTime['sabado'], open: !dataTime.sabado.open}})}
            style={[styles.day, dataTime.sabado.open ? styles.daySelect : null]}>
            <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => setDataTime({...dataTime, domingo: {...dataTime['domingo'], open: !dataTime.domingo.open}})}
            style={[styles.day, dataTime.domingo.open ? styles.daySelect : null]}>
            <Text>S</Text>
          </TouchableOpacity>
        </View>
      </Body>
      <Text style={{fontSize: 17, color: "#808080"}}>Periodo de coleta</Text>
      <View style={styles.hour}>

      <TextInput
        style={styles.input}
        keyboardType={'Number'}
        onChange={(event) => setInputInicio(event.target.value)}
      />
      <TextInput
        style={styles.input}
        keyboardType={'Number'}
        onChange={(event) => setInputFim(event.target.value)}
      />

      </View>
      <Body>

        <SimpleButton todo={() => confirmeDay()} content="Confirmar dia"/>
        {/* <SimpleButton todo={() => register()} content="Finalizar"/> */}
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
    backgroundColor: 'red',
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
    height: 20,
    width: 30,
    borderRadius: 10,
    padding: 5,
  },
  hour:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});