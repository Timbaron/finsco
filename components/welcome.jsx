import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ActionBtn } from "./index";
import { COLORS, FONT, SIZES } from "../constants";
import { useRouter } from "expo-router";
import Loader from "../common/loader/loader";

const Welcome = () => {
  const [isBalanceLoading, setIsBalanceLoading] = useState(false);
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.balancaText}>Balance</Text>
        {isBalanceLoading ? (
          <Loader text="Loading Balance" />
        ) : (
          <Text style={styles.balance}>$15,000,000.00</Text>
        )}
      </View>

      <View style={styles.btn}>
        <ActionBtn
          name="Deposit"
          onPress={() => {
            router.push("/deposits/deposit");
          }}
        />
        <ActionBtn
          name="Withdraw"
          onPress={() => {
            router.push("/withdraws/withdraw");
          }}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 200,
    backgroundColor: "#fff",
    // padding: 10,
    paddingTop: 30,
    display: "flex",
    flexDirection: "column",
    gap: 15,
  },
  balancaText: {
    color: "grey",
    fontSize: SIZES.medium,
  },
  balance: {
    color: COLORS.gray2,
    fontSize: SIZES.large,
    fontWeight: "bold",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    position: "relative",
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
  },
});
