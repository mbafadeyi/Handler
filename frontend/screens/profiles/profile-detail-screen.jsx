import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

const ProfileDetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const { profileId } = route.params;

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
