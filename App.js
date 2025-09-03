import { Button } from "react-native";
import { View, Text, StyleSheet } from "react-native";
 import { SafeAreaView } from 'react-native-safe-area-context'; 
 import { useState } from "react";

export default function App() {
  
  const [contador, setContador] = useState(0);
  
  
  return (
  <SafeAreaView style={estilos.areaSegura}>
    <Button title='Adicionar 1' onPress={() => setContador(contador + 1)} />
    <Button title='Diminuir 1' onPress={() => setContador(contador - 1)} />
    <Button title='Zerar' onPress={() => setContador(0)} />
    <Text style={{fontSize: 40}}>Contador: {contador}</Text>
  </SafeAreaView>
  );
}



const estilos = StyleSheet.create({ 
  areaSegura: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
 