

import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, ImageBackground, View } from "react-native";
import { location as local } from "./_helper/location.helper";



const Home = ({navigation}) => {
  let [province, setProvince] = useState([]);
  console.log(navigation);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => {
    local.getProvince().then(data => {
      setProvince(data)
    })
      .catch(e => console.log(e))
      .finally(() => {
        setIsLoading(false)
      })
   
  }, [])
  const renderItem = ({ item }) => {
    
   if (item._hot)  return (
      
      <TouchableOpacity onPress={()=>navigation.navigate("ListPost",{
        id: item.id
      })} >
        <ImageBackground
        
            
          style={[styles.image, { width: 300, height: 300 }]}
          source={{ uri: item._image, height: 100, width: 100 }}
        >
          <Text >{item._name}</Text>
          <Text style={{ color: "white" }}>{item._count}</Text>
        </ImageBackground>
      </TouchableOpacity >
    )
  };

  return (
    <View style={styles.container}>
      {isloading ? <Text>Loading</Text> : <FlatList
    
        data={province}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      
      />}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 50,
    marginLeft: 50,
    flexDirection: "row"

  },
  image: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 6,
    marginTop:3
  }
  ,
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
  },
  blockUser: {

    marginTop: 10,
    display: "flex",
    width: 200
  }
});

export default Home;