// import
import {BrowserRouter as Router} from "react-router-dom";
import Header from "./src/components/Header";
import './src/styles/App.css'
import Content from "./src/components/Content";
import StaticPage from "./src/pages/StaticPage";

// Logic
function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <StaticPage>
          <Content/>
        </StaticPage>
      </div>
    </Router>
  )
}

export default App
