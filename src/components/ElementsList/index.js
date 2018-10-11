import React, { Component } from 'react';

/* External content */
import list from '../../vendors/ExternalList';
import classNames from 'classnames';

/* Styles */
import './_elementsList.scss';

class ElementsList extends Component {

    listElement = (props) => {
        const listItems = Object.keys(list);
        const step = props;

        return (
            listItems.map((e, i) => {
                const elementClass = classNames({
                    'listItem': true,
                    'isActive': step === i
                });
                return (<li className={elementClass} key={i} > {e} </li>)
            })
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