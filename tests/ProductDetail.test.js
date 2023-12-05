import React from "react";
import { render } from "@testing-library/react-native";
import ProductDetail from "../src/screens/Products/ProductDetail";

describe("ProductDetail", () => {
  it("renders correctly", () => {
    const mockItem = {
      name: "Mock Product",
      description: "Mock Description",
      price: 19.99,
      quantity: 10,
      category: "Electronics",
    };
    const { getByText } = render(
      <ProductDetail route={{ params: { item: mockItem } }} />
    );

    expect(getByText("Product Detail")).toBeTruthy();
    expect(getByText(`Name: ${mockItem.name}`)).toBeTruthy();
    expect(getByText(`Description: ${mockItem.description}`)).toBeTruthy();
  });
});
