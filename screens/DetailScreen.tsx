import { View, Text } from 'react-native'
import React,{useState,useCallback} from 'react'
import { useNavigation,useRoute } from '@react-navigation/native'
import {findProductbyId} from '../services/product-service';
import { useFocusEffect } from '@react-navigation/native';

const DetailScreen = ():React.JSX.Element => {
    const route = useRoute<any>();
    const navigation = useNavigation<any>();
    const [detail,setDetail] = React.useState<any>([]);
    const [loading,setLoading] = useState<boolean>(false); 
    
React.useLayoutEffect(()=>{
    navigation.setOption({
        headerTitle:route.params.title
    });
},[navigation,route])

const getProductbyId = async()=>{
    try {
      setLoading(true);
      const response = await findProductbyId(route.params.id);
      //2. setState
      setDetail(response.data.data)
      //console.log(response.data.data);
    } catch (error:any){
      console.log(error.message);
    }finally{
      setLoading(false);
    }
      
  }

  // usefocusEffect ถูกใช่เมื่อไป focus หน้าที่เราเลือก และมักใช้ร่วมกับ useCallback ใช้บันทึกข้อมูลที่ทำงานอยู่ ซึ่งทำได้ app ทำงานได้เร็วขึ้น
  useFocusEffect(
    useCallback(()=>{
      getProductbyId();// เมื่อ rerenderปุบ จะใช้ funtion นี้
    },[]) 
  );

  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen