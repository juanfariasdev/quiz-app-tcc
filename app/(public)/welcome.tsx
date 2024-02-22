import { router } from 'expo-router';
import { Image, Text, View, TouchableOpacity } from 'react-native';

const WelcomePage = () => {
  return (
    <View className="h-full justify-center px-3">
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
        <TouchableOpacity
          className="bg-primary-500 px-4 py-4 items-center rounded-full border-2 border-t-0 border-primary-700"
          onPress={() => {
            // Navigate after signing in. You may want to tweak this to ensure sign-in is
            // successful before navigating.
            router.replace('/login');
          }}>
          <Text className="text-white text-xl uppercase">Logar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-primary-100 px-4 py-4 items-center rounded-full border-2 border-t-0 border-primary-300"
          onPress={() => {
            // Navigate after signing in. You may want to tweak this to ensure sign-in is
            // successful before navigating.
            // router.replace('/dashboard');
          }}>
          <Text className="text-primary-500 text-xl uppercase">Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePage;
