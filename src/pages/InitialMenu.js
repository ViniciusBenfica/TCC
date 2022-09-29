import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SimpleButton from "../components/SimpleButton"
import Container from "../components/Container"
import Body from '../components/Body';
import { useNavigation } from '@react-navigation/native';
import ButtonSubtitle from '../components/ButtonSubtitle';

export default function InitialMenu() {

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>O que você precisa?</Text>
      <Body>
        <ButtonSubtitle content="Solicitar" subtitle="serviço de coleta"/>
        <ButtonSubtitle content="Buscar" subtitle="pontos de coleta"/>
        <ButtonSubtitle content="Cadastrar" subtitle="pontos de reciclagem para coleta"/>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({

});