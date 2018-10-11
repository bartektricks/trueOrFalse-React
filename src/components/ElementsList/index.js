import React, { Component } from 'react';

import './_elementsList.scss';

import list from '../../vendors/ExternalList';

class ElementsList extends Component {

    handleStep = (step, i) => {
        if(step === i) {
            return 'listItem isActive'
        } else {
            return 'listItem'
        }
    }

    listElement = (props) => {
        const listItems = Object.keys(list);
        const step = props;

        return (
            listItems.map((e, i) => ( 
                <li className={this.handleStep(step, i)} key={i} id={i} > {e} </li>
            ))
        )
    }

    render() {
        return ( 
            <ul className='elementsList' > 
                {this.listElement(this.props.step)} 
            </ul>
        );
    }
}

export default ElementsList;