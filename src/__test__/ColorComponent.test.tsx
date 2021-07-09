import { render, screen } from "@testing-library/react";
import ColorComponent from "../component/ColorComponent";

describe("Color component", () => {

  render(<ColorComponent />)

  it("should  render Color component", () => {
    const title = screen.getByText(/colors/i)
    expect(title).toBeVisible()
  })

})