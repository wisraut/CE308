import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Option {
  label: string;
  value: string;
}

interface GenderSelectionProps {
  label: string;
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
  error?: string;
  touched?: boolean;
}

export default function GenderSelection({
  label,
  options,
  selectedValue,
  onSelect,
  error,
  touched,
}: GenderSelectionProps) {
  const hasError = touched && error;

  return (
    <View className="w-full mb-4">
      <Text className="text-gray-700 font-semibold mb-2 text-base">{label}</Text>
      <View className="flex-row">
        {options.map((option) => (
          <TouchableOpacity
            key={option.value}
            className="flex-row items-center mr-6"
            onPress={() => onSelect(option.value)}
            activeOpacity={0.8}
          >
            <View
              className={`w-5 h-5 rounded-full border-2 mr-2 items-center justify-center ${
                hasError ? "border-red-500" : "border-gray-400"
              }`}
            >
              {selectedValue === option.value && (
                <View className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              )}
            </View>
            <Text className="text-gray-700 text-base">{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {hasError && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
}