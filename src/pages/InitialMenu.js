import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SimpleButton from "../components/SimpleButton"
import { useNavigation } from '@react-navigation/native';
import Container from "../components/Container"
import Body from '../components/Body';
import ButtonSubtitle from '../components/ButtonSubtitle';
import Icon from "../assets/icon.svg"

export default function InitialMenu() {
  const navigation = useNavigation();
  
  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>O que você precisa?</Text>
      <Body>
        <ButtonSubtitle todo={() => navigation.navigate('FindCollection')} content="Solicitar" subtitle="serviço de coleta"/>
        <ButtonSubtitle todo={() => navigation.navigate('OtherFindCollection')} content="Buscar" subtitle="pontos de coleta"/>
        <ButtonSubtitle todo={() => navigation.navigate('Mapa')} content="Cadastrar" subtitle="pontos de reciclagem para coleta"/>
      </Body>
      <View style={[styles.menu]}>
        {/* <Text>Inicio</Text> */}
        <Icon fill="#4BC35F" width={70} height={70}/>
        <Text>Perfil</Text>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  menu: {
    display: 'flex',
    padding: 10,
    width: "100%",
    backgroundColor: "#EAEAEA",
  },
});