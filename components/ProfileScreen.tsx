import { View, Text , StyleSheet,Image, Button} from 'react-native'
import React from 'react'
import styles from '../styles/ProfileStyles';
import { useState } from 'react';

const ProfileScreen = ():React.JSX.Element => {
    const profileImage = require("../assets/ไฟล์ 1 นิ้ว.jpg");
    const profileImage2 = require("../assets/Screenshot 2023_09_11 095811.png");

    const [name,setName] = useState("Suphada Jaruprateepkul");
    const handleChangeName = ()=>{
        setName(name == "Suphada Jaruprateepkul" ? "New Name":"Suphada Jaruprateepkul")
    }
    const [image,setImage] = useState(require("../assets/ไฟล์ 1 นิ้ว.jpg"));
    const handleChangeImage = ()=>{
        setImage(image == require("../assets/ไฟล์ 1 นิ้ว.jpg") ? require("../assets/Screenshot 2023_09_11 095811.png"):require("../assets/ไฟล์ 1 นิ้ว.jpg"));
    }

  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={image} style={styles.profileImage}/>

            <View style={styles.optionContainer}>
                <View>
                    <Text style={styles.profileName}> {name} </Text>
                    <Button title="change name " onPress={handleChangeName} />
                </View>

                <Button title="change image " onPress={handleChangeImage} />
            </View>
            
        </View>

        <View style={styles.Image2Container}>
            <Image source={profileImage2} style={styles.Image2}/>
        </View>
        
    </View>
  );
};

export default ProfileScreen;

/*
const styles  = StyleSheet.create({
    container:{
        alignItems:"center",
        padding:20,
        borderColor:"#f5f5f5", // light gray
    },

    profileImage:{
        borderRadius:50,
        width:100,
        height:100,
        marginRight:20,
    },
    profileContainer:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        padding:20,
        borderRadius:10,
        backgroundColor:"white",
        elevation:5,
        marginTop:50,
    },
    profileName:{
        color: '#7fffd4'
    }
});
*/