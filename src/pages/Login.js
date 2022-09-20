import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text } from 'react-native';
import Body from '../components/Body';
import Container from '../components/Container';
import Input from '../components/Input';
import SimpleButton from '../components/SimpleButton';

export default function Login() {

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>Digite suas informações</Text>
      <Body>
        <Input placeholder="Seu número ou e-mail" title="Celular ou e-mail"/>
        <Input placeholder="*****" title="Senha"/>
        <Text style={{fontSize: 17, color: "#60D482"}}>Esqueci minha senha</Text>
      </Body>
      <Body>
        <SimpleButton content="Confirmar"/>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({

});