import { TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  title: string;
  variant?: 'primary' | 'danger';
}

const CustomButton = ({ title, variant = 'primary' }: ButtonProps) => {
  const bgClass = variant === 'danger' ? 'bg-red-500' : 'bg-blue-500';
  
  return (
    <TouchableOpacity className={`${bgClass} p-3 rounded-lg items-center`}>
      <Text className="text-white font-bold">{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;