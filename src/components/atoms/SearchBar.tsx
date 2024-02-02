import { StyleSheet, TextInput } from "react-native";
import { PALETTE, SCREEN_WIDTH, edgeMargin } from "../../styles/styles";

interface SearchBarProps {
  setSearchQuery: (value: string) => void;
}

const SearchBar = ({ setSearchQuery }: SearchBarProps) => {
  return (
    <TextInput
      onChangeText={(value: string) => {
        setSearchQuery(value);
      }}
      style={styles.textInput}
      clearButtonMode="always"
      placeholder="Search Pokemon..."
      autoCapitalize="sentences"
    />
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  textInput: {
    height: 50,
    borderRadius: 8,
    padding: edgeMargin,
    width: SCREEN_WIDTH - edgeMargin * 2,
    backgroundColor: PALETTE.LIGHT_GREY,
    fontSize: 18,
  },
});
