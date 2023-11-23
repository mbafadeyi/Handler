import { HeaderBackButton } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function NewEventScreen() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(new Date());
  //   const [date, setDate] = useState(date);
  const [alert, setAlert] = useState({
    isVisible: false,
    msg: "",
  });

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "add new event",
      headerLeft: () => (
        <HeaderBackButton
          tintColor="white"
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, []);

  const handleAddEvent = async () => {
    const d = date.toISOString().slice(0, 10);
    console.log(d);

    const data = {
      name,
      description,
      date: d,
      //   date,
    };

    const response = await fetch(
      "https://rabbit-prime-cicada.ngrok-free.app/api/events/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    const res = await response.json();
    setAlert({ isVisible: true, msg: "event added" });
  };

  return (
    <View style={styles.screen}>
      {alert.isVisible && <Text>{alert.msg}</Text>}
      <TextInput
        value={name}
        onChange={setName}
        placeholder="name"
        style={styles.input}
      />
      <TextInput
        value={description}
        onChange={setDescription}
        placeholder="description"
        multiline={true}
        style={styles.input}
      />
      <TextInput
        value={date.toLocaleString()}
        // value={date}
        onChange={setDate}
        placeholder="event date"
        style={styles.input}
      />
      <Button onPress={handleAddEvent} title="add" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: "white",
    marginBottom: 10,
  },
});
