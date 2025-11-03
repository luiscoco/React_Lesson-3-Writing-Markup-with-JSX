import Welcome from './components/Welcome.jsx'
import TodoList from './components/TodoList.jsx'
import Gallery from './components/Gallery.jsx'

export default function App() {
  return (
    <div className="container">
      <Welcome />
      <TodoList />
      <Gallery />

      <p className="hint">
        You can convert HTML to JSX using{' '}
        <a href="https://transform.tools/html-to-jsx" target="_blank" rel="noreferrer">
          transform.tools/html-to-jsx
        </a>
      </p>
    </div>
  )
}
