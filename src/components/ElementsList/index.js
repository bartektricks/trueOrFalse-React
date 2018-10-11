import React, { Component } from 'react';
import classNames from 'classnames';

/* Styles */
import style from './_elementsList.scss';

class ElementsList extends Component {
    render() {
        const { step, list } = this.props;
        const listItems = Object.keys(list);

        return ( 
            <ul className='elementsList' >
                {listItems.map((listItem, index) =>
                    <li
                        key={index}
                        className={classNames(style.listItem, { [style.isActive]: step === index })}

                    >
                        {listItem}
                    </li>
                )}
            </ul>
        );
    }
}

export default ElementsList;