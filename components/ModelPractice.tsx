import { StyleSheet, Text, View, Alert, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import WeatherLondon from "./WeatherLondon";
import WeatherBangkok from "./WeatherBangkok";
 
const ModelPractice = (): React.JSX.Element => {
 
    const [LondonWeatherVisible,setLondonWeatherVisible] = useState(false);
    const [BangkokWeatherVisible,setBangkokWeatherVisible] = useState(false);

    return (
      <View style={styles.centeredView}>
            <Pressable
              style={[styles.button,styles.buttonOpen]}
              onPress={()=> setLondonWeatherVisible(true)}
            ></Pressable>
            <Pressable
              style={[styles.button,styles.buttonOpen]}
              onPress={()=> setBangkokWeatherVisible(true)}
            ></Pressable>
     
            
    
            <Modal
                animationType="slide" transparent={true} visible={LondonWeatherVisible} onRequestClose={() => setLondonWeatherVisible(!LondonWeatherVisible)}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello React Native</Text>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={()=>setLondonWeatherVisible(!LondonWeatherVisible)} 
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </Modal>

            <Modal
                animationType="slide" transparent={true} visible={BangkokWeatherVisible} onRequestClose={() => setLondonWeatherVisible(!BangkokWeatherVisible)}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello React Native</Text>
                    <Pressable
                        style={[styles.button, styles.buttonOpen]}
                        onPress={()=>setBangkokWeatherVisible(!BangkokWeatherVisible)} 
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </Modal>
      </View>
      );
}
 
export default ModelPractice;
 
const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
 
    alignItems: "center",
 
    marginTop: 100,
  },
 
  modalView: {
    margin: 50,
 
    backgroundColor: "white",
 
    borderRadius: 20,
 
    padding: 35,
 
    alignItems: "center",
    shadowColor: "#000",
 
    shadowOffset: {
      width: 0,
 
      height: 2,
    },
 
    shadowOpacity: 0.25,
 
    shadowRadius: 4,
 
    elevation: 5,
  },
  button: {
    borderRadius: 20,
 
    padding: 10,
 
    elevation: 2,
  },
 
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
 
  buttonClose: {
    backgroundColor: "#2196F3",
  },
 
  textStyle: {
    color: "white",
 
    fontWeight: "bold",
 
    textAlign: "center",
  },
 
  modalText: {
    marginBottom: 15,
 
    textAlign: "center",
  },
});