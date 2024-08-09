import { View, Text ,Image, Button} from 'react-native'
import React,{ useState } from 'react'
import { stylesProfile } from '../styles/ProfileStyles';
import Login from "./Login"

const ProfileScreen = ():React.JSX.Element => {
    const initialProfileImage = require("../assets/ไฟล์ 1 นิ้ว.jpg");
    const newProfileImage = require("../assets/Screenshot 2023_09_11 095811.png");

    const [name,setName] = useState("Suphada Jaruprateepkul");
    const handleChangeName = ()=>{
        setName(name == "Suphada Jaruprateepkul" ? "New Name":"Suphada Jaruprateepkul")
    }
    const [profileImage,setProfileImage] = useState(initialProfileImage);
    const handleChangeImage = ()=>{
        setProfileImage(profileImage == initialProfileImage ? newProfileImage:initialProfileImage);
    }

  return (
    <View style={stylesProfile.container}>
        <View style={stylesProfile.profileContainer}>
            <Image source={profileImage} style={stylesProfile.profileImage}/>

            <View>
                <View>
                    <Text style={stylesProfile.profileName}> {name} </Text>
                    <Button title="change name " onPress={handleChangeName} />
                    <Text>{'\n'}</Text>
                    <Button title="change image " onPress={handleChangeImage} />
                </View>
            </View>
        </View>
        <Login />
        
    </View>
  );
};

export default ProfileScreen;
