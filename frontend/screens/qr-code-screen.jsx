import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function QrCodeScreen() {
  return (
    <View style={styles.screen}>
      <Text>Qr code scanner</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
});
