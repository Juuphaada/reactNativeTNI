import { View, Button,StyleSheet} from 'react-native';
import React,{useLayoutEffect} from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native';
import AppLogo from '../components/AppLogo';
import {
  HeaderButton,
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import { logout } from '../services/auth-servise';
import { selectAuthState, setIsLogin } from '../auth/auth-slice';
import {Text} from '@rneui/base'; // ใช้ component Text จาก 
import { useAppDispatch, useAppSelector  } from '../redux-toolkit/hooks';

const MaterialHeaderButton = (props:any) =>(
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
)

const HomeScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>(); // navigation object ที่เราสามารถใช้เพื่อจัดการกับการน าทาง เช่น การน าทางไปยังหน้าจออื่นๆ
  const dispatch = useAppDispatch();
  const {profile} = useAppSelector(selectAuthState);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "หน้าหลัก",
      headerStyle: { backgroundColor: "#35a8ea" },
      headerTitle: () => <AppLogo />,
      headerTitleAlign: "center",
      headerLeft:()=>(
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item 
           title = "menu" iconName="menu"
           onPress={()=>{
            navigation.openDrawer();
           }}
          />
        </HeaderButtons>
      ),
      headerRight:()=>(
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item 
           title = "logout" iconName="logout"
           onPress={async()=>{
            await logout();
            dispatch(setIsLogin(false));
           }}
          />
        </HeaderButtons>
      )
    });
  }, [navigation]);

    const gotoAbout = () =>{
        navigation.navigate('About',{
            companyName:'Thai-Nichi Institute of Technology',
            companyId:100
        });
    };
    // 'About' App.tsx, <HomeStack.Screen, name="About"

    return (
      <View style={styles.container}>
      <MaterialIcon name="home" size={40} color='pink'/>
      {profile?(
        <>
          <Text h3> Welcome {profile.name}</Text>
          <Text>
            Email: {profile.email} ID:{profile.ig} Role:{profile.role}
          </Text>
        </>
      ):null}
      {/*<Text>HomeScreen</Text>*/}
      <Button title="About us" onPress={gotoAbout} />
      </View>
    );
  };
  
export default HomeScreen;

  const styles = StyleSheet.create({

    container: {
  
      padding: 20,
  
    },
  
    header: {
  
      fontSize: 24,
  
      fontWeight: "bold",
  
    },
  
    postContainer: {
  
      alignItems: "center",
  
      justifyContent: "center",
  
      marginTop: 50,
  
    },
  
    postText: {
  
      margin: 10,
  
      fontSize: 16,
  
    },
  
    postContent: {
  
      color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา​
  
              fontWeight: "bold",
  
    },
  
  });