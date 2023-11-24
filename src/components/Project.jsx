import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project_person from "../assets/images/Gourav.jpeg";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: "https://agentestudio.com/uploads/ckeditor/pictures/935/content_pic_1.png",
      name: "Furniture Website",
      github_link: "https://github.com/GouravBlog/New-Furniture-Website",
      live_link: "https://gouravtech.netlify.app",
    },
    {
      img: "https://www.vandelaydesign.com/wp-content/uploads/weavers-coffee-and-tea.jpg",
      name: "Tsunami Coffe House Website",
      github_link: "https://github.com/GouravBlog/Technocolab-Internship/tree/main/JAVASCRIPT%20PROJECT%20TASK/Project%20Task%2015",
      live_link: "https://techgvir.netlify.app/",
    },
    {
      img: "https://cdn.dribbble.com/userupload/5288697/file/original-a244827938c1946a2ca7c2c22eb8554d.png?resize=400x300",
      name: "Morocco",
      github_link: "https://github.com/GouravBlog/Technocolab-Internship/tree/main/JAVASCRIPT%20PROJECT%20TASK/Project%20Task%2014",
      live_link: "https://gvirtech.netlify.app/",
    },
    {
      img: "https://htmlcodex.com/wp-content/uploads/2021/06/painting-company-website-template-1.jpg",
      name: "House Store",
      github_link: "https://github.com/GouravBlog/Technocolab-Internship/tree/main/JAVASCRIPT%20PROJECT%20TASK/Project%20Task%2013",
      live_link: "https://techgvi.netlify.app/",
    },
    {
      img: "https://www.lynchburgvirginia.org/wp-content/uploads/2023/10/SinklandFarms-WineFestival2023-VRV.jpg",
      name: "Annual Aguillar Family Wine Festival",
      github_link: "https://github.com/GouravBlog/Technocolab-Internship/tree/main/HTML%20PROJECT%20TASK/Project%20Task%202",
      live_link: "https://techgourav.netlify.app/",
    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-orange-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className="lg:w-2/3 w-full">
          <Swiper
            slidesPerview={1.2}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
            {projects.map((project_info, i) => (
              <SwiperSlide key={i}>
                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl ">
                  <img src={project_info.img} alt="" className="rounded-lg" />
                  <h3 className="text-xl my-4">{project_info.name}</h3>
                  <div className="flex gap-3">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-orange-600 bg-gray-800 px-2 py-1 inline-block cursor-pointer "
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-orange-600 bg-gray-800 px-2 py-1 inline-block cursor-pointer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="lg:block hidden border-4 border-orange-600">
          <img src={project_person} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Project;
