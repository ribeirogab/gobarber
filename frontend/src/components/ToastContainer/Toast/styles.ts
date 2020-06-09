import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

interface ToastsProps {
  type?: 'success' | 'error';
  hasDescription: boolean;
}

export const Container = styled(animated.div)<ToastsProps>`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px #0002;
  display: flex;

  & + div {
    margin-top: 8px;
  }

  background: #ebf8ff;
  color: #3172b7;

  ${props =>
    props.type === 'success' &&
    css`
      background: #e6fffa;
      color: #2e656a;
    `}

  ${props =>
    props.type === 'error' &&
    css`
      background: #fdd3d3;
      color: #c53030;
    `}

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      margin-top: 4px;
      font-size: 14px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    right: 16px;
    top: 19px;
    opacity: 0.8;
    border: none;
    background: none;
    color: inherit;
  }

  ${props =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
