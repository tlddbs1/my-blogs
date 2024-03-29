import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';

import Home from './components/Home';
import Posts from './components/Posts';
import Portfolio from './components/Portfolio';
import Blog from './components/Blog';
import Editor from './components/editor/Editorpage';

import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <div className="contents">
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/posts" component={Posts}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/blog" component={Blog}/>
          <Route exact path="/write" component={Editor}/>
        </Switch>
        </div>
        <Footer/>
        <div className="login-overlay">
          <div className="login-modal"></div>
        </div>
      </div>
    </Router>
  );
}

export default App;
