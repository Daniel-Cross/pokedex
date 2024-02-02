import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { GLOBAL_CONTAINER } from "../styles/styles";

const LoadingScreen = () => {
  return (
    <SafeAreaView style={GLOBAL_CONTAINER}>
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    </SafeAreaView>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
