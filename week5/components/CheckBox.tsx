import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

interface CheckboxProps {
  label: string;
  checked: boolean;
  onPress: () => void;
  error?: string;
  touched?: boolean;
}

export default function Checkbox({
  label,
  checked,
  onPress,
  error,
  touched,
}: CheckboxProps) {
  const hasError = touched && error;

  return (
    <View className="w-full mb-4">
      <TouchableOpacity
        className="flex-row items-center"
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View
          className={`w-6 h-6 border-2 rounded mr-3 items-center justify-center ${
            hasError ? "border-red-500" : "border-gray-400"
          } ${checked ? "bg-blue-600 border-blue-600" : "bg-white"}`}
        >
          {checked && <Text className="text-white font-bold text-sm">✓</Text>}
        </View>
        
        <Text className="text-gray-700 text-base flex-1">{label}</Text>
      </TouchableOpacity>

      {hasError && (
        <Text className="text-red-500 text-sm mt-1">{error}</Text>
      )}
    </View>
  );
}