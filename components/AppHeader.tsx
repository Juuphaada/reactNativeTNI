import { View,Text } from "react-native";
import React from "react";

type AppHeaderProps={
    title:string;
    year?: number; //ใส่หรือไม่ใส่ค่าก็ได้
}

const AppHeader = ({title,year}:AppHeaderProps):React.JSX.Element =>{
    return (
        <View>
            <Text>{title} {year && year+543}</Text> {/*ถ้าส่งค่าปีมาให้ +543 */}
        </View>
    );
};

export default AppHeader;