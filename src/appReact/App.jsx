// import
import {BrowserRouter} from 'react-router-dom';
import Header from "./src/components/Header";
import StaticPage from "./src/pages/StaticPage";
import SearchContent from "./src/pages/contentPages/SearchContent";
import 'react-h5-audio-player/lib/styles.css';
import './src/styles/App.css'
import {useState} from "react";


function App() {

  const [page, setPage] = useState('/')
  const [currentPath, setPath] = useState(<SearchContent />)

  const changePage = (page) => {
    console.log(page)
    setPage(page)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <StaticPage page={changePage} myRoutes={setPath} pageCurrent={page} >
          {currentPath}
        </StaticPage>
      </div>
    </BrowserRouter>
  )
}

export default App
