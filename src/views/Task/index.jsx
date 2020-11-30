import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import * as S from './styles';
import { format } from 'date-fns';

import api from '../../services/api';
import isConnected from '../../utils/isConnected';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TypeIcons from '../../utils/typeIcons';


function Task({ match }) {
    const [redirect, setRedirect] = useState(false);
    const [type, setType] = useState();
    const [id, setID] = useState();
    const [done, setDone] = useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [date, setDate] = useState();
    const [hour, setHour] = useState();
    //const [macaddress, setMacaddress] = useState('11:11:11:11:11:11');

    
    async function LoadTaskDetails() {
        await api.get(`/task/${match.params.id}`)
            .then(response => {
                setType(response.data.type)
                setDone(response.data.done)
                setTitle(response.data.title)
                setDescription(response.data.description)
                setDate(format(new Date(response.data.when), 'yyyy-MM-dd'))
                setHour(format(new Date (response.data.when), 'HH:mm'))
            })
        }
    async function save() {

        if (!title)
            return alert('Please, insert a title to this appointment')
        else if (!description)
            return alert('Please, insert a description to this appointment')
        else if (!type)
            return alert('Please, choose a icon to define a type to this appointment')
        else if (!date)
            return alert('Please, choose the date of this appointment')
        else if (!hour)
            return alert('Please, choose the hour of this appointment')
        
        if (match.params.id) {

            await api.put(`/task/${match.params.id}`, {
                macaddress: isConnected,
                done,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            
            }).then(() =>
                setRedirect(true)
            )
            
        } else {

            await api.post('/task', {
                macaddress: isConnected,
                type,
                title,
                description,
                when: `${date}T${hour}:00.000`
            
            }).then(() =>
                setRedirect(true)
            )
        }      
    }
    
    async function Remove() {
        const answer = window.confirm('Are you sure you want to delete?')   
        if (answer === true) {
            await api.delete(`/task/${match.params.id}`)
                .then(() => setRedirect(true));
        } 
    
    }

    useEffect(() => {
        if (!isConnected)
        setRedirect(true)
        
      LoadTaskDetails();
  }, [])


    return (
      <S.Container>
         {redirect && <Redirect to='/' />}
        <Header />    
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
            {match.params.id && 
                <div>   
                    <input type='checkbox' checked={done} onChange={() => setDone(!done)}/>        
                    <span>DONE</span>
                  
                </div>
              }    
                    { match.params.id && <button type='button' onClick={Remove}>DELETE</button>} 
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