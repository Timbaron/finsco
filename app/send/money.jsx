import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Stack, useRouter } from "expo-router";
import { COLORS, SIZES, icons, images } from "../../constants";
import ScreenHeaderBtn from "../../common/header/screenHeaderBtn";
import { ActionBtn } from "../../components";

const SendMoney = () => {
  const router = useRouter();
  const [value, setValue] = useState("");

  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  const onChangeText = (text) => {
    const cleanText = text.replace(/[^0-9]/g, ""); // Remove all non-numeric characters
    const formattedText = formatNumber(cleanText);
    setValue(formattedText);
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
            headerLeft: () => (
              <ScreenHeaderBtn
                iconUrl={icons.chevronLeft}
                dimension="60%"
                handlePress={() => router.back()}
              />
            ),
            headerTitle: "Send Money",
          }}
        />
        <View style={styles.profileContainer}>
          <Image
            source={images.profile}
            resizeMode="cover"
            style={styles.profileImg}
          />
          <View style={styles.profileName}>
            <Text style={styles.profileText}>Akiode Timothy</Text>
          </View>
        </View>
        <View style={{ alignItems: "center", marginTop: 50 }}>
          <TextInput
            keyboardType="numeric"
            onChangeText={onChangeText}
            value={"₦" + value}
            placeholder="Enter Amount to send"
            style={styles.textInput}
            textAlign={"center"}
            textAlignVertical={"center"}
          />
        </View>
        <View style={styles.btnView}>
          <ActionBtn
            name="Next"
            onPress={() => {
              router.push(`/payment/qr-code/${value}`);
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SendMoney;

const styles = StyleSheet.create({
  profileImg: {
    borderRadius: 100,
    height: 100,
    width: 100,
  },
  profileContainer: {
    alignItems: "center",
    position: "relative",
    top: 20,
  },
  profileName: {
    margin: 15,
  },
  profileText: {
    fontSize: SIZES.medium,
    fontWeight: "bold",
    color: "black",
  },
  textInput: {
    height: 40,
    width: 200,
    borderColor: "gray",
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
    color: COLORS.primary,
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
  },
  btnView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  }
});
