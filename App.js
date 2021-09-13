import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { generateSeed, deriveSecretKey, derivePublicKey, deriveAddress } from 'nanocurrency'

export default function App() {
  const [seed, setSeed] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [publicKey, setPublicKey] = useState('');
  const [address, setAddress] = useState('');
  
  const Generate = async () => {
    const seed = await generateSeed();
    const secretKey = deriveSecretKey(seed, 0);
    const publicKey = derivePublicKey(secretKey);
    const address = deriveAddress(publicKey);
    setSeed(seed);
    setSecretKey(secretKey);
    setPublicKey(publicKey);
    setAddress(address);
  }

  return (
    <View style={styles.container}>
      <Text>Seed: {seed}</Text>
      <Text>SecretKey: {secretKey}</Text>
      <Text>PublicKey: {publicKey}</Text>
      <Text>Address: {address}</Text>
      <Button 
        title="Start" 
        onPress={Generate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
