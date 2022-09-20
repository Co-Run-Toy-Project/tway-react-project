import React from 'react';
import styled from 'styled-components';


//캐러셀 라이브러리
//웬만하면 그냥 코딩하자.........


// Images
import adImage1 from '../../assets/images/0cc6d99a-d43c-44a2-9407-372cb7835a42.png'
import adImage2 from '../../assets/images/3bd2a767-167e-447e-823e-fa053981f58c.png'


//icon
import prevIcon from '../../assets/icon/control_prev.png'
import nextIcon from '../../assets/icon/control_next.png'
import pauseIcon from '../../assets/icon/control_pause.png'


const Wrapper =styled.div`
    align-items: center;
    max-width: 100vw;
    /* background-color: beige; */

    .slide__image{

    }
`


const Images= styled.div`

margin-top: 3rem;
display: flex;
flex-direction: column;
align-items: center;
    justify-content: center;
overflow: hidden;


`
const CaeButton = styled.div`
    width: 10rem;

    /* background-color: blue; */
    display: flex;
    flex-direction: row;
    justify-content: space-between  ;

    position: absolute;
        top: 40%;
        left: 50%;
        transform: translate( -50%, -50% );


    .playAndPause{
        width: 4.5rem;
        height: 1rem;
        padding: 0.2rem;
        background-color: rgba(0, 0, 0, 0.25);
        display: flex;
        justify-content: space-evenly;
    }

    .addList{
        width: 4.5rem;
        background-color: blue;
    }
`




function MoveCae(){

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,  
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0px",
        // prevArrow: CaeButton,
		// nextArrow: $('#aro1_next')
      };
    
    
    return(
        <>
            <Wrapper>
                {/* <Slider {...settings}>
                    <div className='slide__image'>
                        <img src={process.env.PUBLIC_URL + 'images/0cc6d99a-d43c-44a2-9407-372cb7835a42.png'} ></img>
                    </div>
                    <div className='slide__image'>
                        <img src={process.env.PUBLIC_URL + 'images/0cc6d99a-d43c-44a2-9407-372cb7835a42.png'} ></img>
                    </div>
                    <div className='slide__image'>
                        <img src={process.env.PUBLIC_URL + 'images/0cc6d99a-d43c-44a2-9407-372cb7835a42.png'} ></img>
                    </div>
                    <div className='slide__image'>
                        <img src={process.env.PUBLIC_URL + 'images/0cc6d99a-d43c-44a2-9407-372cb7835a42.png'} ></img>
                    </div>
                    <div className='slide__image'>
                        <img src={process.env.PUBLIC_URL + 'images/0cc6d99a-d43c-44a2-9407-372cb7835a42.png'} ></img>
                    </div>
                </Slider> */}
            </Wrapper>
            <Images>
                <div className='slide__image'>
                        <img src={process.env.PUBLIC_URL + 'images/0cc6d99a-d43c-44a2-9407-372cb7835a42.png'} ></img>
                </div>
            </Images>
            <CaeButton>
                <div className='playAndPause'>
                    <img src={prevIcon} id="aro1_prev"></img>
                    <img src={pauseIcon}></img>
                    <img src={nextIcon} id = "aro1_next"></img>
                </div>
                <div className='addList'></div>
            </CaeButton>

            
        </>
    )
}

export default MoveCae;