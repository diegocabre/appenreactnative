import { useState } from "react";
import { View, Text, StyleSheet } from "react-native"
import { PrimaryButton } from "../components";
import { Button } from "react-native-paper";
export const CounterScreen = () => {

    const [count, setcount] = useState(0);
/* 
    const increment = () => {
        setcount(count + 1);
    };

    const reset = () => {
        setcount(0);
    };

 */

  return (
    <View style={styles.container}>
   {/*      <PrimaryButton 
        label={`${count}`}
        onPress={() => setcount(count + 1)}
        onLongPress={() => setcount(0)}/> */}

     <Button
        onPress={() => setcount(count + 1)}
        onLongPress={() => setcount(0)}
        mode="contained"
        >
        Incrementar
      </Button>
      <Text style={styles.title}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'blue',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
});
