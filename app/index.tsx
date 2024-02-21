import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

const Page = () => {
  return (
    <View className={styles.container}>
      <Text>Opa</Text>
      <Button
        title="entrar"
        onPress={() => {
          // Navigate after signing in. You may want to tweak this to ensure sign-in is
          // successful before navigating.
          router.replace('/dashboard');
        }}
      />
    </View>
  );
};

export default Page;

const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};
