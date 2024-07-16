import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/home')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error!', error);
      });
  }, []);

  return (
    <div style={{margin: '20px'}}>
      {data ? <p>{data.message}</p> : <p>1...</p>}
    </div>
  );
};

export default HomePage;
