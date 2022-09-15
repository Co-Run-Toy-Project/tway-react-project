import styled from "styled-components";

export const Content = styled.div`
    width : 520px;
    height : 300px;

    margin-right : 7px;

    /* background-color : red; */

    > img {
        height : 300px;
        margin-right : 10px;
    }

`

export const AdContent = ( {content} ) => {
    // console.log(content[0])

    return content.map((data) => {

        // console.log(data);

        return (
            <Content key={data.id}>
                <img src={data.src}></img>
            </Content>
        )
    })

    // return(
    //     <div>
    //         <img src={content[0].src}></img>
    //     </div>
    // )
}