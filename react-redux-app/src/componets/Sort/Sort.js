import React from 'react'
import './Sort.css'
import arrow from '../../img/arrow.svg'
import searce from '../../img/searce.png'
import { sortDate } from '../../store/listSlice'
import { useDispatch } from 'react-redux'

const Sort = () => {
    const dispatch = useDispatch(sortDate)
    return (
        <div className='sort'>
            <div className='sort-list' >
                <div className='sort-title'>
                    <p>Title</p>
                    <img className='arrow' src={arrow} alt='' />
                </div>
                <div className='sort-date'>
                    <p onClick={dispatch}>Date </p>
                    <img className='arrow' src={arrow} alt='' />
                </div>
            </div>
            <input className='sort-searce' type='text' name='title' placeholder='Searce the questions' maxLength='120' /><img className='searce' src={searce} alt='' />
        </div>
    )
}

export default Sort