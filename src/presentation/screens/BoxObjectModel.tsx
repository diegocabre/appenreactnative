import { StyleSheet, Text, View } from "react-native";


export const BoxObjectModel = () => {
  return (
    <View style={styles.container}>
        {/* <Text style={styles.title}>BoxObjectModel</Text> */}
    <View style={styles.purpleBox}> 
        <Text></Text>
    </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  title: {
    fontSize: 30,
    paddingHorizontal: 30,
    paddingVertical: 10,

    borderWidth: 10,
  },
  purpleBox: {
    height: 30,
    backgroundColor: 'purple',
    margin: 20,
  }
})

