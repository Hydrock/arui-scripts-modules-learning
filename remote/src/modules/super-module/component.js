import React from 'react';
import _ from 'lodash'
console.log('_:', _);

import style from './style.module.css';

export const Component = (props) => {
    console.log('props from remote module:', props);
    return (
        <div className={style.wow}>
            Hey Mom, I am from Remote. And I in Shadow. Boooooo....
        </div>
    );
}

