import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

// import NanumGothic from "../../assets/fonts/NanumGothic.woff";
import plusBtn from "../../assets/icon/ico_btn_more.png";
import leftBtn from "../../assets/icon/btn_goods_prev.png";
import rightBtn from "../../assets/icon/btn_goods_next.png";
import pause from "../../assets/icon/bg_pause2.png";
import play from "../../assets/icon/bg_play2.png";


// export const GlobalStyle = createGlobalStyle`
//     @font-face {
//         font-family : 'NanumGothic';
//         src : local('NanumGothic'),
//         url(${NanumGothic}) format('woff');
//         font-weight : 300;
//         font-style : normal;
//     }
// `

export const EventArea = styled.div`
    width : 100vw;
    height : 582px;

    display : flex;
    flex-direction : column;
    
    align-items : center;


    background-color : #FFFFFF;
    border : 1px solid gray;
`

export const Header = styled.div`
    width : 1050px;
    height : 70px;

    display : flex;
    flex-direction : row;
    justify-content : right;
    align-items : center;

    /* border : 1px solid black; */

    margin-top : 50px;

    > .plusBtn {
        margin-top : 5px;
        z-index : 1;

        &:hover {
            cursor: pointer;
        }
        
    }

    > .title {
        position : fixed;
        left : 10px;
        right : 10px;
        font-size : 30px;
        font-weight : bold;
    }
`


export const Carousel = styled.div`
    width : 100%;
    height : 400px;

    display : flex;
    flex-direction : column;

    justify-content : center;
    align-items : center;

    /* border : 1px solid red; */

    


    > .slide {
        height : 400px;
        width : 100%;
        

        margin-top : 40px;
        margin-bottom : 30px;

        display : flex;
        flex-direction : row;

        justify-content : center;
        align-items : center;

        /* background-color : #f3f3f3; */
        /* border : 1px solid blue; */

        > .leftBtn {
            margin-right : 20px;
            &:hover {
                cursor: pointer;
            }
        }

        > .rightBtn {
            margin-left : 20px;
            &:hover {
                cursor: pointer;
            }
        }

        > .display {
            width : 1050px;
            height : 100%;

            background-color : #f3f3f3;
        }
    }

    > .carousel-btn {
        height : 10%;
        width : 100%;

        display : flex;
        flex-direction : row;
        align-items : center;
        justify-content : center;
        
        /* border : 1px solid green; */
        > div {
            border-radius : 50px;
            background-color : #f3f3f3;
            width : 13px;
            height : 13px;

            margin-left : 10px;
            
            &:hover {
                cursor: pointer;
            }
        }


        > img {
            /* background-color : #f3f3f3; */
            width : 12px;
            height : 12px;

            margin-left : 10px;
            
            &:hover {
                cursor: pointer;
            }
        }
    }
`



export const Event = () => {

    return (
        <EventArea>
            <Header>
                <span className="title">이벤트</span>
                <img src={plusBtn} alt="plusBtn" className="plusBtn"></img>
            </Header>
            <Carousel>
                <div className="slide">
                    <img src={leftBtn} alt="leftBtn" className="leftBtn"></img>
                    <div className="display"></div>
                    <img src={rightBtn} alt="rightBtn" className="rightBtn"></img>
                </div>
                <div className="carousel-btn">
                    <div className="btn1"></div>
                    <div className="btn2"></div>
                    <div className="btn3"></div>
                    <div className="btn4"></div>
                    <div className="btn5"></div>
                    <img src={pause}></img>
                    <img src={play}></img>
                </div>
            </Carousel>

        </EventArea>
        
    )
}