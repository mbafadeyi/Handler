import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";

const EventDetailScreen = () => {
  const route = useRoute();

  const { eventId, title, description } = route.params;

  return (
    <View style={styles.screen}>
      <Text style={styles.size}>This is event detail screen for {eventId}</Text>
      <Text style={styles.size}>{title}</Text>
      <Text style={styles.size}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  size: {
    fontSize: 20,
  },
});

export default EventDetailScreen;
