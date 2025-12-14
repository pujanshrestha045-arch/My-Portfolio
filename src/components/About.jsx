import React from 'react'

function About() {
    return (
        <>
            <section id="about" className="py-20 px-4 bg-(--background)">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-(--foreground) mb-12 text-balance">About Me</h2>
                    <div className="space-y-6 text-lg text-(--muted-foreground)">
                        <p>I'm a frontend developer with a unique background transitioning from civil engineering. My journey began in construction and
                            structural design, where I developed strong problem-solving skills, attention to detail, and an appreciation
                            for clean design principles and values which I now apply to building exceptional web experiences.</p>

                        <p>My engineering background taught me to think systematically about projects: planning thoroughly, considering
                            edge cases, and building solutions that are both elegant and robust. These principles now guide my approach
                            to web development, where I focus on writing clean code, creating responsive interfaces, and ensuring
                            accessibility for all users.</p>

                        <p>I'm passionate about web development and particularly enjoy working with modern web technologies. I'm
                            committed to continuous learning and staying current with industry best practices. When I'm not coding,
                            you'll find me exploring new design patterns or diving into the
                            latest web development trends.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
