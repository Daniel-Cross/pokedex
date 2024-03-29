import { FlatList, SafeAreaView } from "react-native";
import SearchBar from "../components/atoms/SearchBar";
import { FLAT_LIST_CONTAINER, GLOBAL_CONTAINER } from "../styles/styles";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { RootState } from "../store/store";
import PokemonListItem from "../components/atoms/PokemonListItem";
import {
  getAllPokemon,
  getSinglePokemonData,
} from "../store/pokemonDataSlice/pokemonDataSlice";
import PokemonModal from "../components/organisms/PokemonModal";
import { REDUX_REQUEST_STATUS } from "../store/pokemonDataSlice/types";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [dataIndex, setDataIndex] = useState(30);
  const { data, status } = useSelector((state: RootState) => state.pokemonData);
  const [pokemonData, setPokemonData] = useState(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemon());
  }, []);

  useEffect(() => {
    if (searchQuery.length > 0) {
      setPokemonData(
        data.filter((pokemon) =>
          pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setPokemonData(data.slice(0, dataIndex));
    }
  }, [data, searchQuery, dataIndex]);

  const handleLoadMorePokemon = () => {
    if (data.length >= 30) {
      setDataIndex((prevIndex) => prevIndex + 30);
    }
  };

  const handleOnPressPokemon = async (url: string) => {
    await dispatch(getSinglePokemonData(url));
    setShowModal(true);
  };

  const renderScreen = () => {
    if (status === REDUX_REQUEST_STATUS.LOADING) {
      return <LoadingScreen />;
    } else if (status === REDUX_REQUEST_STATUS.FAILED) {
      return <ErrorScreen />;
    } else if (status === REDUX_REQUEST_STATUS.SUCCEEDED) {
      return (
        <>
          <FlatList
            style={FLAT_LIST_CONTAINER.styles}
            data={pokemonData}
            numColumns={2}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <PokemonListItem
                name={item.name}
                url={item.url}
                handleOnPressPokemon={handleOnPressPokemon}
              />
            )}
            ListHeaderComponent={
              <SearchBar
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
              />
            }
            onEndReached={handleLoadMorePokemon}
            onEndReachedThreshold={0.5}
          />
          <PokemonModal showModal={showModal} setShowModal={setShowModal} />
        </>
      );
    }
  };

  return <SafeAreaView style={GLOBAL_CONTAINER}>{renderScreen()}</SafeAreaView>;
};

export default SearchScreen;
