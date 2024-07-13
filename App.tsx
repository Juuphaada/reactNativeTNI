import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';

export default function App(): React.JSX.Element{
  const onClickMe = () => {
    Alert.alert('Hey','hello React.js');
  };

  const users =[
    {id:1001,name:'John'},
    {id:1001,name:'Mary'}
  ];

  return (
    <View style={styles.container}>
      <AppHeader title="This is header" year={2002}/>
      <AppHeader title="This is header2"/> {/*ใช่ซ้ำได้ */}

      <Text>Hello React Native!</Text>
      {
        users.map((data,index)=>{
        return <Text key={data.id}> No. {index} id: {data.id} name: {data.name}</Text>
      })
      }

      <Button title="Click Me" onPress={()=>{
        Alert.alert("Hi","React Native is Fun!!")}} color="blue"/>
      <AppFooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
