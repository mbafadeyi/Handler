import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { MyDrawer } from "./navigation/drawer";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
