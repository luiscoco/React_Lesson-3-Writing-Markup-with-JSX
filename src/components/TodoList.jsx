/*
  Lesson 3 — 2) Converting HTML to JSX & 3) The Rules of JSX

  Key rules when writing JSX:
  1) Return a single root element — use a wrapper <div> or a Fragment (<>...</>)
  2) Close all tags — e.g., <img /> must be self-closing
  3) Use camelCase for most attributes — e.g., className instead of class, strokeWidth instead of stroke-width
     (Exceptions: aria-* and data-* keep their dashes as in HTML.)
*/
export default function TodoList() {
  return (
    // Using a Fragment so we can return a single root without extra DOM
    <>
      <h2>Hedy Lamarr's Todos</h2>
      {/* Self-closing tag + camelCased attribute: className (not class) */}
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      {/* All list items explicitly opened and closed */}
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      {/* Note: aria-* and data-* attributes keep their dashes (e.g., aria-label, data-id) */}
    </>
  )
}
