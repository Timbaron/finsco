import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { COLORS, SIZES } from "../constants";
import { FlashList } from "@shopify/flash-list";
import TransactionCard from "../components/transactionCard";

const Transactions = ({ transactions }) => {
  // const renderedItems = transactions.slice(0, 7);
  return (
    <View>
      <Text style={styles.text}>Transactions</Text>
      <View style={styles.transactionBox}>
        <FlatList
          data={transactions}
          renderItem={({ item }) => <TransactionCard transaction={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Transactions;

const styles = StyleSheet.create({
  text: {
    fontSize: SIZES.medium,
    color: "grey",
    marginBottom: 10,
  },
  transactionBox: {
    // backgroundColor: "red",
    height: 350,
  },
});
