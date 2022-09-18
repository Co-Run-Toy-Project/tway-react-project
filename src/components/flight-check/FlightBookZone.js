import React from 'react';
import styled from 'styled-components';

const BookZoneHeader = styled.div`
height: 32px;
background-color: brown;
border-radius: 18px 18px 0 0;
`

const BookZoneBody = styled.div`
background-color: white;
height: 11rem;
border-radius: 0 0 18px 18px;
`

const BookZone = styled.div`
width: 1200px;
height: 13rem;
background-color:white;
border-radius: 18px;
margin: auto;
margin-top: 5rem;
`

function FlightBookZone() {
  return (
      <BookZone>
        <BookZoneHeader></BookZoneHeader>
        <BookZoneBody></BookZoneBody>
      </BookZone>
  );
}

export default FlightBookZone;