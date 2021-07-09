import { useContext, useState } from "react";
import styled from 'styled-components';
import { FILTER_COLORS } from './../types';
import { updateFilterState } from "../Utility";
import { store } from "../store";


const ColorContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 2rem 0;
`

const ColorGrid = styled.div<{ color: string, isActive: boolean }>`
  display: inline-flex;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${props => props.color};
  border: solid 4px;
  border-color: ${props => props.isActive ? ' #349DBA' : "#f8fcff;"};
  cursor: pointer;
  &:hover {
    border-color: #349DBA;
  }
`
const Title = styled.h4`
  font-size: 1rem;
  color: #349DBA
`

const ColorComponent = (): JSX.Element => {
  const { state, dispatch } = useContext(store)
  const [inActiveState, setIsActiveState] = useState<string[]>([])

  const handleClick = (color: string, index: string): void => {
    dispatch({ type: FILTER_COLORS, data: color })
    setIsActiveState(updateFilterState(inActiveState, index))
  }

  const colorSelector = state.shapes.map((shapes) => shapes.color)
    .reduce((uniqueColors, color) => (Array.from(new Set([...uniqueColors, ...color]))), [])

  return (
    <>
      <Title>
        Colors
      </Title>
      <ColorContainer data-testid="color-pallet">
        {colorSelector.map((color, index) => {
          return (<div key={index} onClick={() => handleClick(color, index.toString())}>
            <ColorGrid color={color} isActive={inActiveState.includes(index.toString())} /></div>)
        })}
      </ColorContainer>
    </>
  )
}

export default ColorComponent;