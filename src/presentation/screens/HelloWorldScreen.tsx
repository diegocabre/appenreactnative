import { View, Text, StyleSheet } from 'react-native';

interface Props {
  name?: string;
}



export const HelloWorldScreen = ({name = 'World'}) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} ellipsizeMode='tail'  style={styles.title}>Hola {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
});


