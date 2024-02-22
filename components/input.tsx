import { FontAwesome6 } from '@expo/vector-icons';
import { useState } from 'react';
import { Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

interface IInputProps extends TextInputProps {
  title: string;
  type?: 'text' | 'password';
  errorMessage?: string;
}

export const Input = ({ title, type = 'text', errorMessage, ...props }: IInputProps) => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  return (
    <View className="w-full">
      <Text className="text-lg font-bold">{title}</Text>
      <View
        className={`flex-row text-xl w-full pt-2 pb-3 border-b border-primary-500 placeholder:text-gray-300 ${errorMessage && 'border-red-600'}`}>
        <TextInput
          secureTextEntry={type === 'password' && !visiblePassword}
          className="flex-1 text-xl"
          {...props}
        />

        {type === 'password' && (
          <TouchableOpacity onPress={() => setVisiblePassword(!visiblePassword)} className="px-3">
            <Text className="text-primary-500">
              {visiblePassword ? (
                <FontAwesome6 name="eye" size={20} />
              ) : (
                <FontAwesome6 name="eye-slash" size={20} />
              )}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {errorMessage && <Text className="text-lg font-bold text-red-600">{errorMessage}</Text>}
    </View>
  );
};
