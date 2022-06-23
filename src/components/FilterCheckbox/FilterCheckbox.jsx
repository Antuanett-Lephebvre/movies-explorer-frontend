import React from 'react';

const FilterChekbox = (props) => {
    return (
    <>
<label htmlFor='short-films' className={`movies__search-btn-label ${props.name}`}>
              <input
                id='short-films'
                type='checkbox'
                className='movies__search-btn-invisible'
                name='short-films'
              />
              <span className='movies__search-btn-visible' />
              <span className='movies__search-title'>Короткометражки</span>
            </label>
    </>
    )
}

export default FilterChekbox;
