// import
import Header from "./src/components/Header";
import './src/styles/App.css'
import MainPage from "./src/pages/MainPage";
import FavoritePage from "./src/pages/FavoritePage";
import SearchPage from "./src/pages/SearchPage";

// Logic
function App() {
  return (
    <div className="App">
      <Header/>
      <SearchPage/>
    </div>
  )
}

export default App
