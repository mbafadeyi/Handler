import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const EventDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { eventId, name, description } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: name,
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, []);

  return (
    <View style={styles.screen}>
      <Text style={styles.size}>This is event detail screen for {eventId}</Text>
      <Text style={styles.smallSize}>{name}</Text>
      <Text style={styles.smallSize}>{description}</Text>
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
  smallSize: {
    fontSize: 14,
  },
});

export default EventDetailScreen;
