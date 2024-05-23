import getLocalDateTime from '@/utils/getLocalTime';

export default function () {
  const offset = new Date().getTimezoneOffset();
  console.log('offset ', offset);
  const date = new Date();
  const newDate = getLocalDateTime(date);
  console.log('newDate ', newDate);

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
      Server Side:
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
          <b>Server Side:</b> {newDate}
        </p>
        <p>
          <b>UTC Time String</b>: {date.toString()}
        </p>
        <p>
          <b>UTC Time ISO String:</b> {date.toISOString()}
        </p>
      </div>
    </div>
  );
}
