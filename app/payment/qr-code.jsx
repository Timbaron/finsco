import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Stack, useRouter } from "expo-router";
import { Footer, TransactHeader } from "../../components";
import { COLORS, icons, images, SIZES, transactions } from "../../constants";
import ScreenHeaderBtn from "../../common/header/screenHeaderBtn";
import Hypers from "../../components/hypers";

const QRcode = () => {
  const router = useRouter();
  const [activeWindow, setActiveWindow] = useState("receive");
  // useEffect(() => {
  //   console.log(activeWindow)
  // }, [activeWindow])
  const displayWindow = () => {
    switch (activeWindow) {
      case "send":
        return <Text>Send Window</Text>;
      case "receive":
        return <Text>Receive Window</Text>;
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ padding: SIZES.medium }}>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.secondary,
            },
            headerShadowVisible: false,

            headerTitle: "You wan Transact? 😏",
          }}
        />
      </View>
      {/* <TransactHeader activeWindow={activeWindow} setActiveWindow={setActiveWindow} /> */}
      {/* {displayWindow()} */}
      <View style={styles.HypersContainer}>
        <View style={styles.hypers}>
          <Hypers
            color={COLORS.secondary}
            iconUrl={icons.send}
            title="Send"
            handlePress={() => console.log("Send Press")}
          />
        </View>
        <View style={styles.hypers}>
          <Hypers
            color={COLORS.secondary}
            iconUrl={icons.recieve}
            title="Receive"
            handlePress={() => router.push('payment/receive')}
          />
        </View>
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default QRcode;

const styles = StyleSheet.create({
  HypersContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: 'row',
    gap: 20,
    height: "50%",
  },
  hypers: {
    height: 100,
  }
});
