import { View, Text, SafeAreaView } from "react-native";
import { Stack, useRouter } from "expo-router";
import { COLORS, icons, images, SIZES, transactions} from "../constants";
import ScreenHeaderBtn from "../common/header/screenHeaderBtn";
import { Welcome, Transactions, Footer } from "../components";

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ padding: SIZES.medium }}>
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: COLORS.lightWhite,
            },
            headerShadowVisible: false,
            headerLeft: () => (
              <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
            ),
            headerRight: () => (
              <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
            ),
            headerTitle: "",
          }}
        />
        <Welcome />
        <Transactions transactions={transactions}  />
      </View>
      <Footer />
    </SafeAreaView>
  );
};

export default Home;
