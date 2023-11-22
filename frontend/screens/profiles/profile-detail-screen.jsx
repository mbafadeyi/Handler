import { useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const ProfileDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { eventId, title, description } = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, []);

  return (
    <View>
      <Text style={styles.size}>Profile id: {profileId}</Text>
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

export default ProfileDetailScreen;
