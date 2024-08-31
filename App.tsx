import { View, Text, FlatList } from 'react-native'
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = ():React.JSX.Element => {
  const HomeStack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName='Home'
      screenOptions= {{
          title: 'เกี่ยวกับเรา',
          headerStyle:{backgroundColor:'#20b2aa'},
          headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign:'center'
      }}>
        
        <HomeStack.Screen name='Home' component={HomeScreen}/>
        <HomeStack.Screen name='About' component={AboutScreen} 
        /*
        options={{
          title: 'เกี่ยวกับเรา',
          headerStyle:{backgroundColor:'#20b2aa'},
          headerTitleStyle:{fontWeight:'bold'},
          headerTitleAlign:'center'
        }}
        */
        />

      </HomeStack.Navigator>
    </NavigationContainer>
  )
};

export default App;