import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import  "@testing-library/jest-dom";

describe("all test cases of contact us page", () => {
  
   beforeAll(() => {
      console.log("Before All");
   });

   beforeEach(() => {
      console.log("Before Each Test Case")
   })

   AfterAll(() => {
      console.log("Before All");
   });

   AfterEach(() => {
      console.log("After Each")
   })

    test("Should load contact us page", () => {
        render(<Contact />) 

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
     });
     
     test("Should button is in contact us page", () => {
         render(<Contact />)
         
         const button = screen.getByText("Submit");
         
         expect(button).toBeInTheDocument();
      });
     
      test("Should get placeholder name in contact page", () => {
         render(<Contact />)
     
         const inputName = screen.getByPlaceholderText("name");
         expect(inputName).toBeInTheDocument();
      });
     // it is alias of test
      it("Should contact page have two input textboxes", () => {
         render(<Contact />)
     
         const inputBoxes = screen.getAllByRole("textbox");
   
         expect(inputBoxes.length).not.toBe(3)
      });
});

