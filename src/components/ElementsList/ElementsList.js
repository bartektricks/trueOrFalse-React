import React, { Component } from 'react';

import list from './ExternalList';

function listElement() {
    const listItems = Object.keys(list);
    const displayList = listItems.map((e, i) => ( 
        <li className = 'listElement' key = {i} > {e} </li>
    ));

    return displayList;
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