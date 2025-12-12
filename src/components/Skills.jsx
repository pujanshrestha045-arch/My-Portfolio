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
        "npm/yarn",
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
            <section id='skills' className='py-20 px-4'>
                <div className="container mx-auto">
                    <h2>Skills & Expertise</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Frontend Development */}
                        <div className="rounded-lg p-8 border">
                            <h3>Frontend Development</h3>
                            <ul className='space-y-3'>
                                {frontendSkills.map((skill) => (
                                    <li key={skill} className='flex items-center gap-3'>
                                        <span className='w-2 h-2 rounded-full border' />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Tools & Technologies */}
                        <div className="rounded-lg p-8 border">
                            <h3>Tools & Technologies</h3>
                            <ul className='space-y-3'>
                                {toolsSkills.map((skill) => (
                                    <li key={skill} className='flex items-center gap-3'>
                                        <span className='w-2 h-2 rounded-full border' />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Soft Skills */}
                        <div className="rounded-lg p-8 border">
                            <h3>Soft Skills</h3>
                            <ul className='space-y-3'>
                                {softSkills.map((skill) => (
                                    <li key={skill} className='flex items-center gap-3'>
                                        <span className='w-2 h-2 rounded-full border' />
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
