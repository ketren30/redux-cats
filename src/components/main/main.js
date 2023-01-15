import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import './main.css';
import { fetchData, changeFiltr } from '../../redux/actions'
import { Cards } from "../cards"


export const Main = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
      dispatch(fetchData())
    }, [dispatch])
    
    const loading = useSelector(state => state.app.loading);

    const onInputChange = (event) => {
        dispatch(changeFiltr(event.target.value))
    }

    if (loading) return (
      <div>
        <h3>
          Загрузка...
        </h3>
      </div> 
    )
    
    else return (
      <div>
        <div className='wrapper'>
          Фильтр: <select onChange={ onInputChange }>
            <option value='1'>Показывать все породы</option>
            <option value='2'>Показать только понравившиеся</option>
          </select>
          <Cards />
        </div>
      </div>
    )
};



 