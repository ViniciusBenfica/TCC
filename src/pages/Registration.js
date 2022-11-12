import { useNavigation, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import Body from '../components/Body';
import Container from '../components/Container';
import Input from '../components/Input';
import SimpleButton from '../components/SimpleButton';
import { useContext, useState } from 'react';
import { UserContext } from "../providers/UserContext"
import { api } from '../services/Api';

export default function Registration() {
  const navigation = useNavigation();
  const { params } = useRoute()
  const { setUser } = useContext(UserContext)

  const [dataUser, setDataUser] = useState({
    name: '',
    email: '',
    cpf: '',
    password: '',
    [params]: {}
  })

  const register = async () => {
    const {data, status} = await api.post('/user', dataUser)
    if(status == 201){
      data.produtor ? setUser({id:data.id, name: data.name, produtorId: data.produtor.id}) : setUser({id:data.id, name: data.name})
      navigation.navigate('InitialMenu')
    }
  }

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>Vamos começar seu cadastro.</Text>
      <Body>
        <Input setData={setDataUser} type='text' name="name" placeholder="Seu nome ou da empresa" title="Nome completo"/>
        <Input setData={setDataUser} type='text' name="email" placeholder="Seu email" title="Email"/>
        <Input setData={setDataUser} type='numeric' name="cpf" placeholder="Seu cpf" title="CPF"/>
        <Input setData={setDataUser} secureTextEntry={true} type='text' name="password" placeholder="*****" title="Senha"/>
      </Body>
      <Body>
        <SimpleButton todo={() => register()} content="Confirmar"/>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  
});