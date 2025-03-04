import { fireEvent, render } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../../redux/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

it("Should render the header components with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"});
    // const loginButton = screen.getByText("Login")
    expect(loginButton).toBeInTheDocument();
});

it("Should render the header components with login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const cartItem = screen.getByText(/Cart/);

    expect(cartItem).toBeInTheDocument();
});

it("Should changen login button to logout on clicki", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", {name: "Login"})

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", {name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
});