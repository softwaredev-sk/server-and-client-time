'use client';

import { useRef, useState } from 'react';

export default function () {
  const offset = new Date().getTimezoneOffset();
  console.log('offset ', offset);
  const [value, setValue] = useState(null);
  const [result, setResult] = useState(null);
  const ref = useRef();

  function handleMethod1(date) {
    const newDate = new Date(date);
    console.log('newDate ', newDate);
    const newDateState = newDate.toLocaleString();
    setResult(newDateState);
  }

  return (
    <div
      style={{
        display: 'flex',
        'flex-direction': 'column',
        margin: '20px',
        gap: '10px',
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
        <button onClick={() => handleMethod1(value)}>Method1</button>
        {/* <button onClick={() => handleMethod2(value)}>Method2</button>
        <button onClick={() => handleMethod1(value)}>Method1</button>
        <button onClick={() => handleMethod1(value)}>Method1</button>
        <button onClick={() => handleMethod1(value)}>Method1</button>
        <button onClick={() => handleMethod1(value)}>Method1</button>
        <button onClick={() => handleMethod1(value)}>Method1</button> */}
      </div>
      <div style={{ color: 'red', backgroundColor: 'white', padding: '10px' }}>
        <p>Method1: {offset}</p>
        {/* <p>Method2: {newDate}</p> */}
        <p>Method3: {result}</p>
      </div>
    </div>
  );
}
