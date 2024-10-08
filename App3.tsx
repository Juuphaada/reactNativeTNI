import { StatusBar } from "expo-status-bar";
import React,{useState,useEffect} from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput } from "react-native";
import AppFooter from './components/AppFooter';
import AppHeader from "./components/AppHeader";
import {stylesPractice } from "./styles/AppStyles";
import Content from "./components/Content";


export default function App():React.JSX.Element {

  const [fullname, setFullname] = useState('');
  const [message, setMessage] = useState('Message from App.tsx');
  const [footerMessage, setFooterMessage] = useState('Thai-Nichi Institute of technology');

  useEffect(()=>{
    console.log("Component has mounted");
  },[]);

  useEffect(()=>{
    console.log(`fullname has changed to: ${fullname}`);
  },[fullname]);

  const handleButtonClick= () => {
    Alert.alert("Hello",`Input your fullname : ${fullname}`);
  };

  return (
    <View style={styles.container}>
      <AppHeader fullname={fullname} message={message} />
      {/* <Content message={message} fullname={fullname} /> */}
      <Content message={message} onButtonClick={handleButtonClick} fullname={fullname}/>
      <AppFooter footerMessage={footerMessage} />
      <TextInput
        style={stylesPractice.input}
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});