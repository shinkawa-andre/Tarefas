import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import InputTitle from './components/input/InputTitle';
import { useState } from 'react';
import InputText from './components/input/InputText';
import Btn from './components/button/Btn';

export default function App() {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [save, setSave] = useState();





  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tarefas</Text>
      <View style={styles.inputs}>
        <InputTitle
          value={title}
          setValue={setTitle}
        />
        <InputText
          value={desc}
          setValue={setDesc}
        />
        <Btn
          onPress={() => { console.log("salvou") }}
        />
      </View>
      <View style={styles.divider} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: "#9CA3AF",
    alignItems: 'center',
    paddingTop: 50,
    gap: 15

  },
  inputs: {
    width: '100%',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: "#EF4444",
  },
  divider: {
    width: "90%",
    height: 2,
    backgroundColor: "#EF4444",
    marginVertical: 16,
  }
});
