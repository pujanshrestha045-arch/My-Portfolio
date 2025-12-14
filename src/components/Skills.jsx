import React from 'react'

function Skills() {
    const frontendSkills = [
        "HTML5",
        "CSS3 (Flexbox, Grid)",
        "JavaScript (ES6+)",
        "React",
        "Tailwind CSS",
        "Responsive Design",
    ]

    const toolsSkills = [
        "Git & GitHub",
        "VS Code",
        "Figma",
        "Chrome DevTools",
        "npm",
        "Debugging",
        "Cross-browser Testing",
    ]

    const softSkills = [
        "Problem Solving",
        "Attention to Detail",
        "Project Management",
        "Critical Thinking",
        "Communication",
        "Collaboration",
        "Adaptability",
    ]

    return (
        <>
            <section id='skills' className='py-20 px-4 bg-(--muted)/10'>
                <div className="container mx-auto">
                    <h2 className='text-2xl md:text-4xl font-bold text-(--foreground) mb-12 text-balance'>Skills & Expertise</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Frontend Development */}
                        <div className="bg-(--card) rounded-lg p-8 border border-(--border)">
                            <h3 className='text-xl md:text-2xl font-bold text-(--foreground) mb-6'>Frontend Development</h3>
                            <ul className='space-y-3'>
                                {frontendSkills.map((skill) => (
                                    <li key={skill} className='flex items-center gap-3 text-(--muted-foreground)'>
                                        <span className='w-2 h-2 rounded-full bg-(--primary)' />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tools & Technologies */}
                        <div className="bg-(--card) rounded-lg p-8 border border-(--border)">
                            <h3 className='text-xl md:text-2xl font-bold text-(--foreground) mb-6'>Tools & Technologies</h3>
                            <ul className='space-y-3'>
                                {toolsSkills.map((skill) => (
                                    <li key={skill} className='flex items-center gap-3 text-(--muted-foreground)'>
                                        <span className='w-2 h-2 rounded-full bg-(--primary)' />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Soft Skills */}
                        <div className="bg-(--card) rounded-lg p-8 border border-(--border)">
                            <h3 className='text-xl md:text-2xl font-bold text-(--foreground) mb-6'>Soft Skills</h3>
                            <ul className='space-y-3'>
                                {softSkills.map((skill) => (
                                    <li key={skill} className='flex items-center gap-3 text-(--muted-foreground)'>
                                        <span className='w-2 h-2 rounded-full bg-(--primary)' />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
