import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { PALETTE, standardMargin } from "../../styles/styles";

interface CloseButtonProps {
  setShowModal: (value: boolean) => void;
}

const CloseButton = ({ setShowModal }: CloseButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => setShowModal(false)}>
      <Ionicons name="close" size={25} color={PALETTE.BLACK} />
    </TouchableOpacity>
  );
};

export default CloseButton;

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    top: 10,
    right: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: standardMargin,
    zIndex: 1,
  },
});
