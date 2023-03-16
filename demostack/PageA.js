import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

export default function PageA({navigation}) {
  return (
    <View style={styles.Container}>
      <Text style={styles.text}>PageA</Text>
      <Button title='go to PageB' onPress={()=> navigation.navigate("About")} />
    </View>
  )
}

const styles = StyleSheet.create({

    Container: {

        flex: 1,
        justifyContent: 'center',
        padding: 15,
        backgroundColor: '#C9C5CB',
       
        
      },
      text:{
        color: 'white',
        fontSize: 50,
        textAlign: "center",
      }
})