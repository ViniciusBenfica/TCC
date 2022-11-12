import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Container from "../components/Container"
import SimpleButton from '../components/SimpleButton';
import { api } from '../services/Api';
import Body from '../components/Body';
import { useNavigation } from '@react-navigation/native';

export default function MarkerSchedules({ route }) {
  const navigation = useNavigation();
  const [inputInicio, setInputInicio] = useState()
  const [inputFim, setInputFim] = useState()
  const [dataTime, setDataTime] = useState({
    'segunda': {open: false, inicio: '', fim: ''},
    'terca': {open: false, inicio: '', fim: ''},
    'quarta': {open: false, inicio: '', fim: ''},
    'quinta': {open: false, inicio: '', fim: ''},
    'sexta': {open: false, inicio: '', fim: ''},
    'sabado': {open: false, inicio: '', fim: ''},
    'domingo': {open: false, inicio: '', fim: ''},
  })


const register = async () => {
  var times = {
    'segunda': {...dataTime['segunda'], inicio: inputInicio, fim: inputFim},
    'terca': {...dataTime['terca'], inicio: inputInicio, fim: inputFim},
    'quarta': {...dataTime['quarta'], inicio: inputInicio, fim: inputFim},
    'quinta': {...dataTime['quinta'], inicio: inputInicio, fim: inputFim},
    'sexta': {...dataTime['sexta'], inicio: inputInicio, fim: inputFim},
    'sabado': {...dataTime['sabado'], inicio: inputInicio, fim: inputFim},
    'domingo': {...dataTime['domingo'], inicio: inputInicio, fim: inputFim}
  }

  const {data} = await api.post('/schedules', {time: times, localId: route.params.Id})
  navigation.navigate('InitialMenu')
}

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>Finalize informações sobre a coleta</Text>
      <Body>
        <Text style={{fontSize: 17, color: "#808080"}}>Dias de coleta</Text>
        <View style={styles.days}>
          <TouchableOpacity 
            onPress={() => {setDataTime({...dataTime, segunda: {...dataTime['segunda'], open: !dataTime.segunda.open}})}} 
            style={[styles.day, dataTime?.segunda?.open ? styles.daySelect : null]}>
            <Text>D</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {setDataTime({...dataTime, terca: {...dataTime['terca'], open: !dataTime.terca.open}})}}
            style={[styles.day, dataTime.terca.open ? styles.daySelect : null]}>
            <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {setDataTime({...dataTime, quarta: {...dataTime['quarta'], open: !dataTime.quarta.open}})}}
            style={[styles.day, dataTime.quarta.open ? styles.daySelect : null]}>
            <Text>T</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {setDataTime({...dataTime, quinta: {...dataTime['quinta'], open: !dataTime.quinta.open}})}}
            style={[styles.day, dataTime.quinta.open ? styles.daySelect : null]}>
            <Text>Q</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {setDataTime({...dataTime, sexta: {...dataTime['sexta'], open: !dataTime.sexta.open}})}}
            style={[styles.day, dataTime.sexta.open ? styles.daySelect : null]}>
            <Text>Q</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {setDataTime({...dataTime, sabado: {...dataTime['sabado'], open: !dataTime.sabado.open}})}}
            style={[styles.day, dataTime.sabado.open ? styles.daySelect : null]}>
            <Text>S</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => {setDataTime({...dataTime, domingo: {...dataTime['domingo'], open: !dataTime.domingo.open}})}}
            style={[styles.day, dataTime.domingo.open ? styles.daySelect : null]}>
            <Text>S</Text>
          </TouchableOpacity>
        </View>
      </Body>

      <Body>
        <Text style={{fontSize: 17, color: "#808080"}}>Periodo de coleta</Text>
        <View style={styles.hour}>
          <TextInput
            style={styles.input}
            keyboardType={'numeric'}
            onChangeText={newText => setInputInicio(newText)}
          />
          
          <TextInput
            style={styles.input}
            keyboardType={'numeric'}
            onChangeText={newText => setInputFim(newText)}
          />
        </View>
      </Body>

      <Body>
        <SimpleButton todo={() => register()} content="Finalizar"/>
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