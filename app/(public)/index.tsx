import { router } from 'expo-router';
import { Image, Text, View, TouchableOpacity } from 'react-native';

import { Button } from '~/components/button';

const WelcomePage = () => {
  return (
    <View className="h-full justify-center px-6">
      <View className="flex-1 justify-center w-full items-center py-8">
        <Image
          source={require('../../assets/6211884.png')}
          className="h-[250] w-[250] max-w-full"
        />
        <Text className="text-3xl font-bold pt-2 text-center">
          Crie e participe de provas e competições
        </Text>
      </View>
      <View className="gap-3 mb-4">
        <Button
          layout="default"
          title="Logar"
          onPress={() => {
            // Navigate after signing in. You may want to tweak this to ensure sign-in is
            // successful before navigating.
            router.navigate('/login');
          }}
        />
        <Button
          layout="light"
          title="Cadastrar"
          onPress={() => {
            // Navigate after signing in. You may want to tweak this to ensure sign-in is
            // successful before navigating.
            router.replace('/dashboard');
          }}
        />
      </View>
    </View>
  );
};

export default WelcomePage;
