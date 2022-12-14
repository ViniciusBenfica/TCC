import { StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Container from "../components/Container"
import Body from '../components/Body';
import ButtonSubtitle from '../components/ButtonSubtitle';
import Profile from "../assets/profile.svg"
import Start from "../assets/start.svg"
import { useContext, useState } from 'react';
import { UserContext } from "../providers/UserContext"

export default function InitialMenu() {
  const navigation = useNavigation();
  const [selectOption, setSelectOption] = useState(false)
  const { user } = useContext(UserContext)

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>O que você precisa?</Text>
      <Body>
        <ButtonSubtitle todo={() => navigation.navigate('MapFind')} content="Buscar" subtitle="pontos de coleta"/>
        {user.produtorId &&
          <ButtonSubtitle todo={() => navigation.navigate('MapMarker')} content="Cadastrar" subtitle="pontos de reciclagem para coleta"/>
        }
      </Body>
      <View style={styles.menu}>
       {/*  <Profile onPress={() => setSelectOption(!selectOption)} fill={selectOption ? "#4BC35F" : '#808080'} width={70} height={70}/>
        <View style={styles.line}></View>
        <Start onPress={() => setSelectOption(!selectOption)} fill={selectOption ? "#4BC35F" : '#808080'} width={70} height={70}/> */}
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  menu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    width: "100%",
    backgroundColor: "#EAEAEA",
    marginBottom: -35,
  },
  line:{
    height: '80%',
    width: 1,
    backgroundColor: '#707070'
  },
 
});