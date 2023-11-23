import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import EventList from "../components/events/event-list";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    console.log("refreshing");
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    fetchData();
  }, [refresh]);

  const fetchData = async () => {
    const response = await fetch(
      "https://rabbit-prime-cicada.ngrok-free.app/api/events/",
    );
    const data = await response.json();
    setData(data);
  };

  return (
    <View style={styles.screen}>
      <Button
        onPress={() => navigation.navigate("New Event")}
        title="add new event"
      />
      <EventList data={data} onRefresh={handleRefresh} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});

export default HomeScreen;
