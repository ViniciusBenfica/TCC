import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';

export default function App() {
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
        <TouchableOpacity style={[styles.button, {backgroundColor: "#fff"}]}>
          <Text style={{color: "black"}}> Já tenho uma conta </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: "#5FD189"}]}>
          <Text style={{color: "#fff"}}> Criar cadastro </Text>
        </TouchableOpacity>
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
    // height: "100%",
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
  },
  viewContainer:{
    alignItems: 'center',
    width: "80%",
    margin: "auto",
  },
  button: {
    alignItems: 'center',
    padding: 15,
    width: "100%",
    marginTop: 10,
    borderRadius: 15,
  },
});