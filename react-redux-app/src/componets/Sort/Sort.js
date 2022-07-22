import React from 'react'
import './Sort.css'
import arrow from '../../img/arrow.svg'
import searce from '../../img/searce.png'
import { sortDate, sortTitle } from '../../store/listSlice'
import { useDispatch } from 'react-redux'

const Sort = ({ setSearceTitle }) => {

    const dispatch = useDispatch()

    return (
        <div className='sort'>
            <div className='sort-list' >
                <div className='sort-title'
                    onClick={() => dispatch(sortTitle())}>
                    <p>Title</p>
                    <img className='arrow' src={arrow} alt='arrow' />
                </div>
                <div className='sort-date' onClick={() => dispatch(sortDate())}>
                    <p >Date </p>
                    <img className='arrow' src={arrow} alt='arrow' />
                </div>
            </div>
            <input
                className='sort-searce'
                type='text'
                name='title'
                placeholder='Searce the questions' maxLength='120'
                onChange={e => setSearceTitle(e.target.value)}
            /><img className='searce' src={searce} alt='searce' />
        </div>
    )
}

export default Sort