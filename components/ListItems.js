import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}> {title} </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingHorizontal: 14,
  },
  text: {
    fontSize: 18,
    color: "#007bf0",
  },
});
