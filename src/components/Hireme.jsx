import React from "react";
import hireMe from "../assets/images/GI.jpeg";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white ">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-orange-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
      </div>
      <div className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row flex-col-reverse items-    shadow-md shadow-orange-600">
        <div>
          <h2 className="text-2xl font-semibold text-orange-600">
            Do you want any work from me?
          </h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis dicta
            soluta quos tempore eos accusamus cupiditate, amet in similique
            sapiente obcaecati odio deleniti architecto corporis ratione.
            Consequatur a quidem maiores!
          </p>
          <button className="btn-primary mt-10  hover:bg-black hover:text-orange-600 hover:border-orange-600 hover:border-2 hover:font-bold">Say Hello</button>
        </div>
        <div className="lg:p-32 flex justify-center items-center ">
          <img src={hireMe} className="shadow-xl lg:h-[20rem] lg:w-[20rem] lg:mr-10 h-40 w-40 lg:absolute bottom-5 -right-5 object-cover border-4 border-orange-600 rounded-full" />
        </div>
      </div>

    </section>
  );
};

export default Hireme;
