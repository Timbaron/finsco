import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SIZES } from "../constants";

const Hypers = ({ color, iconUrl, title, handlePress }) => {
  return (
    <TouchableOpacity style={styles.indivItem(color)} onPress={handlePress}>
      <View>
        <Image source={iconUrl} resizeMode="cover" style={styles.btnImg} />
      </View>
      <View>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Hypers;

const styles = StyleSheet.create({
  btnImg: {
    width: 30,
    height: 30,
    borderRadius: SIZES.small / 1.25,
  },
  indivItem: (backgroundColor) => ({
    backgroundColor: backgroundColor,
    width: 130,
    borderBottomEndRadius: 20,
    borderTopLeftRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  }),
});
