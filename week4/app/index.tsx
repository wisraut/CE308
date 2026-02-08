import React, { useState } from 'react';
import { FlatList, View, Text, ScrollView } from 'react-native';
import { ItemCard } from './components/ItemCard.tsx';
import { CustomInput } from './components/CustomInput.tsx';
import { CustomButton } from './components/CustomButton.tsx';
import "./global.css";

const dataset = [
  { id: "1", productName: "Banana", price: 2000, pcs: 10, btnSize: "sm", btnColor: "primary" },
  { id: "2", productName: "Mango", price: 2000, pcs: 10, btnSize: "md", btnColor: "secondary" },
  { id: "3", productName: "Apple", price: 2000, pcs: 10, btnSize: "lg", btnColor: "danger" },
];

export default function Index() {
  const [name, setName] = useState('');

  return (
    <ScrollView className="flex-1 bg-white p-4 pt-12">
      <Text className="text-2xl font-bold mb-4">Workshop 3.1: รายการสินค้า</Text>
      {dataset.map((item) => (
        <ItemCard 
          key={item.id}
          productName={item.productName}
          price={item.price}
          pcs={item.pcs}
          btnSize={item.btnSize as any}
          btnColor={item.btnColor as any}
        />
      ))}

      <View className="border-t border-gray-300 my-8 pt-8">
        <Text className="text-2xl font-bold mb-4">Workshop 3.2: ฟอร์มสินค้า</Text>
        <CustomInput label="ชื่อสินค้า" value={name} onChangeText={setName} placeholder="กรอกชื่อสินค้า" />
        <CustomButton title="ยืนยัน" variant="primary" size="md" onPress={() => alert('บันทึกสำเร็จ')} />
      </View>
    </ScrollView>
  );
}