import { useMemo, useState } from "react";
import { useHistory } from 'react-router-dom'
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #f8fcff;
  padding: 0 2px;
  
`
const HeaderContent = styled.header`
  display: flex;
  width: 70vw;
  margin: 0 auto;
  justify-content: space-between;
  align-items: baseline;
`

const Title = styled.h2`
  color: #AEB0AB;
`
const SubTitle = styled.h5`
  color: orange;
  cursor: pointer;
`

const HeaderComponent = (): JSX.Element => {
  const history = useHistory()
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useMemo(() => {
    setIsLoggedIn(!!localStorage.getItem("isLoggedIn"))
  }, []);


  const handleLogout = (): void => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    history.push('/')
  }

  return (
    <HeaderContainer>
      <HeaderContent>
        <Title>SHAPES</Title>
        <SubTitle onClick={handleLogout}>{isLoggedIn ? "Logout" : "Login"}</SubTitle>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default HeaderComponent