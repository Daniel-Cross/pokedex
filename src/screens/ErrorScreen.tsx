import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  GLOBAL_CONTAINER,
  PALETTE,
  SCREEN_WIDTH,
  edgeMargin,
} from "../styles/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { getAllPokemon } from "../store/pokemonDataSlice/pokemonDataSlice";

const ErrorScreen = () => {
  const dispatch = useDispatch();
  const handlePressRetry = () => {
    dispatch(getAllPokemon());
  };

  return (
    <SafeAreaView style={GLOBAL_CONTAINER}>
      <View style={styles.container}>
        <MaterialIcons name="error-outline" size={50} color={PALETTE.BLACK} />
        <Text style={styles.text}>
          Something went wrong. Please try again later...
        </Text>
        <TouchableOpacity
          onPress={() => handlePressRetry()}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ErrorScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH - edgeMargin * 2,
    alignSelf: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  button: {
    marginTop: 20,
    padding: edgeMargin,
    backgroundColor: PALETTE.RED,
    borderRadius: 10,
  },
  buttonText: {
    color: PALETTE.WHITE,
    fontSize: 18,
    fontWeight: "bold",
  },
});
