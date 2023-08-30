import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Registration from "./ui/Registration";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </Provider>
  );
}
