import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import Checkbox from "../components/CheckBox";
import GenderSelection from "../components/GenderSelection";
import DatePickerInput from "../components/DatePickerInput";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  address: string;
  gender: string;
  dob: Date | null;
  acceptTerms: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  address?: string;
  gender?: string;
  dob?: string;
  acceptTerms?: string;
}

const GENDER_OPTIONS = [
  { label: "ชาย", value: "male" },
  { label: "หญิง", value: "female" },
  { label: "ไม่ระบุ", value: "other" },
];

export default function Index() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    address: "",
    gender: "",
    dob: null,
    acceptTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateField = (name: string, value: any): string | undefined => {
    switch (name) {
      case "fullName":
        if (typeof value === "string" && !value.trim()) return "กรุณากรอกชื่อ-นามสกุล";
        if (typeof value === "string" && value.trim().length < 3) return "ชื่อ-นามสกุลต้อง อย่างน้อย 3 ตัวอักษร";
        return undefined;

      case "email":
        if (typeof value === "string" && !value.trim()) return "กรุณากรอกอีเมล";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (typeof value === "string" && !emailRegex.test(value)) return "รูปแบบอีเมลไม่ถูกต้อง";
        return undefined;

      case "phone":
        if (typeof value === "string" && !value.trim()) return "กรุณากรอกเบอร์โทรศัพท์";
        const phoneRegex = /^[0-9]{10}$/;
        if (typeof value === "string" && !phoneRegex.test(value)) return "เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก";
        return undefined;

      case "address":
        if (typeof value === "string" && !value.trim()) return "กรุณากรอกที่อยู่";
        if (typeof value === "string" && value.trim().length < 10) return "ที่อยู่ต้องยาวอย่างน้อย 10 ตัวอักษร";
        return undefined;

      case "gender":
        if (!value) return "กรุณาเลือกเพศ";
        return undefined;

      case "dob":
        if (!value) return "กรุณาระบุวันเกิด";
        if (value instanceof Date) {
          const today = new Date();
          let age = today.getFullYear() - value.getFullYear();
          const m = today.getMonth() - value.getMonth();
          if (m < 0 || (m === 0 && today.getDate() < value.getDate())) {
            age--;
          }
          if (age <= 13) return "ต้องอายุมากกว่า 13 ปี";
        }
        return undefined;

      case "password":
        if (!value) return "กรุณากรอกรหัสผ่าน";
        if (typeof value === "string" && value.length < 6) return "รหัสผ่านต้อง อย่างน้อย 6 ตัวอักษร";
        return undefined;

      case "confirmPassword":
        if (!value) return "กรุณายืนยันรหัสผ่าน";
        if (value !== formData.password) return "รหัสผ่านไม่ตรงกัน";
        return undefined;

      case "acceptTerms":
        if (value === false) return "คุณต้องยอมรับข้อกำหนดและเงื่อนไขก่อนลงทะเบียน";
        return undefined;

      default:
        return undefined;
    }
  };

  const handleChange = (name: keyof FormData, value: any) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }));
    }
  };

  const handleBlur = (name: keyof FormData) => {
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, formData[name]);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = (): boolean => {
    let isValid = true;
    const newErrors: FormErrors = {};

    (Object.keys(formData) as Array<keyof FormData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    const allTouched: { [key: string]: boolean } = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    return isValid;
  };

  const handleSubmit = async () => {
    Keyboard.dismiss();

    if (!validateForm()) {
      Alert.alert("ข้อมูลไม่ถูกต้อง", "กรุณาตรวจสอบข้อมูลและลองใหม่อีกครั้ง");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      Alert.alert(
        "สำเร็จ!",
        `ลงทะเบียนสำเร็จ\n\nชื่อ: ${formData.fullName}\nอีเมล: ${formData.email}\nเบอร์: ${formData.phone}\nเพศ: ${formData.gender === 'male' ? 'ชาย' : formData.gender === 'female' ? 'หญิง' : 'ไม่ระบุ'}`,
        [
          { text: "ตรวจสอบ", onPress: () => console.log("Form Data:", formData) },
          { text: "รีเซ็ตฟอร์ม", onPress: handleReset, style: "cancel" },
        ]
      );
    }, 2000);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      address: "",
      gender: "",
      dob: null,
      acceptTerms: false,
    });
    setErrors({});
    setTouched({});
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          className="flex-1 bg-gray-50"
          contentContainerClassName="pb-8"
          keyboardShouldPersistTaps="handled"
        >
          <View className="bg-blue-600 pt-16 pb-8 px-6">
            <Text className="text-white text-3xl font-bold">ลงทะเบียนสมาชิก</Text>
            <Text className="text-blue-100 text-base mt-2">กรุณากรอกข้อมูลให้ครบถ้วน</Text>
          </View>

          <View className="px-6 mt-6">
            <CustomInput
              label="ชื่อ-นามสกุล"
              placeholder="ระบุชื่อและนามสกุล"
              value={formData.fullName}
              onChangeText={(value: string) => handleChange("fullName", value)}
              onBlur={() => handleBlur("fullName")}
              error={errors.fullName}
              touched={touched.fullName}
              autoCapitalize="words"
            />

            <CustomInput
              label="เบอร์โทรศัพท์"
              placeholder="0812345678"
              value={formData.phone}
              onChangeText={(value: string) => handleChange("phone", value)}
              onBlur={() => handleBlur("phone")}
              error={errors.phone}
              touched={touched.phone}
              keyboardType="phone-pad"
              maxLength={10}
            />

            <CustomInput
              label="อีเมล"
              placeholder="example@email.com"
              value={formData.email}
              onChangeText={(value: string) => handleChange("email", value)}
              onBlur={() => handleBlur("email")}
              error={errors.email}
              touched={touched.email}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <GenderSelection
              label="เพศ"
              options={GENDER_OPTIONS}
              selectedValue={formData.gender}
              onSelect={(value) => {
                handleChange("gender", value);
                setTouched((prev) => ({ ...prev, gender: true }));
              }}
              error={errors.gender}
              touched={touched.gender}
            />

            <DatePickerInput
              label="วัน/เดือน/ปีเกิด (ต้องอายุมากกว่า 13 ปี)"
              value={formData.dob}
              onChange={(date) => {
                handleChange("dob", date);
                setTouched((prev) => ({ ...prev, dob: true }));
              }}
              error={errors.dob}
              touched={touched.dob}
            />

            <CustomInput
              label="ที่อยู่"
              placeholder="ระบุที่อยู่ของคุณอย่างละเอียด"
              value={formData.address}
              onChangeText={(value: string) => handleChange("address", value)}
              onBlur={() => handleBlur("address")}
              error={errors.address}
              touched={touched.address}
              multiline={true}
              maxLength={200}
              showCharCount={true}
            />

            <CustomInput
              label="รหัสผ่าน"
              placeholder="อย่างน้อย 6 ตัวอักษร"
              value={formData.password}
              onChangeText={(value: string) => handleChange("password", value)}
              onBlur={() => handleBlur("password")}
              error={errors.password}
              touched={touched.password}
              secureTextEntry
              autoCapitalize="none"
            />

            <CustomInput
              label="ยืนยันรหัสผ่าน"
              placeholder="ระบุรหัสผ่านอีกครั้ง"
              value={formData.confirmPassword}
              onChangeText={(value: string) => handleChange("confirmPassword", value)}
              onBlur={() => handleBlur("confirmPassword")}
              error={errors.confirmPassword}
              touched={touched.confirmPassword}
              secureTextEntry
              autoCapitalize="none"
            />

            <Checkbox
              label="ฉันยอมรับข้อกำหนดและเงื่อนไข"
              checked={formData.acceptTerms}
              onPress={() => {
                const newValue = !formData.acceptTerms;
                handleChange("acceptTerms", newValue);
                setTouched((prev) => ({ ...prev, acceptTerms: true }));
              }}
              error={errors.acceptTerms}
              touched={touched.acceptTerms}
            />

            <View className="mt-4 space-y-3">
              <CustomButton
                title="ลงทะเบียน"
                onPress={handleSubmit}
                variant="primary"
                loading={isLoading}
              />
              <CustomButton
                title="รีเซ็ตฟอร์ม"
                onPress={handleReset}
                variant="secondary"
                disabled={isLoading}
              />
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}