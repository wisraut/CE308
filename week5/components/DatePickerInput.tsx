import React, { useState } from "react";
import { View, Text, TouchableOpacity, Platform } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface DatePickerInputProps {
  label: string;
  value: Date | null;
  onChange: (date: Date) => void;
  error?: string;
  touched?: boolean;
}

export default function DatePickerInput({
  label,
  value,
  onChange,
  error,
  touched,
}: DatePickerInputProps) {
  const [show, setShow] = useState(false);
  const hasError = touched && error;

  const formatDate = (date: Date) => {
    const d = date.getDate().toString().padStart(2, "0");
    const m = (date.getMonth() + 1).toString().padStart(2, "0");
    const y = date.getFullYear();
    return `${d}/${m}/${y}`;
  };

  return (
    <View className="w-full mb-4">
      <Text className="text-gray-700 font-semibold mb-2 text-base">{label}</Text>
      <TouchableOpacity
        className={`w-full px-4 py-3 rounded-lg border-2 ${
          hasError ? "border-red-500" : "border-gray-300"
        } bg-white`}
        onPress={() => setShow(true)}
        activeOpacity={0.8}
      >
        <Text className={`text-base ${value ? "text-gray-800" : "text-gray-400"}`}>
          {value ? formatDate(value) : "DD/MM/YYYY"}
        </Text>
      </TouchableOpacity>

      {show && (
        <DateTimePicker
          value={value || new Date()}
          mode="date"
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={(event, selectedDate) => {
            setShow(Platform.OS === "ios");
            if (selectedDate) {
              onChange(selectedDate);
            }
          }}
        />
      )}

      {hasError && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
}