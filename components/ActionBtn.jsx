import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { COLORS } from '../constants'

const ActionBtn = ({name, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.actionButton}>
      <Text style={styles.actionText}>{name}</Text>
    </TouchableOpacity>
  )
}

export default ActionBtn

const styles = StyleSheet.create({
  actionButton: {
    width: 140,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center"
  },
  actionText: {
    color: COLORS.secondary, 
    fontWeight: "bold",
  }
})