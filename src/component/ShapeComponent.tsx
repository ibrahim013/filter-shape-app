import { useContext, useState } from "react";
import styled from 'styled-components';
import { FILTER_SHAPES } from './../types';
import { store } from "../store";
import { updateFilterState } from "../Utility";


const ShapeContainer = styled.div`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    margin: 0;
`

export const Title = styled.h4`
    font-size: 1rem;
    color: #349DBA
`

const ShapeTitle = styled.h4<{ isActive: boolean }>`
    font-size: 0.9rem;
    border: solid 1px #f8fcff;
    border-radius: 40%;
    padding: 1rem;
    color: #83CF65;
    background-color: ${props => props.isActive ? ' #349DBA' : "#f8fcff"};
    text-transform: capitalize;
    margin: 0.5rem 0;
    cursor: pointer;

    &:hover {
      background-color: #349DBA;
      color: #f8fcff;
    }
`

const ShapeComponent = (): JSX.Element => {
  const { state, dispatch } = useContext(store)
  const [inActiveState, setIsActiveState] = useState<string[]>([])

  const handleClick = (shape: string, index: string): void => {
    dispatch({ type: FILTER_SHAPES, data: shape })
    setIsActiveState(updateFilterState(inActiveState, index))
  }

  return (
    <>
      <Title>Shape</Title>
      <ShapeContainer>
        {state.shapes.map((pallet, index) => {
          return (
            <div key={index} onClick={() => handleClick(pallet.shape, index.toString())}>
              <ShapeTitle isActive={inActiveState.includes(index.toString())}>{pallet.shape}</ShapeTitle>
            </div>)
        })}
      </ShapeContainer>
    </>
  )
}

export default ShapeComponent;