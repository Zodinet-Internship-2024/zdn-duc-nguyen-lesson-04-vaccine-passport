import React from 'react'
import '../styles/FormSearch.scss';
import Form from './Form';
import vaccine from '../images/Group949.png';
export default function FormSearch() {
  return (
    <div className='form-search'>

        <Form/>
        <div className='img-vaccine'>
            <img src={vaccine} alt="" />
        </div>
    </div>
  )
}
