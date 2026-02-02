import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import "../global.css"; // อย่าลืม import ไฟล์ css หลัก

import CenteredView from './components/CenteredView';
import ItemList from './components/ItemList';
import CustomButton from './components/CustomButton';

const Home = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="h-40">
        <CenteredView title="NativeWind Demo" />
      </View>

      <View className="p-4">
        <Text className="text-xl font-bold mb-4">ตัวอย่าง Components ตามสไลด์</Text>

        <View className="mb-6">
          <Text className="text-gray-400 mb-2"># ItemList Component</Text>
          <ItemList name="iPhone 15 Pro" price={45000} />
          <ItemList name="MacBook Air M3" price={39900} />
        </View>

        <View className="mb-6">
          <Text className="text-gray-400 mb-2"># CustomButton Variants</Text>
          <View className="gap-y-3">
            <CustomButton title="Primary Button" variant="primary" />
            <CustomButton title="Danger Button" variant="danger" />
          </View>
        </View>

        <View className="mb-6">
          <Text className="text-gray-400 mb-2"># Custom Tailwind Config</Text>
          <Text className="text-10xl text-center">Hello</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;