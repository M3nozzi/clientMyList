import React from 'react';
import * as S from './styles';
import { Link } from 'react-router-dom';

import logo from '../../assets/Logo1.png';
import bell from '../../assets/bell.png';

function Header({ lateCount, clickNotification }) {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="My List App Logo"/>
      </S.LeftSide>
      <S.RightSide>
        <Link to='/'>HOME</Link>
        <span className='divider'/>
        <Link to='/task'>NEW APPOINTMENT</Link>
        <span className='divider'/>
        <Link href='#'>SYNC</Link>
        <span className='divider'/>
        <button onClick={clickNotification} id='notification'>
          <img src={bell} alt='Notification'/>
          <span>{lateCount}</span>
        </button>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;