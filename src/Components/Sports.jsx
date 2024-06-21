import React, { Component } from 'react';

class Sports extends Component {
    render() {
        let playlist = [];
        let play = this.props.name;
        let i = 0;
        while (i < play.length) {
            playlist.push(<li key={play[i].id}><a href={"/Content"+play[i].id}>{play[i].title}</a></li>);
            i++;
        }
        return (
            <div>
                {playlist}
            </div>
        );
    }
}

export default Sports