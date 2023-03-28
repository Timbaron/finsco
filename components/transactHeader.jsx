import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect } from "react";
import { COLORS, SIZES } from "../constants";

const TransactHeader = ({ activeWindow, setActiveWindow }) => {
  useEffect(() => {
    console.log(activeWindow)
  }, [activeWindow])
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.smallContainer(activeWindow, "send")} onPress={() => setActiveWindow('send')}>
        <View>
          <Text style={styles.text(activeWindow, "send")}>Send Money</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.smallContainer(activeWindow, "recieve")} onPress={() => setActiveWindow('receive')}>
        <View>
          <Text style={styles.text(activeWindow, "recieve")}>
            Recieve Money
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default TransactHeader;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    position: "relative",
    top: 0,
    borderBottomWidth: 5,
    borderBottomColor: "blue",
  },
  smallContainer: (activeWindow, name) => ({
    backgroundColor: COLORS.secondary,
    height: 50,
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    // border: '1px solid gray'
    borderBottomColor: name === activeWindow ? "black" : "grey",
    borderBottomWidth: name === activeWindow ? 2 : 1
  }),
  text: (activeWindow, name) => ({
    fontSize: name === activeWindow ? SIZES.medium : SIZES.medium,
    color: name === activeWindow ? "black" : "grey"
  }),
});
