import { Text, StyleSheet, Pressable } from "react-native";



type Props = {
    
    onPress: () => void;
}



export default function Btn({onPress}: Props) {
    return (
        <>
            <Pressable style={styles.button}
                onPress={onPress}
            >
                <Text style={styles.text}>
                    Salvar
                </Text>
            </Pressable>

        </>
    );
}


const styles = StyleSheet.create({
    button: {
        height: 55,
        width: "90%",

        backgroundColor: "#EF4444",

        borderRadius: 16,
        justifyContent: "center",
        alignItems: "center",
    },
    text:{
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "bold",
    }
});