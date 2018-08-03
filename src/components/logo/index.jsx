import React from 'react';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
  from {
    letter-spacing: -.5em;
    transform: translate(0, -12%) rotate(-105deg) scale(.5);
  }

  to {
    letter-spacing: -.1em;
    transform: translate(0, -12%) rotate(-5deg) scale(1);
  }
`;


const H1 = styled.h1`
  margin: 0;
  font-size: 30vw;
  letter-spacing: -0.1em;
  color: #30499b;
  transform: translate(0, -12%) rotate(-5deg);
  text-shadow: 1px 1px 0 #ee4035, 2px 2px 0 #ee4035, 3px 3px 0 #ee4035,
    4px 4px 0 #ee4035, 5px 5px 0 #ee4035, 6px 6px 0 #ee4035, 7px 7px 0 #ee4035,
    8px 8px 0 #ee4035, 9px 9px 0 #ee4035, 10px 10px 0 #ee4035,
    11px 11px 0 #f3a530, 12px 12px 0 #f3a530, 13px 13px 0 #f3a530,
    14px 14px 0 #f3a530, 15px 15px 0 #f3a530, 16px 16px 0 #f3a530,
    17px 17px 0 #f3a530, 18px 18px 0 #f3a530, 19px 19px 0 #f3a530;
  animation: ${slideIn} 600ms linear;
`;

const Wrap = ({text}) => {
  const letters = text.split("");
  return (
    letters.map((letter, index) => <span key={`${letter}-${index}`}>{letter}</span>)
  )
}

const Logo = ({text}) => {
  return (
    <H1 text={text}>
      <Wrap text={text} />
    </H1>
  );
};

export default Logo;