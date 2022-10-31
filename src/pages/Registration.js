import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import Body from '../components/Body';
import Container from '../components/Container';
import Input from '../components/Input';
import SimpleButton from '../components/SimpleButton';
import axios from 'axios'
import { useEffect, useState } from 'react';

export default function Registration() {
  const navigation = useNavigation();
  const { params } = useRoute()

  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    cpf: '',
    password: '',
    [params]: ''
  })

  const register = async () => {
    const {data} = await axios.post('http://192.168.3.125:3333/user',{
      dataUser
    })
    console.log(data)
  }

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>Vamos começar seu cadastro.</Text>
      <Body>
        <Input setDataUser={setDataUser} name="name" placeholder="Seu nome ou da empresa" title="Nome completo"/>
        <Input setDataUser={setDataUser} name="email" placeholder="Seu número ou e-mail" title="Celular ou e-mail"/>
        <Input setDataUser={setDataUser} name="cpf" placeholder="Seu cpf" title="CPF ou CNPJ"/>
        <Input setDataUser={setDataUser} name="password" placeholder="*****" title="Senha"/>
        {/* <Input placeholder="abcd1234" title="Repetir senha"/> */}
      </Body>
      <Body>
        <SimpleButton todo={() => {navigation.navigate('Code'), register()}} content="Confirmar"/>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  

});