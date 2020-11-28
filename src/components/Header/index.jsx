import React from 'react';
import * as S from './styles';

import logo from '../../assets/Logo1.png';
import bell from '../../assets/bell.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="My List App Logo"/>
      </S.LeftSide>
      <S.RightSide>
        <a href='#'>HOME</a>
        <span className='divider'/>
        <a href='#'>NEW APPOINTMENT</a>
        <span className='divider'/>
        <a href='#'>SYNC</a>
        <span className='divider'/>
        <a href='#' id='notification'>
          <img src={bell} alt='Notification'/>
          <span>5</span>
        </a>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;