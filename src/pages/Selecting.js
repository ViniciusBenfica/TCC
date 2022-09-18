import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonSubtitle from './components/ButtonSubtitle';

export default function Selection() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 38, color: "#60D482" }}>Zeco</Text>
      <View style={styles.viewContainer}>
        <Text style={{ fontSize: 17, color: "#808080" }}>Que tipo de Zé é você</Text>
        <ButtonSubtitle content="Coletor" subtitle="de resíduos" />
        <ButtonSubtitle content="Produtor" subtitle="de resíduos" />
      </View>
      <Text style={{ fontSize: 17, color: "#60D482" }}>Já tenho uma conta</Text>
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
  viewContainer: {
    alignItems: 'center',
    width: "80%",
    margin: "auto",
  },
});