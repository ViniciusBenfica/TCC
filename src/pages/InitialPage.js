import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SimpleButton from "../components/SimpleButton"
import Container from "../components/Container"
import Body from '../components/Body';

export default function InitialPage() {
  return (
    <Container>
      <View style={styles.backgroundZeco}>
        <Body>
          <Text style={{ fontSize: 69, color: "#fff" }}>Zeco</Text>
          <Text style={{ fontSize: 18, color: "#fff", fontStyle: "italic" }}>Reciclar nunca foi tão simples</Text>
        </Body>
        <View>
          <Text style={{ fontSize: 15, color: "#fff", textAlign: 'center' }}>
            Zeco é um app pensado para conectar{"\n"}
            o Zé, que trabalha reciclando resíduos{"\n"}
            ao Zé que os produz.
          </Text>
        </View>
      </View>
      <Body>
        <SimpleButton backgroundColor="#fff" colorText="black" content="Já tenho conta" />
        <SimpleButton content="Criar cadastro" />
      </Body>
      <StatusBar style="auto" />
    </Container>
  );
}

const styles = StyleSheet.create({
  backgroundZeco: {
    backgroundColor: "#5FD189",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: 'center',
    width: "100%",
    height: "70%",
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30
  },
});