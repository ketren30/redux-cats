import React from 'react';
import { useDispatch } from 'react-redux';
import { changeLike } from '../redux/actions';


export const Like = ({liked, breed}) => {
  const like='https://raw.githubusercontent.com/ketren30/cats/main/images/like.jpg';
  const nolike="https://raw.githubusercontent.com/ketren30/cats/main/images/nolike.jpg";
  const dispatch = useDispatch();
  let likeLink = nolike;

  if (liked) likeLink = like
  else likeLink = nolike;

  return (
    <img src={likeLink} width='25px' height='20px' onClick={()=>dispatch(changeLike(breed))} />
  )
}