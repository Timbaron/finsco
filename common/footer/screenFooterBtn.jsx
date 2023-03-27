import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { COLORS, SIZES } from '../../constants'


const ScreenFooterBtn = ({iconUrl, handlePress}) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Image 
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg}
      />
    </TouchableOpacity>
  )
}

export default ScreenFooterBtn

const styles = StyleSheet.create({
  btnContainer: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },

  btnImg: ({
    width: 30,
    height: 30,
    borderRadius: SIZES.small / 1.25,
  }),
})