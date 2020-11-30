import React, {useEffect, useState } from 'react';
import * as S from './styles';
import { Link, useHistory } from 'react-router-dom';

import { logout } from '../../services/auth';
import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import logo from '../../assets/Logo1.png';
import bell from '../../assets/bell.png';

function Header({ clickNotification }) {
  const [lateCount, setLateCount] = useState();

  async function lateVerify() {
    await api.get(`/task/filter/late/${isConnected}`)
      // eslint-disable-next-line
      .then(response => {
        setLateCount(response.data.length)
    })
  }

  const history = useHistory();

  const handleLogout = () => {
    logout();
    history.push('/login');
  };

  useEffect(() => {
    lateVerify();
  }, [])

  async function LogOut() {
    localStorage.removeItem('@myListApp/macaddress');
    window.location.reload();
  }

  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="My List App Logo"/>
      </S.LeftSide>
      <S.RightSide>
        <Link to='/'>HOME</Link>
        <span className='divider'/>
        <Link to='/task'>NEW APPOINTMENT</Link>
        <span className='divider' />
        { !isConnected ? 
        <Link to='/qrcode'>SYNC</Link>
          :
        <button type='button'id='btnDesync' onClick={LogOut}>DESYNC</button>
        }
        {
          lateCount &&
          <>
            <span className='divider'/>
            <button onClick={clickNotification} id='notification'>
              <img src={bell} alt='Notification'/>
              <span>{lateCount}</span>
            </button>
          </>
        }
        <span className='divider'/>
        <button type='submit' id='btnLogout' onClick={handleLogout}>LOGOUT</button>
      </S.RightSide>
    </S.Container>
  );
}

export default Header;