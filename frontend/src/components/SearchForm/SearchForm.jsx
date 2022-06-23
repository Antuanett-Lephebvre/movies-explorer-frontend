import React from 'react';
import loopImg from '../../images/loop.svg';
import FilterChekbox from '../FilterCheckbox/FilterCheckbox';
import dividingLine from '../../images/dividingLine.svg';

const SearchForm = () => {
    return (
<div className='movies__search-content'>
<div className='movies__search-bar'>
          <div className='movies__search-input-bar'>
            <img className='movies__search-loop-img' alt='лупа' src={loopImg}/>
            <input className='movies__search-input' placeholder='Фильм' required></input>
          </div>
          <div className='movies__search-btn-box'>
            <button className='movies__search-btn'></button>
            <img className='movies__dividing-line' alt='линия раздела формы' src={dividingLine}/>
            <FilterChekbox name='movies__checkbox-full'/>
          </div>
</div>
<FilterChekbox name='movies__checkbox-short'/>
</div>
    )
}

export default SearchForm;