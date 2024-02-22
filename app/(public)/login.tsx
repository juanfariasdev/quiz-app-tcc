import { Text, View } from 'react-native';

import { Button } from '~/components/button';
import { Input } from '~/components/input';

const LoginPage = () => {
  return (
    <View className="h-full px-6 py-3">
      <View className="flex-1  w-full py-8">
        <Text className="text-3xl font-bold pt-2">Bem-vindo novamente 👋</Text>

        <View className="w-full gap-8 pt-10">
          <Input title="Email" placeholder="exemplo@email.com" />

          <Input title="Senha" placeholder="********" type="password" />
        </View>
      </View>
      <Button title="Logar" layout="default" />
    </View>
  );
};

export default LoginPage;
