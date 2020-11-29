import styled from 'styled-components';

export const Container = styled.div`
    width: 290px;
    height: 90px;
    background: ${props => props.actived ? '#EE6B26' : '#20295F'};
    /* background:#00a6a6; */
    padding: 10px;
    cursor: pointer;

    border-radius: 5px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    img{
        width: 25px;
        height:25px;
    }

    span{
        color:#FFF;
        font-weight: bold;
        font-size: 18px;
        align-self: flex-end;
    }

    &:hover{
        background:#EE6B26;
    }

`;