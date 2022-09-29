import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SimpleButton from "../components/SimpleButton"
import Container from "../components/Container"
import Body from '../components/Body';
import { useNavigation } from '@react-navigation/native';
import ButtonSubtitle from '../components/ButtonSubtitle';

export default function RequestCollection() {

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>Sua coleta é residencial ou comercial?</Text>
      <Body>
        <ButtonSubtitle content="Residência" subtitle="ou condomínio"/>
        <ButtonSubtitle content="Comércio" subtitle="ou serviços"/>
        <ButtonSubtitle content="Organização" subtitle="pública ou coletiva"/>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({

});