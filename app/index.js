import { View, Text, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES, transactions} from "../constants";
import ScreenHeaderBtn from "../common/header/screenHeaderBtn";
import { Welcome, Transactions, Footer, Hyperlinks } from "../components";

const Home = () => {
  const router = useRouter();
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
              <ScreenHeaderBtn iconUrl={icons.QrCode} dimension="60%" handlePress={() => router.push('payment/qr-code') } />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" handlePress={() => console.log('Profile')} />
            ),
            headerTitle: "",
          }}
        />
        <Welcome />
        {/* <Transactions transactions={transactions}  /> */}
        <Hyperlinks />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Home;
