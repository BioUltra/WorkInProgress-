import { StyleSheet, Text, View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import Gabutton from "@/components/Button";
import  ChatButton from "@/components/Header";
export default function Page() {
  return (
    <View style={styles.container}>
      <ChatButton title="Home" name="Home"></ChatButton>
      <View style={styles.main}>
        
          
          <Collapsible title="CLIQUE AQUI PRA ESSE BGLIN DESCER E DEPOIS SUBIR"></Collapsible>
        <Text style={styles.title}>BioUltra</Text>
        <Text style={styles.subtitle}>TLGD</Text>
        <Gabutton title="Botão" gradient >gabutton</Gabutton>
      </View>
      
    </View>
  
  );
}
const styles = StyleSheet.create({
  container: {
        flex: 1,
    justifyContent: "center",
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  //TITULO
  title: {
    fontSize: 64,
    fontWeight: "bold",
  color: "black"
  },
  //SUBTITULO
  subtitle: {
    fontSize: 36,
    color: "#3FFFFF",
  },
});
