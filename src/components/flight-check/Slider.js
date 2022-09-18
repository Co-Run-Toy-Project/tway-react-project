import React from "react"
import styled from 'styled-components';
import Slider from 'react-slick'

//캐러셀 라이브러리
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Container = styled.div`
  overflow:hidden;
`;

const StyledSlider = styled(Slider)`
    .slick-slide div{
      outline: none;
    }
`;

const ImageContainer = styled.div`
  margin: 0 16px;
`;

const Image = styled.img`
max-width:100%;
max-height:100%;
`;

const imgUrl = require('../../assets/images/0cc6d99a-d43c-44a2-9407-372cb7835a42.png');

const items = [
  { id: 1, url: imgUrl },
  { id: 2, url: imgUrl },
  { id: 3, url: imgUrl },
  // { id: 4, url: imgUrl },
  // { id: 5, url: imgUrl },
  // { id: 6, url: imgUrl },
  // { id: 7, url: imgUrl },
  // { id: 8, url: imgUrl },
  // { id: 9, url: imgUrl },
  // { id: 10, url: imgUrl },
];


function SimpleSlider(){

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      centerMode: true,
    };

    return (
      <Container>
        <h2> Single Item</h2>
        <StyledSlider {...settings}
        >
          {items.map(item => {
            return (
              <div key={item.id}>
                <ImageContainer>
                  <Image src={item.url} />
                </ImageContainer>
              </div>
            );
          })}
        </StyledSlider>
      </Container>
    );
  }

export default SimpleSlider