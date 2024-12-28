import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import { DataContextProvider } from "./context/DataContext";
import { NewVideo } from "../pages/NewVideo/NewVideo";
import { Footer, NavigationBar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new-video" element={<NewVideo />} />
        </Routes>
        <Footer />
      </DataContextProvider>
    </BrowserRouter>
  );
};

export default App;
