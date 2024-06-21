import React, { Component } from 'react';

class Phone extends Component {
    render() {
        let phonelist = [];
        let phone = this.props.name;
        let i = 0;

        while (i < phone.length) {
            phonelist.push(<li><a href={"/Comtent"+phone[i].id}>{phone[i].name}</a></li>);
            i++;
        }

        return (
            <div>
                {phonelist}
            </div>
        )
    }
}

export default Phone;