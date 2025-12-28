import React from 'react'

function Projects() {

  const projects= [
    {
      title: "Cafe",
      description:
        "A responsive cafe website built using plain html, css and js",
      technologies: ["HTML", "CSS", "JS"],
      liveUrl: "https://pujanshrestha045-arch.github.io/Cafe-Site/",
      githubUrl: "https://github.com/pujanshrestha045-arch/Cafe-Site",
    },
    {
      title: "News Portal",
      description:
        "Homepage for a news portal built using html, css and js integrating tailwind",
      technologies: ["HTML", "CSS", "JS", "Tailwind"],
      liveUrl: "https://pujanshrestha045-arch.github.io/News-Portal/",
      githubUrl: "https://github.com/pujanshrestha045-arch/News-Portal",
    },
    {
      title: "Corporate",
      description:
        "A Corporate site built using React with tailwind and fetching a dummy API",
      technologies: ["HTML", "CSS", "React", "Tailwind"],
      liveUrl: "https://pujanshrestha045-arch.github.io/Corporate/",
      githubUrl: "https://github.com/pujanshrestha045-arch/Corporate",
    },
  ]

  return (
    <>
      <section id='projects' className='py-20 px-4 bg-(--background)'>
        <div className="container mx-auto">
          <h2 className='text-2xl md:text-4xl font-bold text-(--foreground) mb-12 text-balance'>Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-(--card) rounded-lg border border-(--border) hover:border-(--primary)">
                <h3 className='px-3 py-1 text-2xl font-bold text-(--foreground) mb-3'>{project.title}</h3>
                <p className='px-3 py-1 text-(--muted-foreground) mb-4'>{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6 px-3">
                  {project.technologies.map((tech) => (
                    <span key={tech} className='inline-block bg-(--primary)/10 text-(--primary) px-3 py-1 rounded-full text-sm font-medium'>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a href={project.liveUrl} target='_blank' className='px-3 py-3 inline-flex items-center gap-2 font-semibold text-(--primary) hover:underline'>
                    Live Demo
                  </a>

                  <a href={project.githubUrl} target='_blank' className='px-3 py-3 inline-flex items-center gap-2 font-semibold text-(--primary) hover:underline'>
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
