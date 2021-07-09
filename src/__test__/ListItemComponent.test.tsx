import { render, screen } from "@testing-library/react";
import ListItemComponent from '../component/ListItemComponent'
import { store } from "../store";


describe("List items component", () => {
  it("should  render header component", () => {
    render(<ListItemComponent />)
    const title = screen.getByText(/all/i)
    expect(title).toBeVisible()
  })

  it("should  render correct number of shapes", () => {

    render(<store.Provider value={{
      state: {
        shapes: [{
          "shape": "oval",
          "color": [
            "red",
            "blue",
            "green",
            "yellow",
            "gray"
          ]
        }],
        loading: false,
        filter: {
          shape: [],
          color: []
        }
      }, dispatch: jest.fn
    }}><ListItemComponent /></store.Provider>)
    const gridTitle = screen.getByText(/All items/i);
    const shapes = screen.getAllByRole('shape');
    expect(gridTitle).toBeInTheDocument();
    expect(shapes).toHaveLength(5)
  })

  it("should  render correct number of shapes when filtered by colored", () => {

    render(<store.Provider value={{
      state: {
        shapes: [{
          "shape": "oval",
          "color": [
            "red",
            "blue",
            "green",
            "yellow",
            "gray"
          ]
        }],
        loading: false,
        filter: {
          shape: [],
          color: ['red', 'blue']
        }
      }, dispatch: jest.fn
    }}><ListItemComponent /></store.Provider>)
    const gridTitle = screen.getByText(/multiple/i);
    const shapes = screen.getAllByRole('shape');
    expect(gridTitle).toBeInTheDocument();
    expect(shapes).toHaveLength(2)
  })
  it("should  render correct number of shapes when filtered by shape", () => {

    render(<store.Provider value={{
      state: {
        shapes: [{
          "shape": "oval",
          "color": [
            "red",
            "blue",
            "green",
            "yellow",
            "gray"
          ]
        }, {
          "shape": "rectangle",
          "color": [
            "red",
            "blue",
            "green",
            "yellow",
            "gray"
          ]
        },],
        loading: false,
        filter: {
          shape: ["rectangle"],
          color: []
        }
      }, dispatch: jest.fn
    }}><ListItemComponent /></store.Provider>)
    const gridTitle = screen.getByText(/all rectangle/i);
    const shapes = screen.getAllByRole('shape');
    expect(gridTitle).toBeInTheDocument();
    expect(shapes).toHaveLength(5)
  })
})

