import {  Text, Modal } from 'react-native'
import  React from 'react'
import  {useState} from 'react'
import CommentForm from './CommentForm'
import { Button } from 'react-native-elements'

export default function CommentModal(props) {

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    
  return (
    <Modal visible={props.visible}>
      {/* <Text>CommentModal</Text> */}
      <CommentForm 
    //   onValidate={() => ()}
    />
      <Button title="Annuler" onPress={props.cancelComment}> </Button>
    </Modal>
  )
}