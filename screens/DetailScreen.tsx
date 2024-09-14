import { View, Text } from 'react-native'
import React,{useState,useCallback} from 'react'
import { useNavigation,useRoute } from '@react-navigation/native'
import {findProductbyId} from '../services/product-service';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import {ListItem, Tile} from "@rneui/themed"
import { ListRenderItem } from 'react-native';
import { Dimensions } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

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
      console.log(error);
    }finally{
      setLoading(false);
    }
      
  }

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
    <>
        <Tile
                imageSrc={{
                    uri: 'https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp',
                    cache: 'force-cache',
                }}
                title={item.ch_title}
                titleStyle={styles.titleStyle}
                containerStyle={styles.tileContainer}
                caption={item.ch_dateadd}
                captionStyle={styles.captionStyle}
                featured
                activeOpacity={0.9}
                width={Dimensions.get('screen').width-20} // ลบขอบเล็กน้อยทั้งสองข้าง
            />

    </>
    );
    };

  // usefocusEffect ถูกใช่เมื่อไป focus หน้าที่เราเลือก และมักใช้ร่วมกับ useCallback ใช้บันทึกข้อมูลที่ทำงานอยู่ ซึ่งทำได้ app ทำงานได้เร็วขึ้น
  useFocusEffect(
    useCallback(()=>{
      getProductbyId();// เมื่อ rerenderปุบ จะใช้ funtion นี้
    },[]) 
  );

  return (
    <View>
    <FlatList
        data = {detail}
        renderItem = {_renderItem}
        keyExtractor={(item:any)=> item.ch_id.toString()}
        onRefresh={()=>{ getProductbyId();}}
        refreshing = {loading}
        contentContainerStyle = {styles.listContent}
      />
    </View>
  )
}

export default DetailScreen;

const styles = StyleSheet.create({
    container: {
    backgroundColor: '#f0f0f0', // สีพื้นหลัง
    },
    listContent: {
    paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
    },
    titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'blue', // สีขาวส าหรับชื่อ
    },
    tileContainer: {
    borderRadius: 10, //ก าหนดให้มุมของ container มีความโค้งมน
    overflow: 'hidden', //ก าหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
    marginBottom: 10, //ก าหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
    elevation: 5, // เงาส าหรับ Android
    shadowOffset: { width: 0, height: 2 }, //ก าหนดต าแหน่งของเงาที่แสดงผล
    shadowOpacity: 0.25, //ก าหนดระดับความโปร่งแสงของเงา 
    shadowRadius: 3.84, //ก าหนดรัศมีของการกระจายตัวของเงา 
    opacity: 0.5, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
    },
    captionStyle: {
    fontSize: 14,
    color: 'blue' // สีขาวส าหรับวันที่
    },
    });
    