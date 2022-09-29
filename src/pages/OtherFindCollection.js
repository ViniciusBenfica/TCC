import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SimpleButton from "../components/SimpleButton"
import Container from "../components/Container"
import Body from '../components/Body';
import { useNavigation } from '@react-navigation/native';
import ButtonSubtitle from '../components/ButtonSubtitle';

export default function OtherFindCollection() {

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>Que tipo de comprador você é?</Text>
      <Body>
        <ButtonSubtitle content="Ponto de" subtitle="coleta público"/>
        <ButtonSubtitle content="Ponto de" subtitle="coleta privado"/>
        <ButtonSubtitle content="Cooperativa" subtitle="ou associação"/>
        <ButtonSubtitle content="Cooperativa" subtitle="receptora"/>
        <ButtonSubtitle content="Setor privado" subtitle="ou comunidade"/>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({

});