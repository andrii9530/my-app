import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Вінсент ван Гог</Text>
      <Link href="/about" >
      
      <Image
        source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSNggqA1ZS2W85yvx7gZaldxteOw6Ih2ai1w&s",}}
        style={styles.image}
      />
      </Link>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image:{
    height: 400,
    width: 400,
  }
});