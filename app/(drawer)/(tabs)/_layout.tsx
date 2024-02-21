import { Ionicons, Octicons } from '@expo/vector-icons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import { Platform, StyleSheet, View } from 'react-native';

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={24} style={styles.tabBarIcon} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => (
            <Octicons name="home" size={size} style={styles.tabBarIcon} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: 'Aulas',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
      <Tabs.Screen
        name="join"
        options={{
          title: 'Jogar',
          tabBarIcon: ({ focused }) => (
            <View
              className={`items-center justify-center bg-purple-900 ${Platform.OS === 'ios' ? 'w-[40] h-[40] top-[-10] rounded-[25]' : 'w-[50] h-[50] top-[-10] rounded-[30]'}`}>
              <FontAwesome name="edit" style={styles.tabBarIcon} size={24} color="white" />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: 'Criar',
          tabBarIcon: ({ color }) => <TabBarIcon name="plus-square-o" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={size} style={styles.tabBarIcon} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const size = 24;

const styles = StyleSheet.create({
  tabBarIcon: {
    marginBottom: -5,
  },
});
