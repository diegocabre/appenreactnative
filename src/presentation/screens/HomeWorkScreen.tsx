import { StyleSheet, View } from "react-native"

export const HomeWorkScreen = () => {
  return (
    <View style={styles.container}>
        <View style={[styles.box, styles.purpleBox]}/>
        <View style={[styles.box, styles.orangeBox]}/>
        <View style={[styles.box, styles.blueBox]}/>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#28425B',
        flexDirection: 'row',   
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 100,
        height: 100,
        borderWidth: 10,
        borderColor: 'white',
        
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        
    },
    orangeBox: {

        backgroundColor: '#F0A23B',
        top: 50,
       
    },
    blueBox: {

        backgroundColor: '#28C4D9',
     
    },
})

//la tarea 1 flex:1 en el orangeBox
//la tarea 2 le coloque justifyContent: 'center' al container y le coloque al blueBox el alignSelf: 'stretch' y width: '100%'
//la tarea 3 deje el padre con el justifyContent: 'center' el blueBox le coloque el alignSelf: 'center' y al purpleBox le coloque el alignSelf: 'flex-start'
/* la tarea 4 al conteiner flexDirection: 'row-reverse', justifyContent: 'space-between',
al orangeBox le coloque el alignSelf: 'center'
al blueBox le coloque el alignSelf: 'flex-end'  
 */
//tarea 5 comente el height del box
/* tarea 6 comente el width del box 
y a la purpleBox y orangeBox flex: 1 y blueBox flex: 3 */
/* tarea 7 al conteiner le coloque         
alignItems: 'center', justifyContent: 'center', */
/* tarea 8  al conteiner le coloque         
alignItems: 'center', justifyContent: 'center', al orangeBox 
 left: 100, */

