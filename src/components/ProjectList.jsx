import React, { useEffect, useState, useRef } from 'react';
import { motion, useTransform, useScroll } from "framer-motion";
import axios from 'axios';
import { Link } from 'react-router-dom';

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

    const HorizontalScrollCarousel = () => {
        const targetRef = useRef(null);
        const { scrollYProgress } = useScroll({
          target: targetRef,
        });
      
        const x = useTransform(scrollYProgress, [0, 1], ["12.5%", "-140%"]);
      
        return (
          <section ref={targetRef} id='projects' className="relative h-[300vh] bg-gray-100">
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
              <motion.div style={{ x }} className="flex gap-4">
                {projects.map(project => (
                    <article key={project.id} className="project p-6 border border-gray-300 rounded-xl shadow-lg bg-white w-3/4 flex-shrink-0 items-center">
                        <div className="w-3/4 items-center content-center mx-auto">
                            <h3 className="text-3xl text-center font-semibold mb-4 text-gray-900">{project.title.rendered}</h3>
                            {project._embedded && project._embedded['wp:featuredmedia'] && (
                            <img
                                src={project._embedded['wp:featuredmedia'][0].source_url}
                                alt={project.title.rendered}
                                className="w-3/4 h-2/4 object-cover rounded-lg mb-4 mx-auto shadow-md "
                            />
                            )}
                            <div className="mb-4 text-gray-700" dangerouslySetInnerHTML={{ __html: project.acf.description }} />
                            {Array.isArray(project.acf.tech_stack) && (
                              <ul className="mb-4 flex flex-wrap justify-center gap-2">
                                {project.acf.tech_stack.map((tech, index) => (
                                  <li key={index} className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                                    {tech}
                                  </li>
                                ))}
                              </ul>
                            )}
                            <a href="" className="link-current hover:text-blue-500 transition duration-300 px-4 py-2 border-2 border-blue-600 rounded-full inline-block mt-4">Live Site</a>
                        </div>
                    </article>
                ))}
              </motion.div>
            </div>
          </section>
        );
    };

    return (
        <HorizontalScrollCarousel />
    );
};

export default ProjectList;
