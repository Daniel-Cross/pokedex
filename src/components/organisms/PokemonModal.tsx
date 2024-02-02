import {
  Image,
  Modal,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { GLOBAL_CONTAINER, PALETTE, SCREEN_WIDTH } from "../../styles/styles";
import CloseButton from "../atoms/CloseButton";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

interface PokemonModalProps {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
}

const PokemonModal = ({ showModal, setShowModal }: PokemonModalProps) => {
  const { singlePokemonData } = useSelector(
    (state: RootState) => state.pokemonData
  );

  return (
    <Modal
      visible={showModal}
      onDismiss={() => setShowModal(false)}
      animationType="slide"
      presentationStyle="pageSheet"
    >
      <SafeAreaView style={GLOBAL_CONTAINER}>
        <CloseButton setShowModal={setShowModal} />
        <ScrollView style={styles.container}>
          <Text style={styles.header}>{singlePokemonData?.name}</Text>
          <Image
            source={{ uri: singlePokemonData?.image }}
            style={styles.image}
          />
          <View style={styles.informationContainer}>
            <View style={styles.informationItem}>
              <Text style={styles.categoryHeader}>Height</Text>
              <Text style={styles.pokemonDetails}>
                {singlePokemonData?.height} cm
              </Text>
            </View>
            <View style={styles.informationItem}>
              <Text style={styles.categoryHeader}>Weight</Text>
              <Text style={styles.pokemonDetails}>
                {singlePokemonData?.weight} kg
              </Text>
            </View>
          </View>
          <Text style={styles.categoryHeader}>Pokemon Type</Text>
          <View style={styles.tagContainer}>
            {singlePokemonData?.types.map((type: string, index: number) => (
              <View style={styles.tags} key={type}>
                <Text>{type}</Text>
              </View>
            ))}
          </View>

          <Text style={styles.categoryHeader}>Pokemon Abilities</Text>
          <View style={styles.tagContainer}>
            {singlePokemonData?.abilities.map(
              (ability: string, index: number) => (
                <View style={styles.tags} key={ability}>
                  <Text>{ability}</Text>
                </View>
              )
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

export default PokemonModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  image: {
    height: 350,
    marginTop: 20,
  },
  categoryHeader: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  informationContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 30,
  },
  informationItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  pokemonDetails: {
    fontSize: 16,
  },
  tagContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: SCREEN_WIDTH * 0.8,
    alignSelf: "center",
    marginBottom: 20,
  },
  tags: {
    borderWidth: 2,
    borderColor: PALETTE.BLACK,
    borderRadius: 20,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
});
