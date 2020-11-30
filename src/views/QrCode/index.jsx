import React, { useState, useEffect } from 'react';
import * as S from './styles';

import Qr from 'qrcode.react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


function QrCode() {
    return (
        <S.Container>
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
                    <input type='text' />
                    <button type='button'> SYNC</button>
                </S.ValidationCode>
            </S.Content>
        </S.Container>
    )
}
 
export default QrCode;