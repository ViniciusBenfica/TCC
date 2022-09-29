import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import Body from '../components/Body';
import Container from '../components/Container';
import SimpleButton from '../components/SimpleButton';

export default function Code() {

  return (
    <Container>
      <Text style={{fontSize: 38, color: "#60D482"}}>Zeco</Text>
      <Text style={{fontSize: 17, color: "#808080"}}>
        Foi enviado um código para
        +55 98 9999-9999
      </Text>
      <Body>
      <SafeAreaView style={styles.inputArea}>
        <TextInput
            onChangeText={() => console.log("aaa")}
            style={styles.input}
            placeholder='0'
            keyboardType="numeric"
            maxLength={1}
        />
        <TextInput
            onChangeText={() => console.log("aaa")}
            style={styles.input}
            placeholder='0'
            keyboardType="numeric"
            maxLength={1}
        />
        <TextInput
            onChangeText={() => console.log("aaa")}
            style={styles.input}
            placeholder='0'
            keyboardType="numeric"
            maxLength={1}
        />
        <TextInput
            onChangeText={() => console.log("aaa")}
            style={styles.input}
            placeholder='0'
            keyboardType="numeric"
            maxLength={1}
        />
        <TextInput
            onChangeText={() => console.log("aaa")}
            style={styles.input}
            placeholder='0'
            keyboardType="numeric"
            maxLength={1}
        />
        <TextInput
            onChangeText={() => console.log("aaa")}
            style={styles.input}
            placeholder='0'
            keyboardType="numeric"
            maxLength={1}
        />
        </SafeAreaView>
        <Text style={{fontSize: 12, color: "#60D482", marginTop: 10}}>Enviar código novamente</Text>
      </Body>
      <Body>
        <SimpleButton content="Confirmar"/>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
    input:{
        height: "100%",
        // width: "16%",
        flex: 1,
        // margin: 12,
        // borderWidth: 1,
        padding: 5,
        textAlign: 'center',
        // margin: 'auto',
        marginLeft: 10,
        backgroundColor: "#fff",
        borderRadius: 10,
        fontSize: 36,

    },
    inputArea:{
        display: 'flex',
        flexDirection: 'row',
        width: "100%",
        height: 50,
    }
});