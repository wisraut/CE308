import { View, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';

export default function DetailsScreen() {
  const { id, name, price } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Details</Text>
      <View style={styles.card}>
        <Text style={styles.label}>Product ID: {id}</Text>
        <Text style={styles.label}>Name: {name}</Text>
        <Text style={styles.label}>Price: ฿{price}</Text>
      </View>
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  card: { backgroundColor: '#fff', padding: 20, borderRadius: 10, width: '100%', marginBottom: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  label: { fontSize: 18, marginBottom: 10 },
});