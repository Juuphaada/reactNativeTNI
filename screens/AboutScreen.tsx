import { Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const AboutScreen = ({route}:any): React.JSX.Element => {

    const {companyName,companyId} = route.params;

  return (
    <SafeAreaView>
        <Image
            source={require('..\assets\building.png')}
        />
        <Text>
            {companyName} {companyId}
        </Text>
        <Image
            source={require('..\assets\building.png')}
            style = {styles.myImage}
        />
        <Image
            source={{uri:'https:codingthailand.com/site/img/cammera.png'}}
            style={styles.myImageNetwork}
        />
    </SafeAreaView>
    
  );
};

export default AboutScreen;

const styles = StyleSheet.create({

    container: {
  
      flexDirection: "column",
  
      justifyContent: "center",
  
      alignItems: "center",
  
    },
  
    myImage: {

      width: "100%",
  
      height: 200,
  
      marginTop: 20,
  
    },
    myImageNetwork: {
        width: 50,
        height: 50,
        marginTop:10,
    },
  
  });