import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import SearchScreen from "./src/screens/SearchScreen";

export default function App() {
  return (
    <Provider store={store}>
      <StatusBar style="auto" />
      <SearchScreen />
    </Provider>
  );
}
