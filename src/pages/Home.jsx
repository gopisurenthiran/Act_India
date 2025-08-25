
export default function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Welcome to My Portfolio</h2>
      <p className="text-gray-700 mb-4">Explore my work, skills, and experience.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p className="text-sm text-gray-600">A brief description of your first project.</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p className="text-sm text-gray-600">A brief description of your second project.</p>
        </div>
      </div>

      <h1 className="text-primary font-heading text-3xl">Welcome!</h1>

    <p className="text-secondary font-sans">
    This is a paragraph styled with Tailwind's custom theme.
    </p>

    <button className="bg-accent hover:bg-amber-600 text-white px-4 py-2 rounded">
    Click Me
    </button>

    </div>
  )
}