import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Input({ title, placeholder, setData, name, type }) {

    return (
        <View style={styles.body}>
          <Text style={{fontSize: 14, color: "#808080"}}>{title}</Text>
          <SafeAreaView style={styles.inputArea}>
            <TextInput
              style={styles.input}
              onChangeText={newText => setData((prev) => ({...prev, [name]: newText}))}
              placeholder={placeholder}
              keyboardType={type}
            />
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
        // margin: 12,
        // borderWidth: 1,
        padding: 5,
    },
    inputArea:{
      backgroundColor: "red",
      width: "80%",
      borderRadius: 20,
      backgroundColor: "#fff",
      height: 33,
      // overflow: "hidden",
    }
});