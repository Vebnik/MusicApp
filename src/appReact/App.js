// import
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./src/components/Header";
import StaticPage from "./src/pages/StaticPage";
import './src/styles/App.css'
import SearchContent from "./src/pages/contentPages/SearchContent";
import FavoriteContent from "./src/pages/contentPages/FavoriteContent";
import AllMusicContent from "./src/pages/contentPages/AllMusicContent";
import SettingContent from "./src/pages/contentPages/SettingContent";


// Logic
function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <StaticPage>
          <Routes>
            <Route path={'/search'} element={<SearchContent />}/>
            <Route path={'/favorite'} element={<FavoriteContent />}/>
            <Route path={'/allMusic'} element={<AllMusicContent />}/>
            <Route path={'/settings'} element={<SettingContent />}/>
          </Routes>
        </StaticPage>
      </div>
    </BrowserRouter>
  )
}

export default App
