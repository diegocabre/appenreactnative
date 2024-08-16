
import { View, Text, Platform, Pressable, StyleSheet } from "react-native"

interface Props{
    label: string;
    onPress?: () => void;
    onLongPress?: () => void;
}

export const PrimaryButton = ({label, onPress, onLongPress}: Props) => {
    
  return (
    <View>
       <Pressable 
      onPress={() => onPress && onPress()} 
      onLongPress={() => onLongPress && onLongPress()} 
      style={({pressed}) => [styles.button, pressed && styles.buttonPressed]}>
        <Text style={{color: Platform.OS === 'ios' ? 'black' : 'white', fontSize: 20}}>Incrementar</Text>
      </Pressable>
      <Text style={styles.title}>{label}</Text>
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
    button:{
        backgroundColor: '#5856D6',
        borderRadius: 100,
        padding: 10,
        margin: 10,
        alignItems: 'center',
      },
      buttonPressed:{
        backgroundColor: '#4746AB',
      },
})
