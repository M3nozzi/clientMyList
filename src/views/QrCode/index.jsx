import React, { useState, useEffect } from 'react';
import * as S from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


function QrCode() {
    return (
        <S.Container>
            <Header />
            <Footer />
            <S.Content>
                <h1>Use the QRCODE to Login</h1>
                <S.QrCodeArea>
                    
                </S.QrCodeArea>
                <p>Your activities will be sync with your smartphone</p>
            </S.Content>
        </S.Container>
    )
}
 
export default QrCode;