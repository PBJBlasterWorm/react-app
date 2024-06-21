import React, { Component } from 'react';

class Park extends Component {
    render() {
        var gamelist = [];
        var game = this.props.game;
        var i = 0;

        while (i < game.length) {
            gamelist.push(<li key={game[i].class}><a href={"/Content/"+game[i].class}>{game[i].title}</a></li>);
            i++;
        }
        
        return (
            <div>
            {gamelist}
            </div>
        );
    }
}

export default Park;