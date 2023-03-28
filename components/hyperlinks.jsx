import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES, icons } from "../constants";
import Hypers from "./hypers";
import { useRouter } from "expo-router";

const Hyperlinks = () => {
  const router = useRouter()
  return (
    <View style={styles.hyperlinkContainer}>
      <View style={styles.container}>
        <Hypers
          color="#e9e4ac"
          iconUrl={icons.PhoneCall}
          title="Airtime"
          handlePress={() => console.log("Airtime Press")}
        />
        <Hypers
          color="#baf7eb"
          iconUrl={icons.television}
          title="Cable Tv"
          handlePress={() => console.log("Cable Tv Press")}
        />
      </View>
      <View style={[styles.container, styles.container2]}>
        <Hypers
          color="#f7bae9"
          iconUrl={icons.transfer}
          title="Send Money"
          handlePress={() => router.push('/send/money')}
        />
        <Hypers
          color="#eb8a8a"
          iconUrl={icons.analysis}
          title="Analysis"
          handlePress={() => console.log("Analysis Press")}
        />
      </View>
    </View>
  );
};

export default Hyperlinks;

const styles = StyleSheet.create({
  hyperlinkContainer: {
    backgroundColor: COLORS.secondary,
    height: 350,
    padding: 10,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: COLORS.secondary,
    height: 150,
    padding: 5,
  },
  container2: {
    position: "relative",
    bottom: 0,
  },  
});
