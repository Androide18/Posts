import { StyleSheet, Text, View } from "react-native";

export default ({ navigation }) => {
  const body = navigation.getParam("body");
  const title = navigation.getParam("title");
  const name = navigation.getParam("name");

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#007bf0",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  body: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "justify",
  },

});
