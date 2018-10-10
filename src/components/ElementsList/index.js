import React, { Component } from 'react';

import './_elementsList.scss';

import list from './ExternalList';

function listElement() {
    const listItems = Object.keys(list);

    return (
        listItems.map((e, i) => ( 
            <li className = 'listItem' key = {i} > {e} </li>
        ))
    )
}

class ElementsList extends Component {
    render() {
        return ( 
            <ul className = 'elementsList' > 
                {listElement()} 
            </ul>
        );
    }
}

export default ElementsList;