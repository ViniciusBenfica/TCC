import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';
import SimpleButton from "./components/SimpleButton"

export default function InitialPage() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundZeco}>
        <View style={styles.viewContainer}>
          <Text style={{fontSize: 69, color: "#fff"}}>Zeco</Text>
          <Text style={{fontSize: 18, color: "#fff", fontStyle: "italic"}}>Reciclar nunca foi tão simples</Text>
        </View>
        <View>
          <Text style={{fontSize: 15, color: "#fff", textAlign: 'center'}}>
            Zeco é um app pensado para conectar{"\n"}
            o Zé, que trabalha reciclando resíduos{"\n"}
            ao Zé que os produz.
          </Text>
        </View>
      </View>
      <View style={styles.viewContainer}>
      <SimpleButton backgroundColor="#fff" colorText="black" content="Já tenho conta"/>
      <SimpleButton content="Criar cadastro"/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#DCDCDC",
  },
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
  viewContainer:{
    alignItems: 'center',
    width: "80%",
    margin: "auto",
  },
});