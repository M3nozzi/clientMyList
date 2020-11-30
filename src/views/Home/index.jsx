import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import SyncLoader from 'react-spinners/SyncLoader';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {
  const [filterActived, setFilterActived] = useState('all');
  const [tasks, setTasks] = useState([]);

  // eslint-disable-next-line
  async function loadTasks() {
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
      // eslint-disable-next-line
      .then(response => {
        setTasks(response.data)
    })
  }



  function Notification() {
    setFilterActived('late');
  }

  useEffect(() => {
    loadTasks()
  }, [filterActived])


    return (
      <S.Container>
        <Header clickNotification={ Notification }/>
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
        
        { tasks ?
          <S.Content>
            {
              tasks.map(t => (
                <Link to={`/task/${t._id}`}>
                  <TaskCard key={t._id} type={t.type} title={t.title} when={t.when} done={t.done} />
                </Link>
              ))
            }
          </S.Content>
          : <S.Content>
            <SyncLoader size={15} margin={12} color={'#00a6a6'}/>
          </S.Content>  
        }
        <Footer/>
      </S.Container>
   
  );
}

export default Home;