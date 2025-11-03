/*
  Lesson 3 — Reinforcing JSX rules in a larger example

  - Group related markup in a single root (the <section> here).
  - Use self-closing syntax for void elements like <img />.
  - Use camelCase for DOM properties/attributes like className.
*/
export default function Gallery() {
  return (
    <section>
      <h2>Inventors Gallery</h2>
      <figure>
        {/* Self-closing <img /> with camelCased className */}
        <img
          src="https://i.imgur.com/MK3eW3Am.jpg"
          alt="Katherine Johnson"
          className="photo"
        />
        <figcaption>Katherine Johnson</figcaption>
      </figure>
      <figure>
        <img
          src="https://i.imgur.com/yXOvdOSs.jpg"
          alt="Hedy Lamarr"
          className="photo"
        />
        <figcaption>Hedy Lamarr</figcaption>
      </figure>
    </section>
  )
}
