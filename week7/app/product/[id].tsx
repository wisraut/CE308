import { Text, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ProductDetail() {
  const { id, name, price } = useLocalSearchParams();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Product Detail</Text>
      <Text>ID: {id}</Text>
      <Text>Name: {name}</Text>
      <Text>Price: {price} บาท</Text>
    </View>
  );
}
