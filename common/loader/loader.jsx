import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { COLORS } from '../../constants'

const Loader = ({text}) => {
  return (
    <View style={styles.container}>
        <ActivityIndicator color={COLORS.primary} size={30} />
        <Text>{text}...</Text>
    </View>
  )
}

export default Loader

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    }
})