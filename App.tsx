import { View, Text, FlatList } from 'react-native'
import React from 'react'
import ProfileScreen from './components/ProfileScreen'
import UseEffectExample from './components/UseEffectExample';
import FlatListCallBackend from './components/FlastListcallBackend';
import AxiosPostData from './components/AxiosPostData';
import AxiosgetData from './components/AxiosgetData';
import WeatherLondon from './components/WeatherLondon';
import WeatherBangkok from './components/WeatherBangkok';
import ModelExample from './components/ModelExample';
import ModelPractice from './components/ModelPractice';


const App = ():React.JSX.Element => {
  return (
    <View>
      <ModelPractice/>
      {/**<WeatherBangkok/>**/}
      {/**/}
      {/*<AxiosPostData/>
      <AxiosgetData/>*/}
      {/*<ProfileScreen/>*/}
      {/*<FlatListCallBackend/>*/}
    </View>
  )
};

export default App;