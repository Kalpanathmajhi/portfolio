"use client";

import React from "react";
import GitHubCalendar from 'react-github-calendar';
import { companies, testimonials } from "@/data";


const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        My GitHub
        <span className="text-purple"> Contribution</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden"
        >
          <GitHubCalendar username="Kalpanathmajhi" />

        </div>
        <h1 className="heading mb-6">
          Companies I have
          <span className="text-purple"> Worked with</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map((company) => (
            <React.Fragment key={company.id}>
              <div className="flex md:max-w-60 max-w-32 gap-2">
                <img
                  src={company.nameImg}
                  alt={company.name}
                  width={company.id === 4 || company.id === 5 ? 100 : 150}
                  className="w-24 md:w-20 sm:w-16 xs:w-12 rounded-lg m-4"
                />


              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
