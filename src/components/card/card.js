import React, { useState } from 'react';
import { Like } from "../like"
import { useDispatch } from 'react-redux';
import { changeDeleted } from '../../redux/actions'
import "./card.css";


export const Card= ({cat}) => {
  
  const dispatch = useDispatch();
  const [image, setImage] = useState();

  const fetchImage = async (imageName) => {
    try {
        const response = await import(`../../images/${imageName}.jpg`);
        setImage(response.default)
    } catch (err) {
        console.log(err)
    } 
  }
  fetchImage(cat.picture);

 
    return (
      <div className="cards">
        <img src={image} className="img"></img>
        Порода: {cat.breed}<br/>
        Страна происхождения: {cat.country}<br/>
        Продолжительность жизни: {cat.longoflife}<br/>
        Размер: {cat.size}<br/>
        Вес: {cat.weight}<br/>
        Шерсть: {cat.fur}<br/>
        Окрас: {cat.color}<br/>
        Лайк  <Like liked={cat.isliked} breed={cat.breed} /> 
        <button onClick={() => dispatch(changeDeleted(cat.breed))}>Удалить породу</button>
      </div>
    )
}