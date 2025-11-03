/*
  Lesson 3 — 1) JSX: Putting Markup into JavaScript

  - A React component is just a JavaScript function that returns JSX.
  - JSX looks like HTML, but it’s JavaScript under the hood.
  - React renders the returned JSX to real DOM nodes in the browser.
*/
export default function Welcome() {
  // This is JSX returned from a component function
  // It will be rendered as an <h1> element in the DOM
  return <h1>Hello, React!</h1>;
}
