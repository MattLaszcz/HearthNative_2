import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

const ToggleSwitch = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#BAE3E1" }}
        thumbColor={isEnabled ? "#30ACA5" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 8,
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    display: 'flex'
  }
});

export default ToggleSwitch;