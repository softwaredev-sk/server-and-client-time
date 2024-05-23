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
  const ref = useRef();

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
        width: '400px',
      }}
    >
      Client Side:
      <input
        type="text"
        ref={ref}
        value={value}
        onChange={() => setValue(ref.current.value)}
        style={{
          padding: '10px 5px',
        }}
      />
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
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
          Get from Client Side Code
        </button>
        <button
          onClick={() => handleServerSide(value)}
          style={{
            padding: '5px 20px',
            backgroundColor: 'white',
            color: 'black',
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
          <b>Offset:</b> {offset}
        </p>
        <p>
          <b>Client Side:</b> {result}
        </p>
        <p>
          <b>Time from server side code:</b> {result2}
        </p>
        <p>
          <b>UTC Time String</b>: {UTCDate?.toString()}
        </p>
        <p>
          <b>UTC Time ISO String:</b> {ISODateValue?.toISOString()}
        </p>
      </div>
    </div>
  );
}
