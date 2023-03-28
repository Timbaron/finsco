import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ScreenFooterBtn from '../common/footer/screenFooterBtn'
import { COLORS, icons } from '../constants'
import { useRouter } from 'expo-router'

const Footer = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ScreenFooterBtn iconUrl={icons.home} handlePress={() => console.log('Home')}/>
      <ScreenFooterBtn iconUrl={icons.wallet} handlePress={() => console.log('Wallet')}/>
      <ScreenFooterBtn iconUrl={icons.transfer} handlePress={() => router.push('/send/money')}/>
      <ScreenFooterBtn iconUrl={icons.analysis} handlePress={() => console.log('Analysis')}/>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: COLORS.secondary,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    margin: 'auto',
    position: 'absolute', //Here is the trick
    bottom: 0,
  }
});