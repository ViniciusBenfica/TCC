import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'

export default function Input({ title, placeholder, setData, name, type, secureTextEntry }) {

  const [error, setError] = useState(false)

  const validateEmail = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    reg.test(text) ? setError(false) : setError(true)
    return text
  }

  const validateCpf = (text) => {
    let reg = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;
    reg.test(text) ? setError(false) : setError(true)
    return text
  }

  function maskCPF(name){
    if(name === 'cpf'){
      return (
      <TextInputMask
        type={'cpf'}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        onChangeText={newText => setData((prev) => ({...prev, [name]: validateCpf(newText)}))}
        placeholder={placeholder}
        keyboardType={type}
      />
      )
    }else if(name === 'email'){
      return (
        <TextInput
          secureTextEntry={secureTextEntry}
          style={styles.input}
          onChangeText={newText => setData((prev) => ({...prev, [name]: validateEmail(newText)}))}
          placeholder={placeholder}
          keyboardType={type}
        />
      )
    }else{
      return (
        <TextInput
          secureTextEntry={secureTextEntry}
          style={styles.input}
          onChangeText={newText => setData((prev) => ({...prev, [name]: newText}))}
          placeholder={placeholder}
          keyboardType={type}
        />
      )
    }
  }

    return (
        <View style={styles.body}>
          <Text style={{fontSize: 14, color: "#808080"}}>{title}</Text>
          <SafeAreaView style={[styles.inputArea, error ? styles.error : null]}>
          {maskCPF(name)}
          </SafeAreaView>
        </View>
    );
}

const styles = StyleSheet.create({
    body:{
        width: "100%",
        alignItems: "center",
        marginTop: 10,
        marginBottom: 10,
    },
    input: {
        height: "100%",
        width: "100%",
        padding: 5,
    },
    error:{
      borderColor: 'red',
      borderWidth: 1,
    },
    inputArea:{
      backgroundColor: "red",
      width: "80%",
      borderRadius: 20,
      backgroundColor: "#fff",
      height: 33,
    }
});