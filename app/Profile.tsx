import React from "react";
import {
  ImageBackground,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Ionicons } from "@expo/vector-icons";

const w = Dimensions.get("window").width;
const h = Dimensions.get("window").height;

const Profile: React.FC = ({}) => {
  return (
    <ScrollView style={{ backgroundColor: "#241332" }}>
      <ImageBackground
        source={require("../assets/images/photo.png")}
        style={{
          height: 0.45 * h,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            marginTop: 60,
            alignItems: "center",
          }}
        >
          <Ionicons name="arrow-back-outline" size={24} color="white" />
          <Feather name="filter" size={24} color="white" />
        </View>
        <LinearGradient
          colors={["rgba(36,19,50,1)", "transparent"]}
          style={{
            transform: [{ rotate: "180deg" }],
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            height: 0.16 * h,
          }}
        >
          <Text
            style={{
              transform: [{ rotate: "-180deg" }],
              color: "#FFF",
              fontSize: 35,
              marginVertical: 30,
              alignSelf: "center",
              fontFamily: "Montserrat_700Bold",
            }}
          >
            Ida Niska
          </Text>
        </LinearGradient>
      </ImageBackground>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text>125</Text>
          <Text>FOLLOWERS</Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text>150</Text>
          <Text>FOLLOWING</Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text>321</Text>
          <Text>LIKES</Text>
        </View>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Text>125</Text>
          <Text>FOLLOWING</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Profile;
