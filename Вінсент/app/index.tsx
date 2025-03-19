import { View, Text, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.title}>Вінсент ван Гог</Text>
        <Link href="/about">
          <Image
            source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSNggqA1ZS2W85yvx7gZaldxteOw6Ih2ai1w&s",}}
            style={styles.image}
            />
        </Link>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.info}>Народився: 30 березня 1853 р{"\n"}Помер: 29 липня 1890 р</Text>
        <Text style={styles.description}>
          Ван Гог створив понад 2 100 творів мистецтва, серед яких близько 860 картин. Незважаючи на важкі умови життя і депресії, його творчість стала основою для розвитку експресіонізму і вплинула на багатьох художників. Однією з його найбільш відомих картин є «Зоряна ніч».
        </Text>
      </View>
    </View>
  ); 
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
    marginRight: 20, 
  },
  image:{
    height: 400,
    width: 400,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    marginTop: 20,
  },
  info: {
    fontSize: 20,
    lineHeight: 24,
  },
  description: {
    fontSize: 20,
    lineHeight: 24,
  }
});