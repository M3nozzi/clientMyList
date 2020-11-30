import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { login } from '../../services/auth';

import api from '../../services/api';

import * as S from './styles';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputError, setInputError] = useState('');
    
    const history = useHistory();

    async function handleSignin(e) {

        e.preventDefault();
       
        try {
            const response = await api.post('/task/login', { email, password });
            login(response.data.token);
    
            history.push('/task');
        } catch (err) {
            setInputError('e-mail or password not correct')
            console.log(err)
        }
    }
    return (
        <S.Form hasError={!!inputError} onSubmit={handleSignin}>
        <S.CardWrapper>
        <S.CardHeader>
          <S.CardHeading>Login</S.CardHeading>
        </S.CardHeader>

                    <S.CardBody>

                        <S.CardFieldset>
                        <div className="field">
                    <S.CardInput   
                        type="text"
                        name="email"
                        placeholder="e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} required
                    />
                                
                </div>
             </S.CardFieldset>
             
        
                        <S.CardFieldset>
                        <div className="field">
            <S.CardInput type="password" 
                        name="password"
                        value={password}  
                        placeholder="Password" 
                        onChange={(e) => setPassword(e.target.value)} required />
         
        </div>
         </S.CardFieldset>
        { inputError && <S.Error>{inputError}</S.Error>}
                    
                            
          <S.CardFieldset>
            <S.CardButton type='submit'>Login</S.CardButton>
          </S.CardFieldset>

          <S.CardFieldset>
            {/* <S.CardLink>Don't have an account? <Link to={'/signup'}>Sign up</Link></S.CardLink> */}
          </S.CardFieldset>
        </S.CardBody>
        </S.CardWrapper>
        </S.Form>
    )
};
export default Login;