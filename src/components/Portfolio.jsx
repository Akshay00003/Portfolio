import React from "react";
import watch from "../assets/portfolio/watch.png";
import birthday from "../assets/portfolio/birthday.png";
import football from "../assets/portfolio/football.png";
import mess from "../assets/portfolio/mess.png";
// import quiz from "../assets/portfolio/quiz.png";
// import review from "../assets/portfolio/review.png";
import tour from "../assets/portfolio/tour.png";
// import text from "../assets/portfolio/text.png";
import blog from "../assets/portfolio/blog.png";
import lms from '../assets/portfolio/lms.png'
import quizNew from '../assets/portfolio/quizNew.png'
import ecom from '../assets/portfolio/ecommerce.png'

const Portfolio = () => {
  const handleCodeClick = (url) => {
    window.open(url, "_blank");
  };
  const portfolios = [
    {
      id: 1,
      src: lms,
      url: "https://github.com/Akshay00003/New_keralaFirst_React.git",
      prev:"https://keralafirst.netlify.app/"
    },
    {
      id: 2,
      src: quizNew,
      url: "https://github.com/Akshay00003/quiz_main.git",
      prev:"https://quizmain.netlify.app/"
    },
    {
      id: 3,
      src: ecom,
      url: "https://github.com/Akshay00003/ecommerce_Node.git",
      prev:"https://github.com/Akshay00003/ecommerce_React.git"
    },
    {
      id: 4,
      src: watch,
      url: "https://github.com/Akshay00003/watch_Ecommerce_UI.git",
    },
    {
      id: 5,
      src: football,
      url: "https://github.com/Akshay00003/Football_UI.git",
    },
    {
      id: 6,
      src: blog,
      url: "https://github.com/Akshay00003/Blog_App.git",
    },
    {
      id: 7,
      src: mess,
      url: "https://github.com/Akshay00003/Mess_app.git",
    },
    {
      id: 8,
      src: birthday,
    },
    {
      id: 9,
      src: tour,
      url: "https://github.com/Akshay00003/TourBlog_app.git",
    },
    // {
    //   id: 7,
    //   src: text,
    //   url: "https://github.com/Akshay00003/Text_app.git",
    // },
    // {
    //   id: 8,
    //   src: review,
    //   url: "https://github.com/Akshay00003/Review_app.git",
    // },
    // {
    //   id: 9,
    //   src: quiz,
    //   url: "https://github.com/Akshay00003/Quiz_app.git",
    // },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b relative from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url, prev }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img src={src} alt="" className="rounded-md hover:scale-105" />

              <div className="flex items-center justify-center">
                <button
                  onClick={() => prev? handleCodeClick(prev) : handleCodeClick(url)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Demo
                </button>
                <button
                  onClick={() => handleCodeClick(url)}
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                >
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
