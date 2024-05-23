'use client';

import getLocalDateTime from '@/utils/getLocalTime';
import { useEffect, useRef, useState } from 'react';

export default function () {
  const offset = new Date().getTimezoneOffset();
  console.log('offset ', offset);

  const [value, setValue] = useState(null);
  const [ISODateValue, setISODateValue] = useState(null);
  const [UTCDate, setUTCDate] = useState();
  const [result, setResult] = useState(null);
  const [result2, setResult2] = useState(null);
  const [clientDateTime, setClientDateTime] = useState();
  const ref = useRef();

  useEffect(() => {
    const clientDate = new Date();
    const clientLocalDate = clientDate.toLocaleString();
    setClientDateTime(clientLocalDate);
  }, []);

  function handleClientSide(date) {
    const newDate = new Date(date);
    //for iso and  utcDate only
    setISODateValue(newDate);
    setUTCDate(newDate);
    //main client date
    const newDateState = newDate.toLocaleString().toUpperCase();
    console.log('newDate ', newDateState);
    setResult(newDateState);
  }

  function handleServerSide(date) {
    //date from server side
    const newDate = getLocalDateTime(date);
    setResult2(newDate);

    //to set ISODate and String
    const dateAsString = new Date(date);
    setUTCDate(dateAsString);
    setISODateValue(dateAsString);
  }

  return (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        margin: '20px',
        gap: '10px',
        maxWidth: '500px',
      }}
    >
      Client Side:
      <input
        type="text"
        ref={ref}
        value={value}
        onChange={() => setValue(ref.current.value)}
        placeholder="Enter UTC Time String to convert to Local time String"
        style={{
          padding: '10px 5px',
        }}
      />
      <div
        style={{
          display: 'flex',
          gap: '10px',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <span style={{ textAlign: 'right' }}>Convert from </span>
        <button
          onClick={() => handleClientSide(value)}
          style={{
            padding: '5px 20px',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '5px',
            border: '1px solid black',
          }}
        >
          Client Side
        </button>
        <button
          onClick={() => handleServerSide(value)}
          style={{
            padding: '5px 20px',
            backgroundColor: 'gray',
            color: 'white',
            borderRadius: '5px',
            border: '1px solid black',
          }}
        >
          Server Side
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          color: 'black',
          backgroundColor: 'white',
          padding: '10px',
        }}
      >
        <p>
          <span>
            <b>Offset:</b> {offset}{' '}
            <span>{offset <= 1 && offset >= -1 ? ' minute' : ' minutes'}</span>
          </span>
        </p>
        <p>
          <span>
            <b>You are:</b>{' '}
            {offset !== 0 &&
              ` (${Math.floor(Math.abs(offset) / 60)} hours ${
                Math.abs(offset) % 60
              } minute${Math.floor(Math.abs(offset) / 60) > 1 ? 's' : ''} ${
                offset < 0 ? 'Ahead' : 'Behind'
              })`}
          </span>
        </p>
        <p>
          <b>Client Side:</b> {result}
        </p>
        <p>
          <b>Time from server side code:</b>
          <span style={{ color: 'white', backgroundColor: 'gray' }}>
            {result2}
          </span>
        </p>
        <p>
          <b>UTC Time String</b>: {UTCDate?.toString()}
        </p>
        <p>
          <b>UTC Time ISO String:</b> {ISODateValue?.toISOString()}
        </p>
        <p>
          <b>Current Client Date Time:</b> {clientDateTime?.toISOString()}
        </p>
      </div>
    </div>
  );
}
