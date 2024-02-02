import { Dimensions, Platform, StyleSheet } from "react-native";

export const SCREEN_WIDTH = Dimensions.get("window").width;
export const SCREEN_HEIGHT = Dimensions.get("window").height;
export const IS_IOS = () => Platform.OS === "ios";

export const PALETTE = {
  LIGHT_GREY: "#e8e8e8",
  RED: "#ee1515",
  BLACK: "#222224",
  WHITE: "#fff",
};

export const standardMargin = 8;
export const edgeMargin = 16;

export const GLOBAL_CONTAINER = {
  flex: 1,
  paddingTop: IS_IOS() ? 0 : 10,
  width: SCREEN_WIDTH,
};

export const FLAT_LIST_CONTAINER = StyleSheet.create({
  styles: {
    flexGrow: 1,
    width: SCREEN_WIDTH - edgeMargin * 2,
    alignSelf: "center",
    paddingVertical: edgeMargin,
  },
});
