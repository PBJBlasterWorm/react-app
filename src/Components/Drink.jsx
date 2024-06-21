import React, { Component } from 'react'

class Drink extends Component {
    render() {
        let drinklist = [];
        let drink = this.props.title;
        let i = 0;

        while (i < drink.length) {
            drinklist.push(<li key={drink[i].id}><a href={"/Cotent"+drink[i].id}>{drink[i].name}</a></li>);
            i++;
        }

        return (
            <div>
                {drinklist}
            </div>
        );
    }
}

export default Drink;