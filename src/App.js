import './App.css';
import { Component } from 'react';
import TOC from "./Components/TOC";
import ReadContent from "./Components/ReadContent";
import Subject from "./Components/Subject";
import Control from "./Components/Control";
import CreateContent from './Components/CreateContent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'read',
      selected_content_id: 2,
      subject: {title: 'WEB', sub: 'World Wide Web!'},
      welcome: {title: 'Welcome', desc: 'Hello, React!!'},
      contents: [
        {id: 1, title: 'HTML', desc: 'HTML is for infomation'},
        {id: 2, title: 'CSS', desc: 'CSS is for design'},
        {id: 3, title: 'JavaScript', desc: 'JavaScript is for interactive'}
      ]      
    }
}
    render() {
      console.log('App render');
      let _title, _desc, _article = null;
      if (this.state.mode === 'welcome') {
        _title = this.state.welcome.title;
        _desc = this.state.welcome.desc;
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>
      }

      else if (this.state.mode === 'read') {
        var i = 0;
        while (i < this.state.contents.length) {
          var data = this.state.contents[i];
          if (data.id === this.state.selected_content_id) {
            _title = data.title;
            _desc = data.desc;
            break;
          }
          i++;
        }        
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>
      } else if (this.state.mode === 'create') {
        _article = <CreateContent></CreateContent>
      }

      return (
        <div className="App">
          <Subject 
          title={this.state.subject.title}
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode: 'welcome'});
          }.bind(this)}
          >            
          </Subject>
          <TOC onChangePage={function(id){
            this.setState({mode: 'read',
              selected_content_id: Number(id)
            });
          }.bind(this)} data={this.state.contents}></TOC>
          <Control onChangeMode={function(_mode) {
            this.setState({
              mode: _mode
            });
          }.bind(this)}></Control>
          {_article}
        </div>
      );
  }
}
            

export default App;
