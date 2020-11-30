import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './styles';

import Qr from 'qrcode.react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


function QrCode() {
    const [mac, setMac] = useState();
    const [redirect, setRedirect] = useState(false);

    async function SaveMac() {

        if (!mac) {
            alert('You should inform the number from qrcode');
        }else {
            await localStorage.setItem('@myListApp/macaddress', mac);
        }
        setRedirect(true);

        window.location.reload();

    }
    return (
        <S.Container>
            { redirect && <Redirect to='/'/>}
            <Header />
            <Footer />
            <S.Content>
                <h1>Use the QRCODE to Login</h1>
                <p>Your activities will be sync with your smartphone</p>
                <S.QrCodeArea>
                    <Qr value='getmacaddress' size={350} />
                </S.QrCodeArea> 

                <S.ValidationCode>
                    <span>Type the number that you received in your smartphone!</span>
                    <input type='text' onChange={e => setMac(e.target.value)} value={mac}/>
                    <button type='button' onClick={SaveMac}>SYNC</button>
                </S.ValidationCode>
            </S.Content>
        </S.Container>
    )
}
 
export default QrCode;