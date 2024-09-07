import { StyleSheet, Text, View, Alert, Modal, Pressable } from "react-native";
import React, { useState } from "react";
import WeatherLondon from "./WeatherLondon";
import WeatherBangkok from "./WeatherBangkok";
 
const ModelPractice = (): React.JSX.Element => {
 
    const [LondonWeatherVisible,setLondonWeatherVisible] = useState(false);
    const [BangkokWeatherVisible,setBangkokWeatherVisible] = useState(false);

    return (
      <View style={styles.centeredView}>
      <Text style={styles.HeaderText} >Weather App</Text> 
          <Pressable
          style={[styles.button,styles.buttonOpen]}
          onPress={()=> setLondonWeatherVisible(true)}
          >
            <Text style={styles.textStyle}>London</Text> 
          </Pressable>

        <Pressable
        style={[styles.button,styles.buttonOpen]}
        onPress={()=> setBangkokWeatherVisible(true)}
        >
          <Text style={styles.textStyle}>Bangkok</Text> 
        </Pressable>

        <Modal animationType="slide" transparent={true} visible={LondonWeatherVisible} onRequestClose={() => setLondonWeatherVisible(!LondonWeatherVisible)}>
          <View style={styles.modalView}>   
            <WeatherLondon/>
            <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={()=>setLondonWeatherVisible(!LondonWeatherVisible)} 
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </Modal>

        <Modal animationType="slide" transparent={true} visible={BangkokWeatherVisible} onRequestClose={() => setBangkokWeatherVisible(!BangkokWeatherVisible)}>
          <View style={styles.modalView}>
            <WeatherBangkok/>
            <Pressable
                    style={[styles.button, styles.buttonClose]}
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
    margin: 30,
    backgroundColor: "white",
 
    borderRadius: 10,
 
    padding: 10,
    paddingBottom: 100,
 
    alignItems: "center",
    shadowColor: "#000",
 
    shadowOffset: {
      width: 0,
 
      height: 2,
    },
 
    shadowOpacity: 0.25,
 
    shadowRadius: 4,
 
    elevation: 50, // เมื่อป้ายmodelโผล่มา ข้างหลังจะเป็นเงายิ่งค่ามากยิ่งมืด
  },
  button: {
    borderRadius: 20,
 
    padding: 10,
 
    elevation: 5,

    margin: 10,
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

  HeaderText:{
    fontWeight: "bold",
    textAlign: "center",
  },
});