import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as creators from '../state/actionCreator';



export default function Profile() {
  const quotes = useSelector(state => state.quotes)
  const dispatch = useDispatch()
    useEffect(() => {
     dispatch(creators.get_data());
    }, [dispatch]);

    return (
      <BlockLIst quotes={quotes}/>
    );
  }

function Block({ item }) {
  return (
    <div>
      <h4>{item.quote}</h4>
      <p>{item.author}</p>
    </div>
  );
}

function BlockLIst({quotes}){

  return (
    <>
    {
      quotes.map(quote => (
        <Block key={quote.id} item={quote}/>
  ))
    }
    </>
  )
}