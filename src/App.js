import "./styles.css";
import { Header } from "./header/Header";
import { Destinations } from "./destinations/Destinations";
import destinations from "./__data__/destinations.json";
import {
  BrowserRouter,
} from "react-router-dom";
import { SearchForm } from "./searchForm/SearchForm";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <SearchForm />
        <Destinations destinations={destinations}/>
      </BrowserRouter>
    </div>
  );
}
