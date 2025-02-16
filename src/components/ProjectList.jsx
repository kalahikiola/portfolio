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
        // PROJECTS SECTION
        <section id='projects' className='pt-10 mx-auto mt-[400px] flex flex-col gap-20 items-center content-center ease-in'>
            {projects.map(project => (
                <article key={project.id} className="project group relative overflow-hidden rounded-xl shadow-[0_0_22px_4px_rgba(0,0,0,0.75)]
                shadow-main-accent w-3/4 h-[580px] flex-shrink-0 items-center animate-scale-down hover:animate-scale-up">

                        {/* PROJECT SCREENSHOT */}
                        {project._embedded && project._embedded['wp:featuredmedia'] && (
                        <img
                            src={project._embedded['wp:featuredmedia'][0].source_url}
                            alt={project.title.rendered}
                            className="relative w-full rounded-xl mx-0 shadow-md origin-bottom-right group-hover:w-3/4 group-hover:bottom-0"
                        />
                        )}

                        {/* PROJECT INFORMATION */}
                        <div className='absolute top-0 bg-project-bg rounded-xl p-10 w-3/4 
                        mx-auto animate-slide-down group-hover:animate-slide-up'>
                            <h3 className="text-3xl text-center font-semibold mb-4">{project.title.rendered}</h3>
                            <div className="mb-4" dangerouslySetInnerHTML={{ __html: project.acf.description }} />
                            {/* {Array.isArray(project.acf.tech_stack) && (
                                <ul className="mb-4 flex flex-wrap justify-center gap-2">
                                {project.acf.tech_stack.map((tech, index) => (
                                    <li key={index} className="bg-main-accent text-main-white px-4 py-2 rounded-full text-sm font-semibold">
                                    {tech}
                                    </li>
                                ))}
                                </ul>
                            )} */}
                            <a href={project.acf.live_link} className="text-main-white hover:text-main-accent transition duration-300 px-4 py-2
                            border-2 border-white bg-main-accent hover:bg-main-white rounded-full inline-block mt-4">Live Site</a>
                        </div>
                </article>
            ))}
        </section>
            
    );
};

export default ProjectList;
