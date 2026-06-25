import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


type Props = {
    value: string;
    setValue: (text: string) => void;
}

export default function InputText({ value, setValue }: Props) {
    const [focused, setFocused] = useState(false);


    return (

        <TextInput
            style={[styles.inputText, focused && styles.focus ]}
            placeholder='Digíte uma descrição...'
            placeholderTextColor="#9CA3AF"
            value={value}
            onChangeText={setValue}

            multiline={true}
            numberOfLines={5}
            textAlignVertical="top"

            onFocus={()=>setFocused(true)}
            onBlur={()=>setFocused(false)}
        />

    )
}

const styles = StyleSheet.create({
    inputText: {
        width: "90%",
        height: 130,

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