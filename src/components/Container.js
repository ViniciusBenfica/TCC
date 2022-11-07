import { StyleSheet, View } from 'react-native';

export default function Container({ children }) {
    return (
        <View style={styles.container}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#DCDCDC",
    },
});