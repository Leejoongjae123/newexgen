'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

const App = () => {
  const [passengers, setPassengers] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);

  const fetchPassengers = async () => {
    try {
      const response = await axios.get(`https://api.instantwebtools.net/v1/passenger?page=${page}&size=10`);
      const newPassengers = response.data.data;

      // 더 이상 데이터가 없으면 hasMore를 false로 설정
      if (newPassengers.length === 0) {
        setHasMore(false);
      } else {
        setPassengers((prevPassengers) => [...prevPassengers, ...newPassengers]);
        setPage((prevPage) => prevPage + 1);
      }
    } catch (error) {
      console.error('Error fetching passengers:', error);
    }
  };

  useEffect(() => {
    fetchPassengers();
  }, []);

  return (
    <div>
      <h1>Infinite Scroll with Passengers</h1>
      <InfiniteScroll
        dataLength={passengers.length}
        next={fetchPassengers}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        endMessage={<p>All passengers have been loaded</p>}
      >
        {passengers.map((passenger, index) => (
          <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <p><strong>Name:</strong> {passenger.name}</p>
            <p><strong>Trips:</strong> {passenger.trips}</p>
            <p><strong>Airline:</strong> {passenger.airline[0].name}</p>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

export default App;
