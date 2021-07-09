import * as actionTypes from './types';

export interface IFilterShapes {
    type: actionTypes.FILTER_SHAPE,
    data: string
}

export interface IFilterColor {
    type: actionTypes.FILTER_COLOR,
    data: string
}

export const filterShape = (data: string): IFilterShapes => ({
    type: actionTypes.FILTER_SHAPES,
    data
})

export const filterColor = (data: string): IFilterShapes => ({
    type: actionTypes.FILTER_SHAPES,
    data
})
export type ShapeAction = IFilterShapes | IFilterColor