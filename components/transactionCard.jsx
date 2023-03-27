import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { COLORS, SIZES } from "../constants";

const TransactionCard = ({ transaction }) => {
  let TransactionColor = "";
  if (transaction.amount > 0) {
    TransactionColor = "#90EE90";
  } else {
    TransactionColor = "#FFA590";
  }
  return (
    <TouchableOpacity onPress={() => console.log(transaction.id)}>
      <View style={[styles.container, { backgroundColor: TransactionColor }]}>
        <View>
          <Text style={styles.category}>{transaction.category}</Text>
          <Text>{transaction.description}</Text>
        </View>
        <View>
          <Text>{transaction.amount} USD</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TransactionCard;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderRadius: 10,
  },
  category: {
    fontSize: SIZES.medium,
    letterSpacing: SIZES.xSmall / 3,
  },
});
