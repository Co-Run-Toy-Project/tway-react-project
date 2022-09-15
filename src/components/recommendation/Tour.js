import styled, { ThemeProvider } from 'styled-components';
import arrow from '../../assets/icon/ico_route_goods.png'
import pause from '../../assets/icon/bg_pause2.png'
import play from '../../assets/icon/bg_play2.png'
import listIcon from '../../assets/icon/ico_sort_list.png'
import albumIcon from '../../assets/icon/ico_sort_album_on.png'
import prevBtn from '../../assets/icon/btn_goods_prev.png'
import nextBtn from '../../assets/icon/btn_goods_next.png'

// import Bold from '../../assets/fonts/NanumGothicBold.woff'

const CarouselContainer = styled.div`
  width : 100%;
  height : 600px;
  background-color: ${props => props.theme.lightgray};
`

const CarouselHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const IconContainer = styled.div`
  display: inline-block;
  border : 1px solid #000;
  width: 40px;
  height: 40px;
  text-align: center;
  vertical-align: middle;
`

const ContentContainer = styled.div`
  width: 1220px;
  height : 480px;
  /* border : 1px solid blue; */
  margin: 10px 100px;
  padding: 0;
`

const FlightsContainer = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width : 100%;
  /* height: 100%; */
  /* width: 1220px; */
  height : 450px;
  margin: 0;
  padding: 0; 
  /* overflow: hidden; */
`;

const FlightLi = styled.li`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  border-radius: 5px;
  margin: 0 10px 10px;
  width: 590px;
  height : 75px;
  background-color: ${props => props.theme.gray};
  color : #fff;
  font-size: 18px;
  font-weight: 500;
`

const FlightAlbum = styled.li`

`

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Paging = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Indicator = styled.div`
width: 8px;
height: 8px;
background-color: lightgrey;
border-radius: 10px;
margin: 5px;
`

const Tour = ({flights}) => {
  const devision = (<span style={{fontWeight: 300}}>|</span>)

  const flightLi = flights.map(list => (
    <FlightLi key={list.id}>
      <span>{list.date} </span>
      {devision}

      <span>{list.departure}</span>
      <span>
        <img src={arrow} />
      </span> 
      <span>{list.destination}</span>

      {devision}

      <PriceContainer>
        <span style={{fontSize: "14px"}}>KRW</span>
        <span>{list.price}</span>
      </PriceContainer>

      {devision}

      <span>{list.about}</span>
    </FlightLi>
    ));

  return (
    <>
    <CarouselContainer style={{position: 'relative'}}>
      <CarouselHeader>
        <h2 style={{position: 'relative', left: "30px"}}>최저가 여행</h2>
        <div style={{position: 'relative', left: '490px'}}>
          <IconContainer>
            <img src={listIcon} style={{position: 'relative', top: '50%', transform: 'translateY(-50%)'}} />
          </IconContainer>
          <IconContainer>
            <img src={albumIcon} style={{position: 'relative', top: '50%', transform: 'translateY(-50%)'}} />
          </IconContainer>
        </div>
      </CarouselHeader>

      <ContentContainer>
        <FlightsContainer>
          {flightLi}
        </FlightsContainer>
        <Paging>
          <Indicator style={{backgroundColor: "#808080" }}/>
          <Indicator/>
          <div>
            <img src={pause}/>
          </div>
        </Paging>

      </ContentContainer>

      <div style={{position:'absolute', top: '50%', transform: 'translateY(-50%)', left: '3%'}}>
        <img src={prevBtn}/>
      </div>
      <div style={{position:'absolute', top: '50%', transform: 'translateY(-50%)', right: '3%'}}>
        <img src={nextBtn} />
      </div>
    </CarouselContainer>

    </>
  )
}

export default Tour;

