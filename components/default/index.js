import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import Button from '../button';

function Mainler() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState(null);

 const handlePress = () => {
    const valorAlcool = parseFloat(num1);
    const valorGasolina = parseFloat(num2);

    if (!isNaN(valorAlcool) && !isNaN(valorGasolina) && valorGasolina !== 0) {
      const relacao = valorAlcool / valorGasolina;
      setResultado(relacao <= 0.7 ? 'O Álcool vale mais a pena' : 'A Gasolina vale mais a pena');
    } else {
      setResultado('Valores inválidos');
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>
        {resultado !== null ? resultado : 'Qual vale mais a pena?'}
      </Text>

      <TextInput 
        style={styles.input}
        onChangeText={setNum1}
        value={num1}
        keyboardType="numeric"
        placeholder="Digite o valor do Acool"
      />
    
      <TextInput 
        style={styles.input}
        onChangeText={setNum2}
        value={num2}
        keyboardType="numeric"
        placeholder="Digite o valor da gasolina"
      />

      
      <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 30 }}>
        <Button onPress={handlePress} />
      </View>
    </View>
  );
}

export default Mainler;

const styles = StyleSheet.create({
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});