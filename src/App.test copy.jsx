
//import { logRoles } from "@testing-library/react";
import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from 'vitest'
import App from "./App";

test("button click flow", () => {
    render(<App />);
  //const { container } = render(<App />);
  //logRoles(container);

  // find an element with a role of button and text matching /blue/i
  const buttonElement = screen.getByRole("button", {
    name: /blue/i,
  });

  // expect the class to be red
  expect(buttonElement).toHaveClass("red");

  // click button
  fireEvent.click(buttonElement);

  // expect the class to be blue
  expect(buttonElement).toHaveClass("blue");
  expect(buttonElement).toHaveStyle({"background-color":"rgb(0,0,255)"});

  // expect the button text to match /red/i
  expect(buttonElement).toHaveTextContent(/red/i);
});


test("checkbox flow", () => {
    // render app
    render(<App />);
  
    // find elements
    const buttonElement = screen.getByRole("button", {
      name: /blue/i,
    });
    const checkboxElement = screen.getByRole("checkbox", {
      name: /disable button/i,
    });
    expect(buttonElement).toBeEnabled();
    expect(checkboxElement).not.toBeChecked();

    // click in the checkbox
    fireEvent.click(checkboxElement);

    //expect checkbox to be checked
    expect(checkboxElement).toBeChecked();
    expect(buttonElement).toBeDisabled();
    expect(buttonElement).toHaveStyle({"background-color":"rgb(128,128,128)"});
    expect(buttonElement).toHaveClass("gray");


    // click in the checkbox
    fireEvent.click(checkboxElement);

    //expect checkbox NOT to be checked
    expect(checkboxElement).not.toBeChecked();
    expect(buttonElement).toBeEnabled();
    
  });