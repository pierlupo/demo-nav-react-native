import { Pressable, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import AppButton from './AppButton'

export default function PageB({navigation, route}) {
    // const userName = route.params.firstname
    // const userLastname = route.params.lastname
    // const userTel = route.params.tel
    
  return (
    <Pressable style={styles.ContainerB}>
    <View  >
      {/* <Text style={styles.text} title='go to PageC' onPress={()=> navigation.navigate("Contact")}>Cliquez ici pour aller PageC</Text> */}
      {/* <Text style={styles.text} >{userName}</Text>
      <Text style={styles.text} >{userLastname}</Text>
      <Text style={styles.text} >{userTel}</Text> */}
      
      <Button title='go to Contact1' onPress={()=> navigation.navigate("Contact",{firstname:"Christophe", lastname:"Delory", tel:"123456789"})}  />
      <Button title='go to Contact2' onPress={()=> navigation.navigate("Contact",{firstname:"toto", lastname:"Delory", tel:"223456789"})}  />
      <Button title='go to Contact3' onPress={()=> navigation.navigate("Contact",{firstname:"titi", lastname:"Delory", tel:"323456789"})}  />
      {/* <Text style={styles.text} >[contacts]</Text> */}
      {/* <AppButton title='go to PageC' onPress={()=> navigation.navigate("Contact")}/> */}
    </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    ContainerB: {

        flex: 1,
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#5C0029',
        
      },
      text:{
        color: 'white',
        fontSize: 30,
        textAlign: "center",
      }
})