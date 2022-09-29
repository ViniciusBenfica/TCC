import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SimpleButton from "../components/SimpleButton"
import Container from "../components/Container"
import Body from '../components/Body';
import { useNavigation } from '@react-navigation/native';
import ButtonSubtitle from '../components/ButtonSubtitle';

export default function FindCollection() {

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>Que tipo de trabalho você faz?</Text>
      <Body>
        <ButtonSubtitle content="Catador" subtitle="de resíduos"/>
        <ButtonSubtitle content="Comprador" subtitle="de resíduos"/>
        <ButtonSubtitle content="Reutilizador" subtitle="de resíduos"/>
        <ButtonSubtitle content="Artista" subtitle="que reutiliza resíduos"/>
        <ButtonSubtitle content="Cooperativas" subtitle="de coletores"/>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({

});