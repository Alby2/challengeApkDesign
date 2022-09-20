import {
  Image,
  SafeAreaView,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Card from "../components/Card";
import Count from "../components/Count";
import KeyboardWrapper from "../components/Layouts/KeyboardWrapper";

import { useRef } from "react";
import { useTheme } from "@react-navigation/native";
import { MaterialIcons } from "react-native-vector-icons";

const Home = ({ navigation }) => {
  const theme = useTheme();
  const dataSeeLater = [
    {
      id: "bd7acbekjhja-c1b1-46c2-aed5-3ad53abb28ba",
      name: "Poivron",
      picture:"poivron.png",
      price:"1000"
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3adyyy53abb28ba",
      name: "Tomate",
      picture:"tomate.png",
      price:"800"
    },
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53ezabb28ba",
      name: "Gingembre",
      picture:"gingembre.png",
      price:"500"
    },
    {
      id: "bd7acbea-c1b1d-46c2-aed5ik-3ad53ezabb28ba",
      name: "Gingembre",
      picture:"gingembre.png",
      price:"500"
    },
  ]
  return (
    <SafeAreaView style={{ width: "100%", height: "100%" }}>
      <View
        style={{
          width: "100%",
          backgroundColor: theme.colors.white,
          flexDirection: "row",
          padding: 5,
          height: 70,
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          style={{ marginRight: 3, marginLeft: 10 }}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <MaterialIcons
            name="arrow-back-ios"
            size={25}
            color={theme.colors.primary}
          />
        </TouchableOpacity>
      </View>

      <KeyboardWrapper>
        <>
          <View style={{ flex: 1 }}>
            <View
              style={{
                height: 200,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../assets/tomate.png")}
                style={{ height: 200, width: 230 }}
              />
            </View>
            <View style={{ marginHorizontal: 18 }}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Tomates,1kg
              </Text>
              <View
                style={{
                  marginTop: 7,
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingRight: 5,
                }}
              >
                <Text style={{ fontSize: 28, fontWeight: "700" }}>
                  1000 FCFA
                </Text>
                <Count />
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 20,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "400",
                  color: theme.colors.primary,
                }}
              >
                Vous aimeriez aussi
              </Text>
            </View>
          </View>
          <FlatList
            style={{ marginBottom: 50 }}
            horizontal={true}
            renderItem={({item}) => {
              return <Card name={item.name} picture={item.picture} price={item.price} />;
            }}
            keyExtractor={(item) => item.id}
            data={dataSeeLater}
          />
        </>
      </KeyboardWrapper>
    </SafeAreaView>
  );
};

export default Home;
