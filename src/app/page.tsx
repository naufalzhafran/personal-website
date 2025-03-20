import Squares from "@/components/SquareBG";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-white text-black dark:bg-black dark:text-white relative overflow-hidden">
        <div className="absolute inset-0 z-1">
          <Squares
            speed={0.5}
            squareSize={40}
            direction="diagonal"
            borderColor="rgba(255, 255, 255, 0.2)"
            hoverFillColor="rgba(34, 34, 34, 0.5)"
          />
        </div>
        <div className="container min-h-[calc(100vh-18rem)] mx-auto px-6 flex flex-col items-start justify-center relative z-10">
          <p className="text-xl font-bold ml-0.5 md:text-2xl md:ml-1 text-black dark:text-white">
            Hi, I'm Naufal Zhafran Latif
          </p>
          <h1 className="text-5xl md:text-9xl font-bold mb-4">
            Fullstack Software Engineer
          </h1>
          <p className="text-lg mb-8 ml-0.5 md:ml-1">
            A fast learner, always curious about something new, and passionate
            about exploring innovative solutions to drive growth and
            improvement.
          </p>
          <div className="flex space-x-4">
            <a
              href="#projects"
              className="border border-black px-6 py-3 rounded-lg font-medium hover:bg-black hover:text-white transition duration-300 dark:border-white dark:hover:bg-white dark:hover:text-black"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">
            Tech Stacks
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
                  <p>Ant Design</p>
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
                  <p>Nest.js</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-black rounded-full dark:bg-white"></div>
                  <p>SQL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="py-20 bg-white text-black dark:bg-black dark:text-white"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Work Experience
          </h2>

          <div className="space-y-8">
            {/* Experience Item 1 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-black border border-black dark:bg-black dark:text-white dark:border-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Software Engineer</h3>
                  <p className="text-lg font-medium">Shopee/Seamoney</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-white text-black text-sm font-medium px-3 py-1 rounded-full border border-black dark:bg-black dark:text-white dark:border-white">
                    Oct 2021 - Present
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Enhanced and optimized internal payment tools to streamline
                  operations and improve team efficiency.
                </li>
                <li>
                  Consistently delivered projects on time while exceeding
                  expectations and requirements.
                </li>
                <li>
                  Fostered strong collaboration with developers and stakeholders
                  to achieve project goals.
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  Typescript
                </span>
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  React
                </span>
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  React Native
                </span>
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  Python
                </span>
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  Django
                </span>
              </div>
            </div>

            {/* Experience Item 2 */}
            <div className="bg-white rounded-xl shadow-md p-8 text-black border border-black dark:bg-black dark:text-white dark:border-white">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Fullstack Developer</h3>
                  <p className="text-lg font-medium">
                    Local Non-profit Organization
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-white text-black text-sm font-medium px-3 py-1 rounded-full border border-black dark:bg-black dark:text-white dark:border-white">
                    Jan 2024 - Present
                  </span>
                </div>
              </div>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Redesigned a legacy website to enhance user experience and
                  stability, resulting in improved usability and engagement.
                </li>
                <li>
                  Refactored legacy PHP code into clean, efficient, and
                  maintainable TypeScript, enhancing readability and
                  performance.
                </li>
                <li>
                  Enhanced client-side user experience, achieving up to 80%
                  faster website loading times.
                </li>
                <li>
                  Streamline the end-to-end development and deployment workflow
                  to facilitate seamless onboarding for new developers.
                </li>
              </ul>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  NextJS
                </span>
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  AdonisJS
                </span>
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  PostgreSQL
                </span>
                <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                  Coolify
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
              <div className="aspect-square w-full bg-white relative overflow-hidden flex items-center justify-center text-black border-b border-black dark:bg-black dark:text-white dark:border-white">
                <Image
                  src="/porto-1.png"
                  alt="Project Image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black dark:text-white">
                  Student Center Platform
                </h3>
                <p className="text-black mb-4 dark:text-white">
                  Comprehensive platform enabling students to register for
                  various events organized by a student-led NGO
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                    NextJS
                  </span>
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                    AdonisJS
                  </span>
                  <span className="px-3 py-1 bg-white text-black rounded-full text-sm border border-black dark:bg-black dark:text-white dark:border-white">
                    PostgreSQL
                  </span>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="https://kaderisasi.salmanitb.com"
                    className="text-black hover:text-black dark:text-white dark:hover:text-white"
                  >
                    View Website
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
