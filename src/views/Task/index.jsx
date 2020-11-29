import React, { useState, useEffect } from 'react';
import * as S from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';


function Task() {
    const [lateCount, setLateCount] = useState();
    const [type, setType] = useState();
    
  async function lateVerify() {
    await api.get(`/task/filter/late/11:11:11:11:11:11`)
      // eslint-disable-next-line
      .then(response => {
        setLateCount(response.data.length)
    })
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
                <input type='text' placeholder='Type your appointment title here!'></input>    
            </S.Input>
                
            <S.TextArea>
                <span>Description</span>
                    <textarea rows={5} placeholder='Type the Task Details!'/>    
            </S.TextArea>
                
            <S.Input>
                <span>Data</span>
                <input type='date'></input>    
            </S.Input> 

            <S.Input>
                <span>Hora</span>
                <input type='time'></input>    
            </S.Input>
            
            <S.Options>
                <div>
                    <input type='checkbox'/>        
                    <span>DONE</span>        
                </div>        
                <button type='button'>DELETE</button> 
            </S.Options>

            <S.Save>
                <button type='button'>SAVE</button>        
            </S.Save> 
                
        </S.Form>
        <Footer/>
      </S.Container>
   
  );
}

export default Task;