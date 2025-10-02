import React, { useEffect, useState } from 'react';

const About = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/about.json')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching about data:', error));
    }, []);

    if (!data) {
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
                <p className="text-lg mb-10 text-left">{data.introduction}</p>
                <div className="flex flex-wrap justify-center gap-4 mt-8">
                    <div className="about-tile p-4 rounded-lg shadow-lg w-full md:w-1/3">
                        <h3 className="text-xl font-semibold mb-2">Education</h3>
                        <ul>
                            {data.education.map ((item, index) => (
                            <li>
                            {item.degree} - {item.institution}
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <p className="mt-10 text-sm">Contact me!</p>
                <a href={`mailto:${data.contact}`} className='hover:text-blue-500 transition duration-300'>{data.contact}</a>
                <div className="flex justify-center gap-4 mt-4">
                    <a href={data.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">LinkedIn</a>
                    <a href={data.github} target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">GitHub</a>
                </div>
            </div>
        </section>
    );
};

export default About;
