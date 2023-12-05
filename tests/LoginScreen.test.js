// __tests__/LoginScreen.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import LoginScreen from "../src/screens/Auth/LoginScreen";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
}));

describe("LoginScreen", () => {
  it("renders correctly", () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen />);
    expect(getByText("Login")).toBeTruthy();
    expect(getByPlaceholderText("Username")).toBeTruthy();
    expect(getByPlaceholderText("Password")).toBeTruthy();
  });
});
