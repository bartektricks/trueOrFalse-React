import React, { Component } from 'react';

import list from './ExternalList';

function listElement() {
    const listItems = Object.keys(list);

    listItems.map((element) => {
        console.log(element);
        return (
            <li className='listElement' key={new Date()} >
                {element}
            </li>
        );
    })
}

class ElementsList extends Component {
    render() {
        return (
            <ul className='elementsList'>
                {listElement()}
            </ul>
        );
    }
}

export default ElementsList;
