import React, { useEffect, useState } from 'react';

const API_URL = 'https://aaronbence.dev/portfolio-backend/wp-json/wp/v2/pages?slug=about';

const About = () => {
    const [fields, setFields] = useState(null);

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                if (data && data.length > 0) {
                    // If using ACF, custom fields are usually under 'acf'
                    setFields(data[0].acf);
                }
            })
            .catch(err => console.error('Error fetching About data:', err));
    }, []);

    if (!fields) {
        return (
            <section id="about" className="my-8 px-4 h-screen">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-8">About Me</h2>
                    <p>Loading...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="about" className="my-8 px-4 h-screen">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-semibold mb-8">About Me</h2>
                <p className="text-lg mb-10 text-left">{fields.introduction}</p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <div className="about-tile p-4 rounded-lg shadow-lg w-full md:w-1/3">
                        <h3 className="text-xl font-semibold mb-2">Skills</h3>
                        <ul className="list-disc list-inside text-left">
                            {fields.skills && fields.skills.map((skill, idx) => (
                                <li key={idx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="about-tile p-4 rounded-lg shadow-lg w-full md:w-1/3">
                        <h3 className="text-xl font-semibold mb-2">Education</h3>
                        <p className="text-left mb-5">{fields.education}</p>
                    </div>
                </div>
                <p className="mt-10 text-sm">Contact me!</p>
                <a href={`mailto:${fields.contact}`} className='hover:text-blue-500 transition duration-300'>{fields.contact}</a>
                <div className="flex justify-center gap-4 mt-4">
                    <a href={fields.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">LinkedIn</a>
                    <a href={fields.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default About;
