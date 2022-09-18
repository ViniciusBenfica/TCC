import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TouchableOpacity  } from 'react-native';

export default function Selection() {
  return (
    <View style={styles.container}>
     <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
     <View style={styles.viewContainer}>
     <Text style={{fontSize: 17, color: "#808080"}}>Que tipo de Zé é você</Text>
        <TouchableOpacity style={[styles.button]}>
          <Text style={{fontSize: 45, color: "#fff"}}>Coletor</Text>
          <Text style={{fontSize: 16, color: "#fff"}}>de resíduos</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button]}>
          <Text style={{fontSize: 45, color: "#fff"}}>Produtor</Text>
          <Text style={{fontSize: 16, color: "#fff"}}>de resíduos</Text>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize: 17, color: "#60D482"}}>Já tenho uma conta</Text>
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
    backgroundColor: "#5FD189",
  },
});