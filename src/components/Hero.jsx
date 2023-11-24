import React from "react";
import hero from "../assets/images/GI.jpeg";
const Hero = () => {
  const social_media = [{
    instagram: "logo-instagram", instaLink: "https://www.instagram.com/gouravevasale/",
    facebook: "logo-facebook", fcLink: "https://www.facebook.com/gaurave.vasale?locale=hi_IN",
    twitter: "logo-twitter", twitLink: "https://twitter.com/VasaleGourav",
    linkedin: "logo-linkedin", linkeLink: "https://www.linkedin.com/in/gourav-vasale-3a87631ab/",
    github: "logo-github", githubLink: "https://github.com/GouravBlog?tab=repositories"
  }];
  return (
    <section
      id="home"
      className="lg:h-[90vh]  md:pt-32 lg:flex items-center justify-evenly mt-20 lg:mt-0 lg:shadow-md lg:shadow-orange-600"
    >
      <div className="hidden lg:block border-4 border-orange-600 rounded-full ">
        <img src={hero} className="shadow-xl rounded-full lg:h-80 lg:w-80 h-16 w-16 bg-orange-600" />
      </div>
      <div className="text-center  lg:mt-0 ">
        <div className=" text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-orange-600 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Gourav Wasale</span>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-orange-600">
            Full MERN Stack Developer
          </h4>
          <button className="btn-primary md:ml-72 mt-8 hover:bg-black hover:text-orange-600 hover:border-orange-600 hover:border-2 hover:font-bold"><a href="#contact">Contact Me</a></button>

          <div className="mt-8 text-3xl flex items-center md:justify-center justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon.instaLink} target="_blank" className="px-4 text-orange-600 hover:text-white "><ion-icon name={icon.instagram} className="py-1 "></ion-icon></a>
                <a href={icon.fcLink} target="_blank" className="px-4 text-orange-600 hover:text-white"><ion-icon name={icon.facebook} className="py-1"></ion-icon></a>
                <a href={icon.twitLink} target="_blank" className="px-4 text-orange-600 hover:text-white"><ion-icon name={icon.twitter} className="py-1"></ion-icon></a>
                <a href={icon.linkeLink} target="_blank" className="px-4 text-orange-600 hover:text-white"><ion-icon name={icon.linkedin} className="py-1"></ion-icon></a>
                <a href={icon.githubLink} target="_blank" className="px-4 text-orange-600 hover:text-white"><ion-icon name={icon.github} className="py-1"></ion-icon></a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
