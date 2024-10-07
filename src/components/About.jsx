import React from 'react';

const About = () => {
  return (
    <section id="about" className="my-8 px-4 h-screen">
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-gray-900 mb-8">About Me</h2>
            <p className="text-lg text-gray-900 mb-10 text-left">
            I am a junior web developer with experience in building modern web applications. I enjoy working with the latest technologies to create efficient, scalable, and user-friendly applications. My expertise lies in front-end development, and I am proficient in a variety of programming languages and frameworks.
            </p>
            <p className="text-lg text-gray-900 mb-10 text-left">
            I previously graduated with B.SC in computer science from the University of Victoria and am currently attending BCIT. I will be completing the Front-End Web Development certificate in July.
            </p>
            <p className="text-lg text-gray-900 mb-10 text-left">
            When I'm not coding, I enjoy playing video games, mountain biking, or building Gundam model kits.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
                <div className="about-tile bg-blue-500 p-4 rounded-lg shadow-lg w-full md:w-1/3 text-white">
                    <h3 className="text-xl font-semibold mb-2">Skills</h3>
                    <ul className="list-disc list-inside text-left">
                        <li>JavaScript, React, Node.js</li>
                        <li>HTML, CSS, Tailwind CSS</li>
                        <li>Python, Java, C</li>
                        <li>Git, WordPress, WooCommerce</li>
                    </ul>
                </div>
                <div className="about-tile bg-blue-500 p-4 rounded-lg shadow-lg w-full md:w-1/3 text-white">
                    <h3 className="text-xl font-semibold mb-2">Education</h3>
                    <p className="text-left mb-5">Bachelor's Degree in Computer Science, UVic</p>
                    <p className="text-left">Front-End Web Development Certificate, BCIT</p>
                </div>
            </div>
            <p className="mt-10 text-sm text-gray-900">Contact me!</p>
            <a href='aaronkbence@gmail.com' className='hover:text-blue-500 transition duration-300'>aaronkbence@gmail.com</a>
        </div>
    </section>
  );
};

export default About;
