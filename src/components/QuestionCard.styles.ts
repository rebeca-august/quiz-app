import styled from 'styled-components'

export const QuestionCardWrapper = styled.div`
  max-width: 1100px;
  font-size: 2rem;
  background: rgba(236, 220, 206, 0.5);
  border-radius: 10px;
  border: 3px #019288 dotted;
  margin: 10px 0;
  padding: 20px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
  text-align: center;

  p {
    font-size: 2rem;
  }
`
type ButtonWrapperProps = {
  correct: boolean
  userClicked: boolean
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.5;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 70%;
    letter-spacing: 1px;
    overflow: none;
    color: black;
    width: 100%;
    height: 50px;
    margin: 5px, 0;
    background: ${({ correct, userClicked }) =>
      correct ? '#9AB795' : !correct && userClicked ? '#F3A789' : '#FBD69D'};
    border-radius: 10px;
    margin-bottom: 5px;
  }
`
