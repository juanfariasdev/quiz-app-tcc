import { router } from 'expo-router';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

import { Button } from '~/components/button';
import { Input } from '~/components/input';

const LoginPage = () => {
  return (
    <View className="h-full justify-center px-3 py-3">
      <View className="flex-1 justify-center w-full items-center py-8">
        <Text className="text-3xl font-bold pt-2 text-center">Bem-vindo novamente 👋</Text>

        <View className="w-full gap-8 pt-10">
          <Input title="Email" placeholder="Digite seu email!" />

          <Input title="Senha" placeholder="Digite sua senha!" type="password" />
        </View>
      </View>
      <Button title="Logar" layout="default" />
    </View>
  );
};

export default LoginPage;
