import React, { Component } from 'react';

import list from './ExternalList';

class ElementsList extends Component {
    listElement = () => {
        const listItems = Object.keys(list);
        listItems.map((element) => {
            return <li className='listElement'>element</li>;
        })
    }

    render() {
        return (
            <ul className='elementsList'>
                {this.listElement()}
            </ul>
        );
    }
}

export default ElementsList;
