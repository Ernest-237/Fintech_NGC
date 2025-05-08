import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen 
          name="profil" 
          options={{ 
            title: 'Mon Profil',
            headerStyle: {
              backgroundColor: '#6200ee',
            },
            headerTintColor: '#fff',
          }} 
        />
        <Stack.Screen 
          name="parametres" 
          options={{ 
            title: 'Paramètres',
            headerStyle: {
              backgroundColor: '#6200ee',
            },
            headerTintColor: '#fff',
          }} 
        />
        <Stack.Screen name="tabs" options={{ headerShown: false }} />
      </Stack>
    </View>
  );
}