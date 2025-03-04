import { fireEvent, render } from "@testing-library/react"
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import "@testing-library/jest-dom"

global.fetch = jest.fn(() =>{
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("Should search res list for burger text input", () => {
    render(<Body />);
 
    const cardsBeforeSearch = screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(8);

    const searchBtn = screen.getByRole("button", {name: "Search" });
    const searchInput = screen.getByTestId("searchInput");
    fireEvent.change(searchInput, { target : { value: "burger" } });
    fireEvent.click(searchBtn)
    // expect(searchBtn).toBeInTheDocument();
    //screen should load 4 cards
    
    const cardsAfterSearch = screen.getAllByTestId("resCard");  // "restCard from original comp file"
    expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter top rated components", () => {
    render(<Body />);
 
    const cardsBeforeFilter = screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurants" });
    fireEvent.click(topRatedBtn);
    
    const cardsAfterFilter = screen.getAllByTestId("resCard");  // "restCard from original comp file"
    expect(cardsAfterFilter.length).toBe(4);
});

// it("Should render the body component with search button", async () => {

//     await act( async () =>  render(<Body />)); 
// });