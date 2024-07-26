import { StyleSheet, Text, View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
export default function Page() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
          <Collapsible title="aaa"></Collapsible>
        <Text style={styles.title}>BioUltra</Text>
        <Text style={styles.subtitle}>TLGD</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});
