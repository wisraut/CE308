import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../redux/store';
import { addItem, removeItem, clearCart, CartItem } from '../redux/cartSlice';

const CartScreen = () => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const dispatch = useDispatch<AppDispatch>();

  const handleAddItem = () => {
    if (!name || !quantity || !price) return;
    const newItem: CartItem = {
      id: Date.now().toString(),
      name,
      quantity: parseInt(quantity),
      price: parseFloat(price),
    };
    dispatch(addItem(newItem));
    setName('');
    setQuantity('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>ระบบตะกร้าสินค้า</Text>
      <TextInput style={styles.input} placeholder="ชื่อสินค้า" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="จำนวน" value={quantity} onChangeText={setQuantity} keyboardType="numeric" />
      <TextInput style={styles.input} placeholder="ราคา" value={price} onChangeText={setPrice} keyboardType="numeric" />
      
      <Button title="เพิ่มลงตะกร้า" onPress={handleAddItem} />

      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemRow}>
            <Text>{item.name} x{item.quantity} - {item.price * item.quantity} บาท</Text>
            <Button title="ลบ" color="red" onPress={() => dispatch(removeItem(item.id))} />
          </View>
        )}
      />
      
      <Text style={styles.totalText}>รวม {totalAmount} บาท</Text>
      <Button title="ล้างตะกร้า" color="gray" onPress={() => dispatch(clearCart())} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
  itemRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderColor: '#eee' },
  totalText: { fontSize: 18, fontWeight: 'bold', marginVertical: 15, color: 'blue' },
});

export default CartScreen;