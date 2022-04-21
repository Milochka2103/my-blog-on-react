import React from 'react';
import { useLocation } from 'react-router-dom';
import './NoMatch.css';

export const NoMatch = () => {

  const location = useLocation();

  return (
    <h1 className='nomatch'>
      Page <span>{location.pathname}</span> not found
    </h1>
  )
}
