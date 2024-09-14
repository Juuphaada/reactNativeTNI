import { View, Text, ListRenderItem } from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { findAllProduct } from "../services/product-service";
import { useFocusEffect } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
import { ListItem, Avatar } from '@rneui/themed';
import { Badge } from "@rneui/base";
import { ActivityIndicator } from "react-native";

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {

  const navigation = useNavigation<any>();
  //1. กำหนด state
  const [product,setProduct] = useState<any[]>([]);
  const [loading,setLoading] = useState<boolean>(false); 

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Product",
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const getProduct = async()=>{
    try {
      setLoading(true);
      const response = await findAllProduct();
      //2. setState
      setProduct(response.data.data)
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
      getProduct();// เมื่อ rerenderปุบ จะใช้ funtion นี้
    },[]) 
  );

  if(loading){
    return(
      <ActivityIndicator size="large" color = "blue"/>
    )
  };

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
    <>
    <ListItem bottomDivider
    onPress={()=>{
      navigation.navigate("Details",{
        id: item.id,
        title: item.title,
      });
    }}
    >
    <Avatar source={{ uri: item.picture }} size={50} rounded />
    <ListItem.Content>
    <ListItem.Title>{item.title}</ListItem.Title>
    <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
    <Badge value={item.view} status="success"/>
    </ListItem>
    </>
    );
    };

   
  return (
    
    <View>
      {/*3. show product data */}
      {/*<Text>{JSON.stringify(product)}</Text> */}
      <FlatList
        data = {product}
        renderItem = {_renderItem}
        keyExtractor={(item:any)=> item.id.toString()}
        onRefresh={async()=>{await getProduct();}}
        refreshing = {loading}
      />
      
    </View>
  );
  
};

export default ProductScreen;