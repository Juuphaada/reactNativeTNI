import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import UseEffectExample from './components/UseEffectExample';
import FlatListCallBackend from './components/FlastListcallBackend'; 

const App = ():React.JSX.Element => {
  return (
    <View>
      {/*<ProfileScreen/>*/}
      <FlatListCallBackend/>
    </View>
  )
};

export default App;