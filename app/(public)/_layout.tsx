import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(drawer)',
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#fff' }}>
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: '#fff' },
          headerShadowVisible: false,
        }}>
        <Stack.Screen name="login" options={{ title: '', presentation: 'modal' }} />
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: 'Bem-vindo', presentation: 'modal' }}
        />
      </Stack>
    </GestureHandlerRootView>
  );
}
