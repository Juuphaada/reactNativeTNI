import {StyleSheet, Text, View, Button,TouchableOpacity} from 'react-native'
import React,{ useState } from 'react'
import { CameraView, CameraType, useCameraPermissions } from "expo-camera";
import { current } from '@reduxjs/toolkit';

const CameraScreen = () => {
    const [facing,setFacing]= useState<CameraType>('back');
    const [permission,requestPemission] = useCameraPermissions();

if(!permission){
    return <View/>
}
if(!permission.granted){
    return(
        <View style={styles.container}>
            <Text style={styles.message}>We need your permission to show the camera</Text>
            <Button onPress={requestPemission} title="grant permission"/>
        </View>
    )
}

function toggleCameraFacing(){
  setFacing((current) => (current === "back" ? "front" : "back"));
}

  return (
    <View>
      <CameraView style={styles.camera} facing={facing}></CameraView>
      <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
        <Text style={styles.text}>Flip Camera</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});