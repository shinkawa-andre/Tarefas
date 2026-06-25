import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


type Props = {
    value: string;
    setValue: (text: string) => void;
}

export default function InputTitle({ value, setValue }: Props) {
    const [focused, setFocused] = useState(false);


    return (

        <TextInput
            style={[styles.inputTitulo, focused && styles.focus ]}
            placeholder='Título...'
            placeholderTextColor="#9CA3AF"
            value={value}
            onChangeText={setValue}

            onFocus={()=>setFocused(true)}
            onBlur={()=>setFocused(false)}
        />

    )
}

const styles = StyleSheet.create({
    inputTitulo: {
        width: "90%",
        height: 56,

        backgroundColor: "#FFFFFF",

        borderRadius: 16,
        borderWidth: 1,
        borderColor: "#E5E7EB",

        paddingHorizontal: 18,

        fontSize: 20,
        color: "#111827",

        // sombra Android
        elevation: 3,
    },
    focus:{
        borderColor: "#EF4444",
    }
});