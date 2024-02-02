import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { PALETTE } from "../../styles/styles";
import { MaterialIcons } from "@expo/vector-icons";

interface PokemonListItemProps {
  url: string;
  name: string;
  handleOnPressPokemon: (url: string) => void;
}

const PokemonListItem = ({
  url,
  name,
  handleOnPressPokemon,
}: PokemonListItemProps) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleOnPressPokemon(url)}
    >
      <Text style={styles.name}>{name}</Text>
      <MaterialIcons name="catching-pokemon" size={35} color={PALETTE.RED} />
    </TouchableOpacity>
  );
};

export default PokemonListItem;

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: 100,
    marginTop: 10,
    marginHorizontal: 5,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 2,
    borderColor: PALETTE.BLACK,
    backgroundColor: PALETTE.WHITE,
  },
  name: {
    textAlign: "center",
    fontSize: 22,
    color: PALETTE.BLACK,
    fontWeight: "bold",
  },
});
