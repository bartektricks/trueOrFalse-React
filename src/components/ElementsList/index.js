import React from 'react';
import classNames from 'classnames';

/* Styles */
import style from './ElementsList.module.scss';

const ElementsList = props => (
    <ul className='elementsList' >
        {Object.keys(props.list).map((listItem, index) =>
            <li
                key={index}
                className={classNames(style.listItem, { [style.isActive]: props.step === index })}

            >
                {listItem}
            </li>
        )}
    </ul>
);

export default ElementsList;