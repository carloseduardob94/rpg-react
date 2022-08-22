import styled from 'styled-components'

export const Container = styled.div` 
  background-image: url('/assets/bg.jpg');
  min-height: 100vh;
  color: #fff;
  overflow-y: auto;
  display: grid;
       
  > p{
    margin: auto;
    font-size: 23px;
    font-family: 'Berkshire Swash', cursive;
    border-bottom: 1px solid #CCC;
  }
`;

export const Header = styled.header`
  margin: auto;
  margin-bottom: 1px;
  font-size: 42px;
  font-family: 'Berkshire Swash', cursive;
  border-bottom: 2px solid #CCC;
`;

export const Map = styled.div`
  width: 480px;
  height: 480px;

  background-image: url('/assets/map.png');
  background-position: center;
  margin: auto;
  margin-top: 30px;
  background-size: 100%;

  position: relative;
`;
