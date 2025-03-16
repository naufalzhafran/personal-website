import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-white text-black dark:bg-black dark:text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Fullstack Software Engineer
              </h1>
              <p className="text-xl mb-8">
                Building robust and scalable web applications with modern
                technologies
              </p>
              <div className="flex space-x-4">
                <a
                  href="#contact"
                  className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-black transition duration-300 dark:bg-white dark:text-black dark:hover:bg-white"
                >
                  Contact Me
                </a>
                <a
                  href="#projects"
                  className="border border-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition duration-300 dark:border-white dark:hover:bg-white dark:hover:text-black"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-black shadow-xl dark:border-white">
                {/* Replace with your actual profile image */}
                <div className="w-full h-full bg-white flex items-center justify-center text-black text-2xl font-bold dark:bg-black dark:text-white">
                  Your Photo
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-8 border border-black dark:bg-black dark:border dark:border-white">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
                Frontend
              </h3>
              <div className="grid grid-cols-2 gap-4 text-black dark:text-white">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full dark:bg-white"></div>
                  <p>Next.js</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full dark:bg-white"></div>
                  <p>React.js</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full dark:bg-white"></div>
                  <p>TypeScript</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full dark:bg-white"></div>
                  <p>Tailwind CSS</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full dark:bg-white"></div>
                  <p>HTML5/CSS3</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full dark:bg-white"></div>
                  <p>JavaScript</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 border border-black dark:bg-black dark:border dark:border-white">
              <h3 className="text-xl font-bold mb-4 text-black dark:text-white">
                Backend
              </h3>
              <div className="grid grid-cols-2 gap-4 text-black dark:text-white">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full dark:bg-white"></div>
                  <p>Node.js</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full dark:bg-white"></div>
                  <p>Adonis.js</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full dark:bg-white"></div>
                  <p>Python</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full dark:bg-white"></div>
                  <p>Django</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full dark:bg-white"></div>
                  <p>REST APIs</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full dark:bg-white"></div>
                  <p>SQL/NoSQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white text-black dark:bg-black dark:text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Work Experience
          </h2>
          
          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-black border border-black dark:bg-black dark:text-white dark:border-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">
                    Senior Software Engineer
                  </h3>
                  <p className="text-lg font-medium">Company Name</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-white text-black text-sm font-medium px-3 py-1 rounded-full border border-black dark:bg-black dark:text-white dark:border-white">
                    Jan 2022 - Present
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2">
                <li>Led the development of a microservices architecture that improved system reliability by 30%</li>
                <li>Implemented CI/CD pipelines that reduced deployment time from hours to minutes</li>
                <li>Mentored junior developers and conducted code reviews to ensure code quality</li>
                <li>Collaborated with product managers to define technical requirements and plan sprints</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  Next.js
                </span>
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  TypeScript
                </span>
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  Node.js
                </span>
              </div>
            </div>
            
            {/* Experience Item 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-black border border-black dark:bg-black dark:text-white dark:border-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">
                    Software Developer
                  </h3>
                  <p className="text-lg font-medium">Previous Company</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-white text-black text-sm font-medium px-3 py-1 rounded-full border border-black dark:bg-black dark:text-white dark:border-white">
                    Mar 2020 - Dec 2021
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2">
                <li>Developed and maintained RESTful APIs for web and mobile applications</li>
                <li>Collaborated with designers to implement responsive UI components</li>
                <li>Optimized database queries resulting in 40% faster page load times</li>
                <li>Participated in agile development cycles including daily stand-ups and sprint planning</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  React
                </span>
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  Python
                </span>
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  Django
                </span>
              </div>
            </div>

            {/* Experience Item 3 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-black border border-black dark:bg-black dark:text-white dark:border-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">
                    Junior Web Developer
                  </h3>
                  <p className="text-lg font-medium">First Company</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-white text-black text-sm font-medium px-3 py-1 rounded-full border border-black dark:bg-black dark:text-white dark:border-white">
                    Jun 2018 - Feb 2020
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2">
                <li>Built and maintained client websites using modern JavaScript frameworks</li>
                <li>Implemented responsive designs ensuring cross-browser compatibility</li>
                <li>Created database schemas and models for web applications</li>
                <li>Worked directly with clients to gather requirements and implement feedback</li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  JavaScript
                </span>
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  HTML/CSS
                </span>
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  SQL
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-black dark:bg-black dark:border dark:border-white">
              <div className="h-48 bg-white flex items-center justify-center text-black border-b border-black dark:bg-black dark:text-white dark:border-white">
                <p className="text-black dark:text-white">Project Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Project Name</h3>
                <p className="text-black mb-4 dark:text-white">
                  A brief description of the project and its key features.
                  Explain the tech stack and your role.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                    Next.js
                  </span>
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                    React
                  </span>
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                    Node.js
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-black hover:text-black dark:text-white dark:hover:text-white">
                    View Demo
                  </a>
                  <a href="#" className="text-black hover:text-black dark:text-white dark:hover:text-white">
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-black dark:bg-black dark:border dark:border-white">
              <div className="h-48 bg-white flex items-center justify-center text-black border-b border-black dark:bg-black dark:text-white dark:border-white">
                <p className="text-black dark:text-white">Project Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Project Name</h3>
                <p className="text-black mb-4 dark:text-white">
                  A brief description of the project and its key features.
                  Explain the tech stack and your role.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                    Python
                  </span>
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                    Django
                  </span>
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                    React
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-black hover:text-black dark:text-white dark:hover:text-white">
                    View Demo
                  </a>
                  <a href="#" className="text-black hover:text-black dark:text-white dark:hover:text-white">
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-black dark:bg-black dark:border dark:border-white">
              <div className="h-48 bg-white flex items-center justify-center text-black border-b border-black dark:bg-black dark:text-white dark:border-white">
                <p className="text-black dark:text-white">Project Image</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">Project Name</h3>
                <p className="text-black mb-4 dark:text-white">
                  A brief description of the project and its key features.
                  Explain the tech stack and your role.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                    Adonis.js
                  </span>
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                    React
                  </span>
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                    SQL
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a href="#" className="text-black hover:text-black dark:text-white dark:hover:text-white">
                    View Demo
                  </a>
                  <a href="#" className="text-black hover:text-black dark:text-white dark:hover:text-white">
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
