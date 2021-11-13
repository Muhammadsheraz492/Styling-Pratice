import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import Mockmocies from "../Mockmocies";
const HamzaBhaiScreen = () => {
  const d = new Date();
  let hours = d.getHours();
  let mintes = d.getMinutes();
  const [Data, setData] = useState(Mockmocies.Search);
  return (
    <SafeAreaView>
      <View style={{ alignItems: "center" }}>
        <View style={{ height: "100%", width: "90%" }}>
          <View
            style={{
              borderWidth: 2,
              width: "14%",
              //   height: "4%",

              backgroundColor: "#FF3B30",
              alignSelf: "flex-start",
              justifyContent: "space-between",
              borderRadius: 10,
              borderColor: "#FF3B30",
            }}
          >
            <Text style={{ color: "white" }}>
              {hours}:{mintes}
            </Text>
          </View>
          <View style={{ height: "3%" }}></View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ width: "10%" }}>
              <View
                style={{
                  borderBottomWidth: 2,
                  borderWidth: 1.5,
                }}
              />
              <View
                style={{
                  height: "6%",
                }}
              />
              <View
                style={{
                  borderBottomWidth: 2,
                  borderWidth: 1.5,
                  width: "80%",
                }}
              />
            </View>
            <View style={{ width: "80%" }} />

            <View>
              <Image source={require("../IMage/Vector.png")} />
            </View>
          </View>
          {/* Align And Basket Design Completed without Use Margin Button and left */}
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 20 }}>Hello Tony, </Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Whats Fruits salaed
              </Text>
            </View>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              combo do you want today?
            </Text>
          </View>

          {/* Text Hello Tony completed */}
          <View style={{ height: "2%" }} />
          <View
            style={{
              //   backgroundColor: "blue",
              height: "6%",
              flexDirection: "row",
            }}
          >
            <View
              style={{
                borderWidth: 2,
                width: "80%",
                borderRadius: 10,
                justifyContent: "center",
                height: 50,
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <EvilIcons name="search" size={24} color="black" />
                <TextInput
                  // style={{ justifyContent: "center" }}
                  placeholder={"Enter your Email"}
                />
              </View>
            </View>

            <View style={{ width: "3%" }} />
            <TouchableOpacity>
              <View style={{ height: 53 }}>
                <FontAwesome5 name="sliders-h" size={35} color="black" />
              </View>
            </TouchableOpacity>
          </View>
          {/* TextInput  Box completed   */}
          <View style={{ height: "3%" }} />
          <View>
            <Text style={{ fontSize: 20 }}>Recommended Combo</Text>
          </View>
          {/* Flatlist Top text */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HamzaBhaiScreen;
