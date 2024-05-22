'use client';

import getLocalDateTime from '@/utils/getLocalTime';
import { useRef, useState } from 'react';

export default function () {
  const offset = new Date().getTimezoneOffset();
  console.log('offset ', offset);
  const [value, setValue] = useState(null);
  const [result, setResult] = useState(null);
  const [result2, setResult2] = useState(null);
  const ref = useRef();

  function handleClientSide(date) {
    const newDate = new Date(date);
    const newDateState = newDate.toLocaleString().toUpperCase();
    console.log('newDate ', newDateState);
    setResult(newDateState);
  }

  function handleServerSide(date) {
    const newDate = getLocalDateTime(date);
    setResult2(newDate);
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
      UseClint:
      <input
        type="text"
        ref={ref}
        value={value}
        onChange={(e) => setValue(ref.current.value)}
      />
      <div style={{ display: 'flex', gap: '10px' }}>
        <button onClick={() => handleClientSide(value)}>Client Side</button>
        <button onClick={() => handleServerSide(value)}>Server Side</button>
      </div>
      <div style={{ color: 'red', backgroundColor: 'white', padding: '10px' }}>
        <p>Offset: {offset}</p>
        <p>Client Side: {result}</p>
        <p>Server Side: {result2}</p>
      </div>
    </div>
  );
}
