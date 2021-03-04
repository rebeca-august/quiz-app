import styled, { createGlobalStyle } from 'styled-components'

import BGImage from './images/quiz-app-background.jpg'

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}

body{
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0, 20px;
    display: flex;
    justify-content: center;
}

*{
    box-sizing: border-box;
    font-family: monospace;
}
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #fff;
  }

  .score {
    color: #019288;
    font-size: 3rem;
    font-weigh: bold;
    margin: 0;
  }

  h1 {
    font-size: 4rem;
    margin: 20px;
    text-align: center;
  }

  .loading {
    font-size: 2.5rem;
    color: black;
  }

  .start,
  .next {
    font-size: 1.5rem;
    margin: 10px 0px;
    padding: 10px;
    border: 1px white dotted;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    background-color: #019288;
    box-shadow: 0px 5px 10px rgba(0 0 0 0.25);
  }

  .start,
  .next:hover {
    transform: scale(0.9);
  }
`
