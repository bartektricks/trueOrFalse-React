import React from 'react';
import classNames from 'classnames';

/* Styles */
import style from './ElementsList.module.scss';

const ElementsList = props => (
    <ul className={style.listWrapper}>
        {Object.keys(props.list).map((listItem, index) =>
            <li
                key={index}
                className={classNames(style.listItem, { 
                    [style.isActive]: props.step === index,
                    [style.isSecond]: props.step === index - 1 || props.step === index + 1,
                    [style.isThird]: props.step === index - 2 || props.step === index + 2,
                    })}

            >
                {listItem}
            </li>
        )}
    </ul>
);

export default ElementsList;