import React from 'react';
import * as S from './styles';

import iconDefault from '../../assets/default.png';

function TaskCard() {
    return (
        <S.Container>
            <S.TopCard>
                <img src={iconDefault} alt='Icon Task Default' />
                <h3>Task Name</h3>
            </S.TopCard>
            <S.BottomCard>
                <strong>28/11/2020</strong>
                <span>10:00</span>
            </S.BottomCard>
        </S.Container>

    );
}

export default TaskCard;