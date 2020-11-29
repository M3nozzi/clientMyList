import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';


function Task() {
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    const [id, setID] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');

    
    async function lateVerify() {
        await api.get(`/task/filter/late/11:11:11:11:11:11`)
        // eslint-disable-next-line
        .then(response => {
            setLateCount(response.data.length)
        })
    }
    
    async function save() {
        await api.post('/task', {
            macaddress,
            type,
            title,
            description,
            when: `${date}T${hour}:00.000`
            
        }).then( () =>
          alert('TASK SUCCESSFULLY REGISTERED')
        )
  }
    
  useEffect(() => {
    lateVerify();
  }, [])


    return (
      <S.Container>
        <Header lateCount={lateCount} />    
        <S.Form>
            <S.TypeIcons>
                {
                        TypeIcons.map((icon, index) => (
                            index > 0 &&
                            <button type='button' onClick={() => setType(index)}>
                                <img src={icon} alt='Icon Type Task'
                                className={type && type !== index && 'inative'}
                                />
                            </button>
                        ) )    
                }   
            </S.TypeIcons>
                
            <S.Input>
                <span>Title</span>
                <input type='text' placeholder='Type your appointment title here!'
                onChange={e => setTitle(e.target.value)} value={title}></input>    
            </S.Input>
                
            <S.TextArea>
                <span>Description</span>
                    <textarea rows={5} placeholder='Type the Task Details!'
                    onChange={e => setDescription(e.target.value)} value={description}
                    />    
            </S.TextArea>
                
            <S.Input>
                <span>Date</span>
                <input type='date' onChange={e => setDate(e.target.value)} value={date} />   
            </S.Input> 

            <S.Input>
                <span>Time</span>
                <input type='time' onChange={e => setHour(e.target.value)} value={hour}/>    
            </S.Input>
            
            <S.Options>
                <div>
                        <input type='checkbox' checked={done} onChange={() => setDone(!done)}/>        
                        <span>DONE</span>        
                </div>        
                <button type='button'>DELETE</button> 
            </S.Options>

            <S.Save>
                <button type='button' onClick={save}>SAVE</button>        
            </S.Save> 
                
        </S.Form>
        <Footer/>
      </S.Container>
   
  );
}

export default Task;