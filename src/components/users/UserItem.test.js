import React from "react";
import { Provider } from 'react-redux';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import store from '../../redux/store';

import UserItem from "./UserItem";

const userMock = {
  name: 'Tom Bla',
  gender: 'male',
  email: 'test@tom.com',
  phone: '+31 6 11 12 23 90',
  address: [
    {
      number: 7,
      street: 'johannes',
      city: 'Amsterdam',
      zipcode: '1234 AB'
    }
  ]
};

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('<UserItem />', () => {
  it("renders without user prop", () => {
    act(() => {
      render(
        <Provider store={store}>
          <UserItem  />
        </Provider>,
        container
      );
    });
    expect(container.textContent).toBe('');
  });

  it("renders with user prop", () => {
    act(() => {
      render(
        <table>
          <tbody>
            <Provider store={store}>
              <UserItem user={userMock} />
            </Provider>
          </tbody>
        </table>,
        container
      );
    });
    expect(container.textContent).toBe('Tom Blatest@tom.com+31 6 11 12 23 90malejohannesAmsterdam1234 AB7Delete');
  });
});
