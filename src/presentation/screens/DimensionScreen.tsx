import { StyleSheet, Text, useWindowDimensions, View } from "react-native"

import {Dimensions} from 'react-native';

export const DimensionScreen = () => {

    const {width, height} = useWindowDimensions ();

  return (
    <View>
    <View style={styles.container}>
        <View style={{
            ...styles.purpleBox,
            width: width * 0.6,

        }} ></View>
    </View>
    <Text style={styles.title}>W: {width}, H: {height}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
        container: {
            //width: '100%',
            width: 300,
            height: 300,
            backgroundColor: 'red',
            },
            purpleBox: {
                backgroundColor: 'purple',
                height: '50%',
                width: '50%',
            },
            title: {
                fontSize: 30,
                textAlign: 'center',
            } 
})