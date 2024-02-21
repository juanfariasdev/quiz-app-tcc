import { Octicons, FontAwesome } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { cssInterop } from 'nativewind';
import { ReactElement, cloneElement } from 'react';
import { Platform, Text, View } from 'react-native';

cssInterop(Octicons, {
  className: {
    target: 'style',
  },
});

function TabBarIcon<T extends React.ComponentType<any>>(Icon: T & { focused?: boolean }) {
  return function (props: React.ComponentProps<T> & { focused: boolean }) {
    const newProps = { ...props } as React.ComponentProps<T>;
    const className = `mb-[-5]  ${props.className} ${props.focused && 'text-primary-500 fill-primary-500'}`;
    const NewIcon = cloneElement(<Icon {...newProps} />, { size: 24, className });
    return NewIcon;
  };
}

const TabBarIconAwesome = TabBarIcon(FontAwesome);
const TabBarIconOcticons = TabBarIcon(Octicons);

const MenuItem = ({
  focused,
  title,
  children,
}: {
  focused: boolean;
  title: string;
  children: ReactElement;
}) => {
  return (
    <View
      className={`items-center justify-center h-full border-t-2 pt-[16] ${focused ? 'border-primary-500' : 'border-white'}`}>
      {children}

      <Text className="mt-1 text-sm">{title}</Text>
    </View>
  );
};

export default function DashboardLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarStyle: {
          position: 'absolute',
          display: 'flex',
          padding: 0,
          margin: 0,
          bottom: 0,
          right: 0,
          left: 0,
          height: 50,
          elevation: 0,
          backgroundColor: 'white',
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <MenuItem focused={focused} title="Inicio">
              <TabBarIconOcticons name="home" focused={focused} />
            </MenuItem>
          ),
        }}
      />
      <Tabs.Screen
        name="classes"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <MenuItem focused={focused} title="Aulas">
              <TabBarIconOcticons name="book" focused={focused} />
            </MenuItem>
          ),
        }}
      />
      <Tabs.Screen
        name="join"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <View
              className={`items-center justify-center ${Platform.OS === 'ios' ? 'top-[-10]' : 'top-[-10]'}`}>
              <View
                className={`items-center justify-center border ${focused ? 'bg-white border-primary-500' : 'bg-primary-500'} ${Platform.OS === 'ios' ? 'w-[40] h-[40] rounded-[25]' : 'w-[50] h-[50] rounded-[30]'}`}>
                <TabBarIconAwesome
                  name="edit"
                  color={focused ? 'black' : 'white'}
                  focused={focused}
                />
              </View>
              <Text className="mt-1 text-sm">Jogar</Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="create"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <MenuItem focused={focused} title="Criar">
              <TabBarIconAwesome name="plus-square-o" focused={focused} />
            </MenuItem>
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <MenuItem focused={focused} title="Perfil">
              <TabBarIconOcticons name="person" focused={focused} />
            </MenuItem>
          ),
        }}
      />
    </Tabs>
  );
}
