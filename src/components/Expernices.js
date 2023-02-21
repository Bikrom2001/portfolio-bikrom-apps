import React, { useState } from "react";

const Expernices = () => {
  const [openTab, setOpenTab] = useState(1);
  return (
    <div>
      <section className="py-8">
        <div className="container mx-auto">
          <p className="font-inter  px-4 md:px-8 text-2xl all-heading">
            {" "}
            <span className="logo-color mr-3"> 02. </span> Where I’ve Worked{" "}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2  p-4 md:p-8">
            <div
              role="tablist"
              className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start"
            >
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(1);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                <button
                  className={
                    "p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400" +
                    (openTab === 1
                      ? "px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-violet-400 dark:text-gray-50"
                      : "p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400")
                  }
                >
                  Work Experience
                </button>
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(2);
                }}
                data-toggle="tab"
                href="#link2"
                role="tablist"
              >
                <button
                  className={
                    "" +
                    (openTab === 2
                      ? "px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-violet-400 dark:text-gray-50"
                      : "p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400")
                  }
                >
                  Course-work- 01
                </button>
              </a>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTab(3);
                }}
                data-toggle="tab"
                href="#link3"
                role="tablist"
              >
                <button
                  className={
                    "px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400" +
                    (openTab === 3
                      ? "px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-violet-400 dark:text-gray-50"
                      : "p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 dark:border-gray-300 dark:text-gray-400")
                  }
                >
                  Course-work- 02
                </button>
              </a>
            </div>

            <div id="link1" className={openTab === 1 ? "block" : "hidden"}>
              <div className="">
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <h5 className="text-xl font-semibold">
                    React Developer-{" "}
                    <span className="underlineLink">
                      <a target="_blank" href="https://www.peoplentech.net/">
                        {" "}
                        @ PeopleNtech Software
                      </a>
                    </span>
                  </h5>
                  <p className="font-mono">January 2023 - Present</p>
                  <p className="flex font-mono items-start gap-3 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#64ffda"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    <span className="text-justify">
                      {" "}
                      Interfaced with clients on a weekly basis, providing
                      technological expertise
                    </span>
                  </p>
                  <p className="flex font-mono items-start gap-3 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#64ffda"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    <span className="text-justify">
                      {" "}
                      Helped solidify a brand direction for blistabloc that
                      spans both packaging and web
                    </span>
                  </p>
                  <p className="flex font-mono items-start gap-3 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#64ffda"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    <span className="text-justify">
                      {" "}
                      Interfaced with clients on a weekly basis, providing
                      technological expertise
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div id="link2" className={openTab === 2 ? "block" : "hidden"}>
              <div className="">
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <h5 className="text-xl font-semibold">
                    Complete Web Development Course with
                    <span className="underlineLink"> Jhankar Mahbub</span>
                  </h5>
                  <p className="font-mono">30 June, 2023 - 30 December, 2023</p>
                  <p className="flex font-mono items-start gap-3 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#64ffda"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    <span className="text-justify">
                      {" "}
                      You will start with HTML, CSS, Bootstrap, and Tailwind.
                      Then JavaScript, DOM, API, ES6, debugging, dev tool, etc.
                    </span>
                  </p>
                  <p className="flex font-mono items-start gap-3 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#64ffda"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    <span className="text-justify">
                      {" "}
                      Enter the world of React, React Router, hooks, context
                      api, Tanstack query, recharts, etc.
                    </span>
                  </p>
                  <p className="flex font-mono items-start gap-3 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#64ffda"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    <span className="text-justify">
                      {" "}
                      Explore server side technology like Node, express,
                      mongodb. Build secure API using JWT tokens. Learn the
                      concepts and then apply them in projects. You will learn
                      and build 40+ projects in this course.
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div id="link3" className={openTab === 3 ? "block" : "hidden"}>
              <div className="">
                <div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
                  <h5 className="text-xl font-semibold">
                    PeopleNTech Limited{" "}
                    <span className="underlineLink">
                      Professional IT Training
                    </span>
                  </h5>
                  <p className="font-mono">January 2021 - April 2021</p>
                  <p className="flex font-mono items-start gap-3 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#64ffda"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    <span className="text-justify">
                      {" "}
                      Web Designing with HTML, CSS, Bootstrap, etc.Scripting
                      with JavaScript, jQuery, AJAX, JSON etc.
                    </span>
                  </p>
                  <p className="flex font-mono items-start gap-3 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#64ffda"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    <span className="text-justify">
                      {" "}
                      Search Engine Optimization Essentials for Web
                      Developers.Graphics Designing Essentials for Web
                      Developers
                    </span>
                  </p>
                  <p className="flex font-mono items-start gap-3 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="#64ffda"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                    <span className="text-justify">
                      {" "}
                      Core PHP with Object-Oriented Programming.PDO for Advanced
                      Database Connection and Query Processing
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expernices;
