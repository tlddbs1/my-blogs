import React , {Component} from 'react';
import { BrowserRouter as Router , Switch , Route} from 'react-router-dom';

import Home from 'components/Home';
import Posts from 'components/Posts';
import Portfolio from 'components/Portfolio';
import Blog from 'components/Blog';
import BlogDetailContainer from 'containers/BlogDetailContainer';
import Editorpage from 'components/editor/Editorpage';
import Login from 'components/login/Login';

import '../App.css'
class App extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/posts" component={Posts}/>
              <Route exact path="/portfolio" component={Portfolio}/>
              <Route exact path="/blog" component={Blog}/>
              <Route exact path="/editor" component={Editorpage}/>
              <Route path="/blog/:idx" component={BlogDetailContainer}/>
            </Switch>
            </Router>
            <Login/>
          </div>
      </React.Fragment>
      );
  }
}

export default App;