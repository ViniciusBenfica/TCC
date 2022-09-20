import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Body from '../components/Body';
import ButtonSubtitle from '../components/ButtonSubtitle';
import Container from "../components/Container"

export default function Selection() {
  return (
    <Container>
      <Text style={{ fontSize: 38, color: "#60D482" }}>Zeco</Text>
      <Body>
        <Text style={{ fontSize: 17, color: "#808080" }}>Que tipo de Zé é você</Text>
        <ButtonSubtitle content="Coletor" subtitle="de resíduos" />
        <ButtonSubtitle content="Produtor" subtitle="de resíduos" />
      </Body>
      <Text style={{ fontSize: 17, color: "#60D482" }}>Já tenho uma conta</Text>
    </Container>
  );
}

const styles = StyleSheet.create({

});