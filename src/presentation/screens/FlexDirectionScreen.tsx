import { StyleSheet, View } from 'react-native';



export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={ [styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />

      <View style={[styles.box, styles.box1]} />
      <View style={ [styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />

      <View style={[styles.box, styles.box1]} />
      <View style={ [styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
      <View style={[styles.box, styles.box4]} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexWrap: 'wrap',

    },
    box: {
        width: 100,
        height: 100,
    },
    box1: {
        backgroundColor: '#5856D6',
        },
    box2: {
        backgroundColor: '#F0A23B',
        //alignSelf: 'center',
        },
    box3: {
        backgroundColor: '#28C4D9',
        //alignSelf: 'flex-start',
        },
    box4: {
        backgroundColor: '#dd0d67',
        //alignSelf: 'flex-start',
        },
})