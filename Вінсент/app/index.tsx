import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Вінсент ван Гог</Text>
      <Link href="/about" >
      
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSNggqA1ZS2W85yvx7gZaldxteOw6Ih2ai1w&s",}}
        style={styles.image}
      />
      </Link>
      <Text style={{ fontSize: 20 }}>Народжений: 30 Березня  1853 р<br></br>Помер: 29 липня 1890 (37 років) </Text>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
  },
  image:{
    height: 400,
    width: 400,
  }
});