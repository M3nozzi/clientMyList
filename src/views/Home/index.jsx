import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);
  const [lateCount, setLateCount] = useState();

  // eslint-disable-next-line
  async function loadTasks() {
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      // eslint-disable-next-line
      .then(response => {
        setTasks(response.data)
    })
  }

  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
      // eslint-disable-next-line
      .then(response => {
        setLateCount(response.data.length)
    })
  }

  function Notification() {
    setFilterActived('late');
  }

  useEffect(() => {
    loadTasks();
    lateVerify();
  }, [filterActived, loadTasks])


    return (
      <S.Container>
        <Header lateCount={lateCount} clickNotification={ Notification }/>
        <S.FilterArea>
          <button type='button' onClick={() => setFilterActived('all')}>
            <FilterCard title='All' actived={filterActived === 'all'}  />
          </button>
          <button type='button' onClick={() => setFilterActived('today')}>
            <FilterCard title='Today' actived={filterActived === 'today'} />
          </button>
          <button type='button' onClick={() => setFilterActived('week')}>
            <FilterCard title='Week' actived={ filterActived === 'week' } />
          </button> 
          <button type='button' onClick={() => setFilterActived('month')}>
            <FilterCard title='Month' actived={ filterActived === 'month' } />
          </button>
          <button type='button' onClick={() => setFilterActived('year')}>
            <FilterCard title='Year' actived={ filterActived === 'year'} />
          </button>
        </S.FilterArea>

        <S.Title>
          <h3>{ filterActived === 'late' ? 'LATE APPOINTMENTS' : 'APPOINTMENTS'}</h3>
        </S.Title>

        <S.Content>
          {
            tasks.map(t => (
              <TaskCard key={t._id} type={t.type} title={t.title} when={t.when} done={t.done} />
            ))
          }
        </S.Content>
       
        <Footer/>
      </S.Container>
   
  );
}

export default Home;