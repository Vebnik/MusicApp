// import
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from "./src/components/Header";
import './src/styles/App.css'
import Content from "./src/components/Content";
import StaticPage from "./src/pages/StaticPage";

// Logic
function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <StaticPage>
          <Routes>
            <Route path={'/search'} element={<Content />}/>
            <Route path={'/favorite'} element={<Content />}/>
            <Route path={'/allMusic'} element={<Content />}/>
            <Route path={'/settings'} element={<Content />}/>
          </Routes>
        </StaticPage>
      </div>
    </BrowserRouter>
  )
}

export default App
