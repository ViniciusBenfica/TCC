import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function ButtonSubtitle({ content, subtitle, todo }) {
    return (
        <TouchableOpacity onPress={todo} style={[styles.button]}>
            <Text style={{ fontSize: 45, color: "#fff" }}>{content}</Text>
            <Text style={{ fontSize: 16, color: "#fff" }}>{subtitle}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        padding: 10,
        width: "100%",
        marginTop: 10,
        borderRadius: 15,
        backgroundColor: "#5FD189",
    },
});