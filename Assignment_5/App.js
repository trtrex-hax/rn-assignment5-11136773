import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SettingsScreen from './Screens/SettingsScreen';
import HomeScreen from './Screens/HomeScreen';
import { ThemeProvider, ThemeContext } from './ThemeContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
  </Stack.Navigator>
);

const SettingsStack = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Settings" component={SettingsScreen} />
  </Stack.Navigator>
);

const App = () => {
  
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline';
              } else if (route.name === 'Cards') {
                iconName = focused ? 'card' : 'card-outline';
              } else if (route.name === 'Statistics') {
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              } else if (route.name === 'Settings') {
                iconName = focused ? 'settings' : 'settings-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'blue',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: { height: 70 },
            tabBarLabelStyle: { paddingBottom: 10, fontSize: 14 }
          })}
        >
          <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }}/>
          <Tab.Screen name="Cards" component={DummyScreen} />
          <Tab.Screen name="Statistics" component={DummyScreen} />
          <Tab.Screen name="Settings" component={SettingsStack} options={{ headerShown: false }}/>
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

const DummyScreen = () => (
  <View style={styles.container}>
    <Text>This is a dummy screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;