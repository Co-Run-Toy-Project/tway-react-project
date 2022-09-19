import React, { useState } from 'react';
import styled from 'styled-components';


const BookZone = styled.div`
width: 1200px;
height: 13rem;
background-color:white;
border-radius: 18px;
margin: auto;
margin-top: 4rem;
`
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
const BookOption = styled.div`
`




  //왕복 편도 다구간 체크 


  const TabMenu = styled.ul`

  width: 206px;
  height: 32px;
  background-color: rgba(73, 73, 73, 0.1);
  color: rgba(73, 73, 73, 0.5);

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  border-radius: 25px;
  margin-right: 0;
  padding-left: 0;
  
  letter-spacing: -0.5px;
  text-align: center;
  cursor: pointer;

  .submenu {
    ${'' /* 기본 Tabmenu 에 대한 CSS를 구현합니다. */}
    width : calc( 206px / 3 );
    height : 100%;
    transition-duration: 0.15s;
    border-radius: 25px;
  }

  .focused {
    ${'' /* 선택된 Tabmenu 에만 적용되는 CSS를 구현합니다.  */}
    color:white;
    background-color: #d22c26;
    transition-duration: 0.15s;
    height : 100%;
  }

  & div.desc {
    text-align: center;
  }

  .text__content{
    transition-duration: 0.15s;
  }
`;

const Desc = styled.div`
  text-align: center;
`;

const RoundOrOne = () => {
  const [currentOption, setCurrentOption] = useState(0);

  const roundChecker = (index) => {
    setCurrentOption(index);
  }

  const menuArr = [
    { name: '왕복', content: 'Tab menu ONE' },
    { name: '편도', content: 'Tab menu TWO' },
    { name: '다구간', content: 'Tab menu THREE' },
  ];

  return(

        <TabMenu>
          {menuArr.map((el,index) => <div key={index} className={index === currentOption ? "submenu focused": "submenu"}
          onClick={() => roundChecker(index)}>
            {el.name}</div>)}
        </TabMenu>

  )
}


//단체 유무 클릭
const CheckPoint = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;

  >img{
    width: 22px;
    height: 22px;
    margin-right: 10px;
  }
  .checked{
    overflow : visible ;
    font-weight: bold;
  }

`

const GroupCheck = () => {

  const [isCheck, setIsCheck] = useState(false)

  const groupChecker = () => {
    setIsCheck(!isCheck)
  }

  return (
      <CheckPoint onClick={groupChecker} className={isCheck ? 'checked pointer' : 'pointer'} >
        <img src={ isCheck ? process.env.PUBLIC_URL + 'icon/ico_checkbox_group.png' : process.env.PUBLIC_URL + 'icon/ico_checkbox_ none.png'}></img>
        <div className={isCheck ? 'checked' : ''} >단체(10명이상)</div>
      </CheckPoint>
  )
} 

//할인 코드 입력


const DisCountInput = () => {

  const handleChange = (e) =>{
    const regex = /^[a-zA-Z]{0,13}$/;
  }
  return (
    <Reserve>
      <input type="text" onChange = {handleChange} value = {inputValue}></input>
    </Reserve>
  )
}

const BookSchedule = styled.div`
`

function FlightBookZone() {
  return (
      <BookZone>
        <BookZoneHeader>
          <img src={process.env.PUBLIC_URL + 'images/bg_main_booking02.png'}></img>
        </BookZoneHeader>
        <BookZoneBody>
          <BookOption>
            <RoundOrOne></RoundOrOne>
            <GroupCheck></GroupCheck>
            <DisCountInput></DisCountInput>
            <div className='discount__input'></div>
          </BookOption>
          <BookSchedule>
            <div className='start__point'></div>
            <div className='finish__point'></div>
            <div className='schedule'></div>
            <div className='passenger__number'></div>
            <div className='inquiry__button'></div>
          </BookSchedule>
        </BookZoneBody>
      </BookZone>
  );
}

export default FlightBookZone;