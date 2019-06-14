import React , {Component} from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';

import Home from 'components/Home';
import Posts from 'components/Posts';
import Portfolio from 'components/Portfolio';
import Blog from 'components/Blog';
import Write from 'components/Write';
import Editorpage from 'components/editor/Editorpage';

import '../App.css'
class App extends Component {

  render() {
    return (
        
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/posts" component={Posts}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/editor" component={Editorpage}/>
            </Switch>
            </Router>
          </div>
        
      );
  }
}

export default App;