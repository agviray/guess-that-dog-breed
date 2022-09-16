import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const StyledDropdown = styled.div`
  position: relative;
  background-color: lightgray;
`;

const StyledHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  .h2 {
    display: inline-block;
  }

  .toggler {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 30px;

    &:before {
      display: inline-block;
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: ${({ isToggled }) => (isToggled ? '-3.9px' : '-9.9px')};
      margin-left: -7px;
      width: 12px;
      height: 12px;
      border-style: solid solid none none;
      border-color: #333333;
      border-width: 2px;
      transform: ${({ isToggled }) =>
        isToggled ? 'rotate(-45deg)' : 'rotate(135deg)'};
      transition: all 0.2s ease;
    }
  }
`;

const StyledContentContainer = styled.div`
  max-height: 0px;
  overflow: hidden;
  transition: all 0.2s ease;

  & :first-child {
    padding-top: 1rem;
  }
`;

const Dropdown = ({ heading, children }) => {
  const [isToggled, setIsToggled] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const content = contentRef.current;
    const contentScrollHeight = content.scrollHeight;

    if (isToggled) {
      content.style.maxHeight = `${contentScrollHeight}px`;
    } else {
      content.style.maxHeight = '';
    }
  }, [isToggled]);

  return (
    <StyledDropdown>
      <StyledHeadingContainer isToggled={isToggled}>
        <h2>{heading}</h2>
        <span
          className="toggler"
          onClick={() => setIsToggled(!isToggled)}
        ></span>
      </StyledHeadingContainer>
      <StyledContentContainer ref={contentRef} isToggled={isToggled}>
        {children}
      </StyledContentContainer>
    </StyledDropdown>
  );
};

export default Dropdown;
