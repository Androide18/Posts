import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

const users = [
    {
        id: '1',
        name: "Roberto Planta",
    }
    {
        id: '2',
        name: "Yoana Aeroplano",
    }
    
]

export default () => {
    return (
      <View style={styles.container}>
       <FlatList
       data={users}
       keyExtractor={x =>x.id}
         renderItem={({item}) => <Text>{item.name}</Text>}
         />
        <StatusBar style="auto" />
        </View>
    );
    }

  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "flex-start",
      justifyContent: "flex-start",
    },
  });
  