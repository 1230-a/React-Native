import { View, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import React from 'react'

export default function AddButton(props) {
  return (
    <View>
      <Button buttonStyle={styles.Buton} title={props.content} onPress={props.handlePress}/>
    </View>
  )
}
const styles = StyleSheet.create({
    Buton: {
      backgroundColor: "skyblue",
      margin:25
    }
  });