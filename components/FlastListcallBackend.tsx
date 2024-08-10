import { ActivityIndicator, StyleSheet, Text, View ,FlatList} from 'react-native'
import React ,{useEffect, useState} from 'react'

interface User{
    id:string;
    name:string;
    email:string;
}


const FlatListCallBackend = () =>{
    const[data,setData] = useState<User[]>([]);
    const[loading,setLoading] = useState(true);

    //กำหนด useEffect สำหรับเรียกข้อมูลจาก API เมื่อ component mount
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data=>{
            setData(data);
            setLoading(false);
        }).catch(error=>{
            console.error(error);
            setLoading(false);
        })
    },[])

    // ฟังค์ชัน renderItem สำหรับใช้ใน flatlist
    const _renderItem = ({item}:{item:User})=>(
        <View style={styles.item}>
            <Text style={styles.name}> {item.name} </Text>
            <Text style={styles.email}> {item.email} </Text>
        </View>
    ) 

    return(
        <View style={styles.container}>
            {loading?( // ถ้ายังโหลดข้อมูลอยู่จุะแสดง ActivityIndicator
                <ActivityIndicator size="large" color="red"/>
            ):( // ถ้าข้อมูลถูกโหลดมาแล้วจะแสดง  flatList
                <FlatList
                    data = {data}
                    renderItem = {_renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            )
            }
        </View>
    )
}

export default FlatListCallBackend;


const styles = StyleSheet.create({
    container: {
      marginTop:50,
    },
    item:{
      backgroundColor: '#87CEEB',
      padding:20,
      marginVertical:8,
      marginHorizontal:16,
    },
    name: {
      fontSize:16,
      fontWeight:'bold',
    },
    email:{
      fontSize:14,
    },
  });