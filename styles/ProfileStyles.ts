import { StyleSheet } from "react-native";

  const stylesProfile = StyleSheet.create({
  container: {
    justifyContent: "flex-start", // จัดให้องค์ประกอบภายในอยู่ต้นแนวตั้ง
    alignItems: "center", // จัดให้องค์ประกอบภายในอยู่ตรงกลางแนวนอน
    padding: 20, // เพิ่ม padding รอบ ๆ คอนเทนเนอร์ 20 หน่วย
    backgroundColor: "white", // ตั้งค่าสีพื้นหลังเป็นสีเทาอ่อน
  },
  profileContainer: {
    flexDirection: "row", // จัดให้องค์ประกอบภายในเรียงตามแนวนอน
    alignItems: "center", // จัดให้อยู่ตรงกลางในแนวขวาง (แนวตั้ง)
    width: "100%", // ใช้ความกว้างเต็มหน้าจอ
    padding: 20, // เพิ่ม padding ภายในคอนเทนเนอร์ 20 หน่วย
    backgroundColor: "white",
    borderRadius: 10, // ทำให้ขอบของคอนเทนเนอร์มีมุมมน 10 หน่วย
    elevation: 5, // เพิ่มเงาให้กับคอนเทนเนอร์ (เฉพาะ Android)
    marginTop: 50, // เพิ่มระยะห่างจากด้านบน 50 หน่วย
  },
  profileImage: {
    width: 100, // กำหนดความกว้างของรูปภาพเป็น 100 หน่วย
    height: 100, // กำหนดความสูงของรูปภาพเป็น 100 หน่วย
    borderRadius: 50, // ทำให้รูปภาพเป็นวงกลม (ครึ่งหนึ่งของความกว้างและความสูง)
    marginRight: 20, // เพิ่มระยะห่างทางขวาของรูปภาพ 20 หน่วย
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#00008b",
  },
});

const stylesLogin = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
    backgroundColor: '#ffffff', // ตั้งค่าสีพื้นหลังเป็นสีขาว
    borderRadius: 10, // เพิ่มความมนให้กับขอบคอนเทนเนอร์
    elevation: 3, // เพิ่มเงาให้กับคอนเทนเนอร์ (เฉพาะ Android)
    width: '100%', // ตั้งความกว้างของ container ให้เต็มหน้าจอ
  },
  input: {
    height: 45, // เพิ่มความสูงของ TextInput
    borderColor: "#cccccc", // เปลี่ยนสีขอบเป็นสีเทาอ่อน
    borderWidth: 1, 
    borderRadius: 8, // เพิ่มความมนให้กับขอบ TextInput
    marginBottom: 15, // เพิ่มระยะห่างด้านล่างระหว่าง TextInput
    paddingHorizontal: 15, // เพิ่มระยะห่างภายใน TextInput
    backgroundColor: "#f9f9f9", // ตั้งค่าสีพื้นหลังของ TextInput
  }, 
});

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

const stylesPractice = StyleSheet.create({
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

export { stylesProfile, stylesLogin };

