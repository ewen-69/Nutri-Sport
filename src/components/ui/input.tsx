import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  margin: 10px 0;
  
  & input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    transition: border-color 0.3s;

    &:focus {
      border-color: #66afe9;
      outline: none;
    }
  }
`;

const Input = ({ ...props }) => {
  return (
    <InputWrapper>
      <input {...props} />
    </InputWrapper>
  );
};

export default Input;
