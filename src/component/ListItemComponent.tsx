import { useContext, useEffect, useState } from "react";
import styled from 'styled-components';
import { filterData, setGridTitle } from '../Utility';
import { store } from "../store";


export type ItemProps = {
  items: {
    shape: string,
    color: string[]
  }[]
}

const shapeFormation: any = {
  oval: {
    "height": "100px",
    " width": "70px",
    "border-radius": "50%",
  },
  rectangle: {
    "width": "200px",
    "height": "100px",
  },
  round: {
    "width": "100px",
    "height": "100px",
    "border-radius": "50%"
  },
  square: {
    "width": "100px",
    "height": "100px",
  },
  triangle: {
    "width": " 0",
    "height": "0",
    "border-left": "50px solid transparent",
    "border-right": "50px solid transparent",
  }
}


const GridCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:  #f8fcff;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  min-width: 200px;
  min-height: 200px;
`

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`

const GridTitle = styled.h4`
  font-size: 1rem;
  color: #349DBA;
  text-transform: capitalize;
`

//generate shape by its color
const Shape = styled.div<{ shape: string, color: string }>(props => ({
  ...shapeFormation[props.shape],
  background: props.shape !== 'triangle' ? props.color : "none",
  "border-bottom": props.shape === 'triangle' ? `100px solid ${props.color}` : "none"
}));


const ListItemComponent = (): JSX.Element => {
  const { state } = useContext(store);
  const [filterState, setFilterState] = useState([]);

  useEffect(() => {
    if (state.filter?.color.length || state.filter?.shape.length) {
      setFilterState(filterData(state.shapes, state.filter))
    }

  }, [state.filter, state.shapes])

  const displayData = filterState.length ? filterState : state.shapes;

  return (
    <>
      <GridTitle>{setGridTitle(state.shapes, state.filter)}</GridTitle>
      <GridContainer>
        {displayData.map((item, index) => {
          return item.color.map((color) => {
            return (<div key={`${index}${color}`}>
              <GridCard>
                <Shape shape={item.shape} color={color} role="shape"/>
              </GridCard>
            </div>)
          })
        })}
      </GridContainer>
    </>
  )
}

export default ListItemComponent