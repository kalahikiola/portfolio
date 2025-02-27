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
        <section id='projects' className='mx-auto mt-[400px] flex flex-col gap-20 items-center bg-main-black content-center ease-in'>
            {projects.map(project => (
                <article key={project.id} className="project group relative bg-main-black rounded-xl
                w-full h-dvh flex-shrink-0 items-center">

                        {/* PROJECT SCREENSHOT */}
                        {project._embedded && project._embedded['wp:featuredmedia'] && (
                        <img
                            src={project._embedded['wp:featuredmedia'][0].source_url}
                            alt={project.title.rendered}
                            className="relative w-1/2 h-1/2 object-cover z-30 left-0 rounded-xl m-[50px] mb-0 shadow-[0_0_30.4px_9px] shadow-main-shadow"
                        />
                        )}

                        {/* PROJECT INFORMATION */}
                        <div className='relative top-60% float-right z-20 bg-main-light rounded-xl p-10 w-1/2 h-1/2
                        m-[50px] -mt-[100px] shadow-[0_0_30.4px_9px] shadow-main-shadow'>
                            <h3 className="text-2xl font-semibold mb-6 ml-[20%] text-main-black">{project.title.rendered}</h3>
                            <div className='absolute left-5 bottom-5 w-[15%] h-[60%] m-0 rounded-xl bg-main-black'>
                                
                            </div>
                            <div className="mb-4 ml-[20%] text-sm text-main-black" dangerouslySetInnerHTML={{ __html: project.acf.description }} />
                            {/* {Array.isArray(project.acf.tech_stack) && (
                                <ul className="mb-4 flex flex-wrap justify-center gap-2">
                                {project.acf.tech_stack.map((tech, index) => (
                                    <li key={index} className="bg-main-accent text-main-white px-4 py-2 rounded-full text-sm font-semibold">
                                    {tech}
                                    </li>
                                ))}
                                </ul>
                            )} */}
                            {/* <a href={project.acf.live_link} className="text-main-light hover:text-main-accent transition duration-300 px-4 py-2
                            border-2 border-main-light bg-main-accent hover:bg-main-light rounded-full inline-block mt-4">Live Site</a> */}
                        </div>
                </article>
            ))}
        </section>
            
    );
};

export default ProjectList;
