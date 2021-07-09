import { render, screen } from "@testing-library/react";
import HeaderComponent from "../component/HeaderComponent";


describe("Header component", () => {

  it("should  render header component", () => {
    render(<HeaderComponent />)
    const title = screen.getByText(/shapes/i)
    expect(title).toBeVisible()
  })

  it("should show login", () => {
    jest.spyOn(localStorage, 'getItem');
    render(<HeaderComponent />)

    const login = screen.getByText(/login/i);

    expect(login).toBeVisible();

    expect(localStorage.getItem('isLoggedIn')).toBe(null);

  })
})