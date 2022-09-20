import { StyleSheet, View } from 'react-native';

export default function Body({ children }) {
    return (
        <View style={styles.body}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        width: "80%",
        alignItems: "center"
    },
});