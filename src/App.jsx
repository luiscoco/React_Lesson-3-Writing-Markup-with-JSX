// App composes smaller components. Each component returns JSX.
// JSX requires one root element per return, so we wrap with a container div.
import Welcome from './components/Welcome.jsx'
import TodoList from './components/TodoList.jsx'
import Gallery from './components/Gallery.jsx'

export default function App() {
  return (
    // Single root element to satisfy JSX’s one-root rule
    <div className="container">
      <Welcome />
      <TodoList />
      <Gallery />

      <p className="hint">
        {/* Pro tip: If you have raw HTML, convert it to JSX */}
        You can convert HTML to JSX using{' '}
        <a href="https://transform.tools/html-to-jsx" target="_blank" rel="noreferrer">
          transform.tools/html-to-jsx
        </a>
      </p>
    </div>
  )
}
