# React 19.2 - Lesson 3 - JSX Playground

A minimal Vite + React 19 project to practice JSX concepts:
- Putting markup into JavaScript (JSX)
- Single root (using Fragments)
- Closing tags and self-closing elements
- camelCase attributes (e.g., `className`)
- Composing components

## Application features

- Demonstrates JSX rules with real components (single root, self-closing tags, camelCase props).
- Shows component composition with a simple `App` container.
- Includes styled examples (gallery, todo list) so you can see JSX output quickly.

<img width="1344" height="964" alt="image" src="https://github.com/user-attachments/assets/2cca272b-99e5-4f35-9dc1-d00f1f3a112a" />

### Key JSX examples

Single-root return with a Fragment:

```jsx
export default function TodoList() {
  return (
    <>
      <h2>Hedy Lamarr's Todos</h2>
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" className="photo" />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
    </>
  )
}
```

Component composition in `App`:

```jsx
export default function App() {
  return (
    <div className="container">
      <Welcome />
      <TodoList />
      <Gallery />
    </div>
  )
}
```

## How to run

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser.

## Build for production

```bash
npm run build
npm run preview
```

## File map (purpose)

- `index.html` Entry HTML with the `#root` mount node.
- `src/main.jsx` App bootstrap: creates the React root and renders `<App />`.
- `src/App.jsx` Page-level composition of the demo components.
- `src/components/Welcome.jsx` Small JSX example that returns a single `<h1>`.
- `src/components/TodoList.jsx` JSX rules demo: Fragment root, self-closing tags, camelCase props.
- `src/components/Gallery.jsx` Larger JSX example using `<figure>` and `<img />`.
- `src/styles.css` Styling for layout, typography, and images.
- `vite.config.js` Vite config with the React plugin.
- `package.json` Project metadata and scripts (`dev`, `build`, `preview`).
