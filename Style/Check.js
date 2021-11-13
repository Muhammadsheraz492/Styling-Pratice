import React, { useState } from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Mockmocies from "../Mockmocies";
const Check = () => {
  const [Data, setData] = useState(Mockmocies.Search);
  return (
    <SafeAreaView>
      <View>
        <FlatList
          horizontal={true}
          data={Data}
          renderItem={({ item, index }) => (
            <View>
              <Text>{item.Title}</Text>
              <Text>{item.Year}</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Check;
