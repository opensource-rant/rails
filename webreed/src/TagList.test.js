
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { TagList } from './TagList.js'

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

it('renders the tags', async () => {
  const fakeTags = [{ 'guid': 1, name: 'engineer' }] //, { 'guid': 2, 'name': 'manager'}];
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(fakeTags)
    })
  );

  // Use the asynchronous version of act to apply resolved promises
  await act(async () => {
    render(<TagList id="123" />, container);
  });
  expect(container.querySelector("li").textContent).toBe(fakeTags[0].name);
});
