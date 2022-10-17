import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text } from 'react-native';
import Body from '../components/Body';
import Container from '../components/Container';
import Input from '../components/Input';
import SimpleButton from '../components/SimpleButton';

export default function Registration() {
  const navigation = useNavigation();

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>Vamos começar seu cadastro.</Text>
      <Body>
        <Input placeholder="Seu nome ou da empresa" title="Nome completo"/>
        <Input placeholder="Seu número ou e-mail" title="Celular ou e-mail"/>
        <Input placeholder="Seu cpf" title="CPF ou CNPJ"/>
        <Input placeholder="*****" title="Senha"/>
        <Input placeholder="abcd1234" title="Repetir senha"/>
      </Body>
      <Body>
        <SimpleButton todo={() => navigation.navigate('Code')} content="Confirmar"/>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({

});