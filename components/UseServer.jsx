import getLocalDateTime from '@/utils/getLocalTime';

async function getDateTime() {
  const res = await fetch(`${process.env.PROD_URL}/api/servertime`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    return;
  }

  return res.json();
}

export default async function () {
  const offset = new Date().getTimezoneOffset();
  console.log('offset ', offset);
  const date = new Date();
  const newDate = getLocalDateTime(date);
  console.log('newDate ', newDate);

  const dateAPI = await getDateTime();
  const serverDate = getLocalDateTime(dateAPI);

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
          <span>{offset <= 1 && offset >= -1 ? ' minute' : ' minutes'}</span>
          {offset !== 0 &&
            ` (${Math.floor(Math.abs(offset) / 60)} hours ${
              Math.abs(offset) % 60
            } minute${Math.floor(Math.abs(offset) / 60) > 1 ? 's' : ''} ${
              offset > 0 ? 'Ahead' : 'Behind'
            })`}
        </p>
        <strong>
          <em>Last Server Side Rendered:</em>
        </strong>
        <p>
          <b>Server Side:</b> {serverDate}
        </p>
        <p>
          <b>Time ISO String</b>: {dateAPI.toString()}
        </p>
        <strong>
          <em>Current Server Time (Refresh for up to date time):</em>
        </strong>
        <p>
          <b>Server Side:</b> {newDate}
        </p>
        <p>
          <b>Time String</b>: {date.toString()}
        </p>
        <p>
          <b>Time ISO String:</b> {date.toISOString()}
        </p>
      </div>
    </div>
  );
}
