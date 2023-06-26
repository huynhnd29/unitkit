import React from 'react';
import styled from 'styled-components';
import DropdownSelect from './DropdownSelect';

// Styled Component cho phần header
const HeaderContainer = styled.header`
  background-color: #fff;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  margin-bottom: 20px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  .container {
    max-width: 1140px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    min-height: 43px;
    color: #88888888;
    font-size: 0.8571rem;
  }
`;

const Header = () => {
  const options = [
    { value: 'Headers', label: 'Headers' },
    { value: 'Features', label: 'Features' },
    { value: 'Blogs', label: 'Blogs' },
    { value: 'Teams', label: 'Teams' },
  ];

  return (
    <HeaderContainer>
      <div className='container'>
        <div>NOW UI KIT PRO REACT</div>
        <DropdownSelect options={options} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
