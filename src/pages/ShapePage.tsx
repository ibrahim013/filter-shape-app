import { useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import ColorComponent from './../component/ColorComponent';
import HeaderComponent from './../component/HeaderComponent';
import ListItemComponent from './../component/ListItemComponent';
import ShapeComponent, { Title } from './../component/ShapeComponent';

const Container = styled.div`
  width: 70vw;
  margin: 0 auto;
  padding-top: 2rem;
`

const ShapesPage = (): JSX.Element => {
  const history = useHistory()

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    if (!isLoggedIn) {
      history.push('/')
    }
  })

  return (
    <>
      <HeaderComponent />
      <Container>
        <Title>Filters</Title>
        <ShapeComponent />
        <ColorComponent />
        <ListItemComponent />
      </Container>
    </>
  );
}
export default ShapesPage;