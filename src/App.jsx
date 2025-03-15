import Header from "./components/Header.jsx";
import Body from "./components/Body.jsx";
import { Provider } from "react-redux";
import store from "./utils/store.jsx";

function App() {
  return (
    <div>
    <Provider store={store}>
      <Header/>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
