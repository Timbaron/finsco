import React from 'react'
import { Text, View } from 'react-native'
import {ActionBtn} from './'

const Welcome = () => {
  return (
    <View>
      <Text>Welcome</Text>

      <ActionBtn name="Deposit"/>
      <ActionBtn name="Withdraw"/>
    </View>
  )
}

export default Welcome