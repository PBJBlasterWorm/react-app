import React, { Component } from 'react';

class Program extends Component {
    render() {
        let programlist = [];
        let program = this.props.kind;
        let i = 0;

        while (i < program.length) {
            programlist.push(<li key={program[i].id}><a href={"/Content"+program[i].id}>{program[i].name}</a></li>);
            i++;
        }

        return (
            <div>
                {programlist}
            </div>
        );
    }
}

export default Program;