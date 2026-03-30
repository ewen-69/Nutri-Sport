import React from 'react';
import styled from 'styled-components';

const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
`;

const ProgressFill = styled.div`
  height: 100%;
  background-color: #76c7c0;
  width: ${(props) => props.width};
  transition: width 0.5s ease;
`;

const ProgressBar = ({ progress }) => {
  return (
    <ProgressBarContainer>
      <ProgressFill width={`${progress}%`} />
    </ProgressBarContainer>
  );
};

export default ProgressBar;