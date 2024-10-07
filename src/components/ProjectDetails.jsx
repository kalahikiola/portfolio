import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ProjectDetails = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        axios.get(`https://aaronbence.dev/portfolio-backend/wp-json/wp/v2/project/${id}`)
        .then(response => {
            setProject(response.data);
        })
        .catch(error => {
            console.error('Error fetching project details from WordPress', error);
        });
    }, [id]);

    if (!project) {
        return <p>Loading...</p>;
    }

    return (
        <div className="my-8">
            <h1 className="text-4xl font-bold">{project.title.rendered}</h1>
            <div dangerouslySetInnerHTML={{ __html: project.acf.description }} />
            <div dangerouslySetInnerHTML={{ __html: project.acf.tech_stack }} />
        </div>
    );
};

export default ProjectDetails;
