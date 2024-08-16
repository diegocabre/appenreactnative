import { useState } from "react";
import { View, Text } from "react-native"
import { globalStyles } from "../theme/global.styles";
import { FAB } from "react-native-paper";
export const CounterM3Screen = () => {

    const [count, setcount] = useState(0);

  return (
    <View style={globalStyles.centerContainer}>
    <Text style={globalStyles.title}>{count}</Text>

    <FAB
      style={globalStyles.fab}
      onPress={() => setcount(count + 1)}
      onLongPress={() => setcount(0)}
      icon="heart-outline"
    />
    </View>
  );
};