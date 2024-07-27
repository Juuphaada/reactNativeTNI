import { View, Text , StyleSheet,Image} from 'react-native'
import React from 'react'
import styles from '../styles/styles';

const ProfileScreen = ():React.JSX.Element => {
    const profileImage = require("../assets/ไฟล์ 1 นิ้ว.jpg");

  return (
    <View style={styles.container}>
        <View style={styles.profileContainer}>
            <Image source={profileImage} style={styles.profileImage}/>
            <Text style={styles.profileName}>Suphada Jaruprateepkul</Text>

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