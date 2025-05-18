const projects = [
  { title: 'Project One', description: 'Description for project one.' },
  { title: 'Project Two', description: 'Description for project two.' },
]

export default function Projects() {
  return (
    <section>
      <h2 className="text-2xl font-semibold">Projects</h2>
      <ul className="mt-4 space-y-4">
        {projects.map((proj, i) => (
          <li key={i} className="p-4 border rounded-xl shadow-sm">
            <h3 className="font-semibold">{proj.title}</h3>
            <p>{proj.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
