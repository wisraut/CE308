import React from "react";
import { TextInput, View, Text, TextInputProps } from "react-native";

interface CustomInputProps extends TextInputProps {
    label: string;
    error?: string;
    touched?: boolean;
}

export default function CustomInput({
    label,
    error,
    touched,
    ...props
}: CustomInputProps) {
    const hasError = !!error && touched;

    return (
        <View className="w-full mb-4">
            <Text className="text-gray-700 mb-2">{label}</Text>
            <TextInput
                {...props}
                className={`border px-3 py-2 rounded ${hasError ? "border-red-500" : "border-gray-300"}`}
            />
            {hasError && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
        </View>
    );
}