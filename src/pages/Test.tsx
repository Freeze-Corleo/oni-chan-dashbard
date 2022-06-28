import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

const Restaurant = () => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    const socket = io('ws://localhost:6969');

    socket.on('FromAPI', (data) => {
      setResponse(data);
    });
  }, [setResponse]);

  return (
    <p>
      It's <time dateTime={response}>{response}</time>
    </p>
  );
};
export default Restaurant;
