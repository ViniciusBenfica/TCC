import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function SimpleButton({content, backgroundColor, colorText}) {
  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: backgroundColor || "#5FD189"}]}>
        <Text style={{color: colorText || "#fff"}}>{content}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    padding: 15,
    width: "100%",
    marginTop: 10,
    borderRadius: 15,
  },
});