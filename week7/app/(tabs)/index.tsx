import { Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { router } from 'expo-router';

const products = [
  { id: '1', name: 'Premium Coffee Bean', price: '450' },
  { id: '2', name: 'Green Tea Powder', price: '290' },
  { id: '3', name: 'Oat Milk 1L', price: '115' },
];

export default function MarketScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      {products.map((item) => (
        <Pressable
          key={item.id}
          style={styles.productCard}
          onPress={() => {
            router.push({
              pathname: '/details',
              params: { id: item.id, name: item.name, price: item.price }
            });
          }}
        >
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.price}>฿{item.price}</Text>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: { padding: 20, gap: 15 },
  productCard: { padding: 15, backgroundColor: '#f0f0f0', borderRadius: 8, width: '100%' },
  title: { fontSize: 18, fontWeight: 'bold' },
  price: { color: '#666', marginTop: 5 },
});