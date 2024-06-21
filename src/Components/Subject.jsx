import React, { Component } from 'react';

class Subject extends Component {
    render() { // class안에서는 function키워드를 생략하고 바로 함수명을 씀(render())
      return ( // props: 컴포넌트 태그안에 title과 sub을 지정하고 props.{title or 속성이름}로 불러옴
        <header> 
              <h1><a href="/" onClick={function(e){
                e.preventDefault();
                this.props.onChangePage();
              }.bind(this)}>{this.props.title}</a></h1> 
              {this.props.sub}
        </header>
      );
    }
  }

export default Subject;