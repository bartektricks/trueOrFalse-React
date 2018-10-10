import React, { Component } from 'react';

import list from './ExternalList';

function listElement() {
    const listItems = Object.keys(list);

    return (
        listItems.map((e, i) => ( 
            <li className = 'listElement' key = {i} > {e} </li>
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