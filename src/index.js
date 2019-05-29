import { AppRegistry } from "react-native";
import App from "./App";
import React from 'react';

AppRegistry.registerComponent("App", () => App);

AppRegistry.runApplication("App", {
  rootTag: document.getElementById("root")
});
