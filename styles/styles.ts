import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
        color: "#48d1cc"
    },

    Image2:{
        width:"100%",
        height:"60%",
        marginTop:20,
    },
    Image2Container:{
        alignItems:"center",
        width:"100%",
        padding:20,
        borderRadius:10,
        backgroundColor:"white",
        marginTop:50,
    },

    optionContainer:{
        justifyContent: "space-around"
        
    }
});