import React, { useEffect, useState, useRef } from 'react';

const ProjectList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching project data:', error));
    }, []);

    if (data.length === 0) {
        return (
            <section id="projects" className="my-8 px-4 h-screen">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-8">Projects</h2>
                    <p>Loading...</p>
                </div>
            </section>
        );
    }

    return (
        <section 
            id='projects' 
            className='
                mx-auto mt-32 flex flex-col gap-16 
                items-center bg-main-black content-center ease-in px-4
                md:mt-[25rem] md:gap-[12.5vh] md:px-0 md:py-[12.5vh]
            '
        >
            {data.projects.map((project, index) => (
                <article
                    key={index}
                    className="
                        project group relative bg-main-light rounded-2xl shadow-lg w-full max-w-3xl 
                        flex flex-col 
                        overflow-hidden 
                        border border-main-black
                        md:max-w-6xl md:rounded-b-xl md:h-[75vh] md:flex-shrink-0 md:items-center
                        md:overflow-visible md:grid md:grid-rows-2 md:gap-0
                    "
                >
                    {/* PROJECT SCREENSHOT */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="
                                w-full h-64 object-cover object-[10%_15%] rounded-t-xl
                                md:relative md:h-full
                            "
                        />

                    {/* PROJECT INFORMATION */}
                    <div className="
                        flex flex-col justify-between p-6 w-full 
                        md:p-10 md:min-h-[320px]
                    ">
                        <h3 className="text-2xl font-bold mb-4 text-main-black">{project.title}</h3>
                        <div className="mb-4 text-base text-main-black" dangerouslySetInnerHTML={{ __html: project.description }} />
                        {Array.isArray(project.tech_stack) && (
                            <ul className="mb-4 flex flex-wrap gap-2">
                                {project.tech_stack.map((tech, index) => (
                                    <li key={index} className="bg-main-accent text-main-white px-3 py-1 rounded-full text-xs font-medium">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="self-start mt-2 px-5 py-2 rounded-full bg-main-accent text-main-light font-semibold border border-main-accent hover:bg-main-light hover:text-main-accent transition duration-300"
                        >
                            Live Site
                        </a>
                    </div>
                </article>
            ))}
        </section>
            
    );
};

export default ProjectList;
