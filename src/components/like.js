import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLike } from '../redux/actions';
import like from '../images/like.jpg';
import nolike from '../images/nolike.jpg';


export const Like = ({liked, breed}) => {
  const dispatch = useDispatch();

  return (
    <img src={liked? like:nolike} width='25px' height='20px' onClick={()=>dispatch(changeLike(breed))} />
  )
}