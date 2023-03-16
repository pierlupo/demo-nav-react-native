import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function PageC({navigation, route}) {
    const userfirstname = route.params.firstname
    const userlastname = route.params.lastname
    const usertel = route.params.tel
  return (
        <View style={styles.ContainerC}> 
        <Text style={styles.text}>Contact</Text>
        <Button title='Go to pageA' onPress={()=> navigation.navigate("Home")} />
        <Text style={styles.text}>Nom: {userfirstname}</Text>
        <Text style={styles.text}>Prenom: {userlastname}</Text>
        <Text style={styles.text}>Tel: {usertel}</Text>
  </View>
  )
}

const styles = StyleSheet.create({
    ContainerC: {

        flex: 1,
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#94BFBE',
       
        
      },
      text:{
        color: 'white',
        fontSize: 50,
        textAlign: "center",
      }
})