import React from "react";
import { createRoot } from "react-dom/client";
import { act } from "react-dom/test-utils";
import App from "./App";

// Tell React this is a test environment so act() works without warnings.
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// Fake timers stop the hero typing animation from keeping Jest alive.
beforeEach(() => jest.useFakeTimers());
afterEach(() => jest.useRealTimers());

// Smoke test: the whole page renders with every enabled section.
it("renders all sections", () => {
  const container = document.createElement("div");
  document.body.appendChild(container);
  const root = createRoot(container);

  act(() => {
    root.render(<App />);
  });

  for (const id of [
    "home",
    "about",
    "services",
    "summary",
    "portfolio",
    "contact-us",
  ]) {
    expect(container.querySelector(`#${id}`)).not.toBeNull();
  }
  expect(container.textContent).toContain("Muzamil Hussain");

  act(() => root.unmount());
  container.remove();
});
