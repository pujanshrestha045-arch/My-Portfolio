import React from 'react'

function Projects() {

  const projects= [{
      title: "title",
      description:
        "description",
      technologies: ["React"],
      liveUrl: "#",
      githubUrl: "#",
    },]

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
                  <a href="#" className='px-3 py-1 inline-flex items-center gap-2 font-semibold text-(--primary) hover:underline'>
                    Live Demo
                  </a>

                  <a href="#" className='px-3 py-1 inline-flex items-center gap-2 font-semibold text-(--primary) hover:underline'>
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
