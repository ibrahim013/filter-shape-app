import { render, screen } from "@testing-library/react";
import LoginComponent from "../component/LoginComponent";


describe("Login component", () => {

  it("should  render login component", () => {
    render(<LoginComponent />)
    const title = screen.getByText(/shapes/i)
    expect(title).toBeVisible()
  })

})