import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`
const LoginWrapper = styled.div`
  min-width: 35vw;
  min-height: 50vh;
  background-color: #f8fcff;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
`

const TextTitle = styled.h3`
  text-align: center;
  padding: 1rem 0;
  color: #AEB0AB;

`
const Form = styled.form`
  padding: 0 4rem;
`
const TextLabel = styled.label`
`
const TextInput = styled.input`
  width: 98%;
  height: 2rem;
  margin: 1rem 0;

`
const Button = styled.button`
  width: 100%;
  height: 3rem;
  background-color:#1B7565;
  border-color: #1B7565;
  margin-bottom: 1rem;

`
const LoginComponent = (): JSX.Element => {
  const history = useHistory()

  const [loginCredentials] = useState({
    email: "test@email.com",
    password: 'testpassword'
  })


  const handleLogin = (): void => {
    console.log('test')
    localStorage.setItem('isLoggedIn', "true")
    history.push('/shapes')
  }


  return (
    <LoginContainer>
      <LoginWrapper>
        <TextTitle>Shapes Login</TextTitle>
        <Form>
          <TextLabel htmlFor="email">Email:</TextLabel>
          <TextInput type='text' name="email" defaultValue={loginCredentials.email} required />
          <br />
          <TextLabel htmlFor="password">Password:</TextLabel>
          <TextInput type='password' name="password" defaultValue={loginCredentials.password} required />
          <Button type="button" onClick={handleLogin} >Login</Button>
        </Form>
      </LoginWrapper>
    </LoginContainer>
  )

}

export default LoginComponent;