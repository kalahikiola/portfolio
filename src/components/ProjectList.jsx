import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const ProjectList = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('https://aaronbence.dev/portfolio-backend/wp-json/wp/v2/project?_embed')
        .then(response => {
            setProjects(response.data);
        })
        .catch(error => {
            console.error('Error fetching data from WordPress', error);
        });
    }, []);

    return (
        <section 
            id='projects' 
            className='
                mx-auto mt-32 flex flex-col gap-16 
                items-center bg-main-black content-center ease-in px-4
                md:mt-[25rem] md:gap-20 md:px-0
            '
        >
            {projects.map(project => (
                <article
                    key={project.id}
                    className="
                        project group relative bg-main-light rounded-2xl shadow-lg w-full max-w-3xl 
                        flex flex-col 
                        overflow-hidden 
                        transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl
                        border border-main-black
                        md:max-w-6xl md:rounded-xl md:h-dvh md:flex-shrink-0 md:items-center
                        md:overflow-visible md:grid md:grid-cols-2 md:gap-0
                    "
                >
                    {/* PROJECT SCREENSHOT */}
                    {project._embedded && project._embedded['wp:featuredmedia'] && (
                        <img
                            src={project._embedded['wp:featuredmedia'][0].source_url}
                            alt={project.title.rendered}
                            className="
                                w-full h-64 object-cover rounded-t-xl
                                md:relative md:w-full md:h-1/2 md:rounded-r-xl md:rounded-l-none
                            "
                        />
                    )}

                    {/* PROJECT INFORMATION */}
                    <div className="
                        flex flex-col justify-between p-6 w-full 
                        md:p-10 md:min-h-[320px]
                    ">
                        <h3 className="text-2xl font-bold mb-4 text-main-black">{project.title.rendered}</h3>
                        <div className="mb-4 text-base text-main-black" dangerouslySetInnerHTML={{ __html: project.acf.description }} />
                        {Array.isArray(project.acf.tech_stack) && (
                            <ul className="mb-4 flex flex-wrap gap-2">
                                {project.acf.tech_stack.map((tech, index) => (
                                    <li key={index} className="bg-main-accent text-main-white px-3 py-1 rounded-full text-xs font-medium">
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        )}
                        <a
                            href={project.acf.live_link}
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
