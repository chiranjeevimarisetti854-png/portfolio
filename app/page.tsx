{/* force redeploy */}

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 md:px-20 py-16">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold">
          Chiranjeevi Marisetti
        </h1>

        <p className="mt-4 text-xl text-gray-400">
          Full Stack Developer | Web3 Enthusiast
        </p>

        <p className="mt-6 text-gray-300 max-w-2xl">
          I build scalable web applications and experiment with Web3
          technologies to create impactful products.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#"
            className="px-6 py-3 bg-white text-black rounded-lg font-medium"
          >
            GitHub
          </a>
          <a
            href="#"
            className="px-6 py-3 border border-gray-600 rounded-lg"
          >
            Resume
          </a>
        </div>
      </section>
      <section className="max-w-4xl mx-auto mt-24">
  <h2 className="text-3xl font-semibold mb-8">Skills</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-300">
    <div>
      <h3 className="font-semibold text-white">Frontend</h3>
      <p>HTML, CSS, JavaScript, React, Next.js, Tailwind</p>
    </div>

    <div>
      <h3 className="font-semibold text-white">Backend</h3>
      <p>Node.js, Express</p>
    </div>

    <div>
      <h3 className="font-semibold text-white">Database</h3>
      <p>PostgreSQL, MongoDB</p>
    </div>

    <div>
      <h3 className="font-semibold text-white">Web3</h3>
      <p>Solidity, Ethers.js, Blockchain basics</p>
    </div>
  </div>
</section>

<section className="max-w-4xl mx-auto mt-24">
  <h2 className="text-3xl font-semibold mb-8">Projects</h2>

  <div className="space-y-6">
    <div className="border border-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-semibold">Flaggram</h3>
      <p className="text-gray-400 mt-2">
        A creator-focused social platform promoting authentic content using AI
        moderation and trust scores.
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Tech: React, Node.js, PostgreSQL
      </p>
      <div className="mt-4 flex gap-4">
        <a href="#" className="underline">GitHub</a>
        <a href="#" className="underline">Live</a>
      </div>
    </div>

    <div className="border border-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-semibold">Full Stack Web App</h3>
      <p className="text-gray-400 mt-2">
        A full-stack application with authentication and CRUD features.
      </p>
      <p className="text-sm text-gray-500 mt-2">
        Tech: Next.js, Node.js, PostgreSQL
      </p>
    </div>
  </div>
</section>

<section className="max-w-4xl mx-auto mt-24 mb-16">
  <h2 className="text-3xl font-semibold mb-6">Contact</h2>

  <p className="text-gray-400">
    Email: <span className="text-white">chiranjeevimarisetti854@gmail.com</span>
  </p>

  <div className="mt-4 flex gap-4">
    <a href="https://github.com/chiranjeevimarisetti854-png" className="underline">GitHub</a>
    <a href="#" className="underline">LinkedIn</a>
  </div>
</section>

    </main>
  );
}
