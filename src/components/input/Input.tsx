import { StyleSheet, Text, TextInput, View } from 'react-native';


type Props = {
    value: string;
    setValue: (text: string) => void;
}

export default function Input({value, setValue}: Props){
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.inputTitulo}
                placeholder='Título...'
                value={value}
                onChangeText={setValue}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputTitulo:{

  }
});