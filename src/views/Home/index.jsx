import React, { useState } from 'react';

import * as S from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActive, setFilterActive] = useState();

    return (
      <S.Container>
        <Header />
        <S.FilterArea>
          <button type='button' onClick={() => setFilterActive('all')}>
            <FilterCard title='All' actived={filterActive === 'all'}  />
          </button>
          <button type='button' onClick={() => setFilterActive('today')}>
            <FilterCard title='Today' actived={filterActive === 'today'} />
          </button>
          <button type='button' onClick={() => setFilterActive('week')}>
            <FilterCard title='Week' actived={ filterActive === 'week' } />
          </button> 
          <button type='button' onClick={() => setFilterActive('month')}>
            <FilterCard title='Month' actived={ filterActive === 'month' } />
          </button>
          <button type='button' onClick={() => setFilterActive('year')}>
            <FilterCard title='Year' actived={ filterActive === 'year'} />
          </button>
        </S.FilterArea>

        <S.Title>
          <h3>Appointments</h3>
        </S.Title>

        <S.Content>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </S.Content>
       
        <Footer/>
      </S.Container>
   
  );
}

export default Home;