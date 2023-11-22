import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfilesScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Profiles Screen</Text>
      <Button
        title="some profile"
        onPress={() => navigation.navigate("Profile", { profileId: 1 })}
      />
    </View>
  );
};

export default ProfilesScreen;
