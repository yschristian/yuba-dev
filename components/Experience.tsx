import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import SolvitAfrica from "./works/SolvitAfrica";
import Uhdss from "./works/Uhdss";
import Tpc from "./works/Tpc";

const Experience = () => {
  const [workSolvitAfrica, setWorkSolvitAfrica] = useState(true);
  const [workUhdss, setWorkUhdss] = useState(false);
  const [workTpc, setWorkTpc] = useState(false);

  const handleSolvit = () => {
    setWorkSolvitAfrica(true);
    setWorkUhdss(false);
    setWorkTpc(false);
  };
  const handleUhdss = () => {
    setWorkSolvitAfrica(false);
    setWorkUhdss(true);
    setWorkTpc(false);
  };
  const handleTpc = () => {
    setWorkSolvitAfrica(false);
    setWorkUhdss(false);
    setWorkTpc(true);
  };
  return (
    <section
      id="experience"
      className="max-w-containerxs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Where I have Worked" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col ">
          <li
            onClick={handleTpc}
            className={`${
              workTpc
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark "
            }border-l-2 bg-transparent hover:bg-[#112240] py-3 
                            text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            TPC
          </li>

          <li
            onClick={handleUhdss}
            className={`${
              workUhdss
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark "
            }border-l-2 bg-transparent hover:bg-[#112240] py-3 
                            text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            UHDSS
          </li>
          <li
            onClick={handleSolvit}
            className={`${
              workSolvitAfrica
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor text-textDark "
            }border-l-2 bg-transparent hover:bg-[#112240] py-3 
                        text-sm cursor-pointer duration-300 px-8 font-medium`}
          >
            SolvitAfrica
          </li>
        </ul>
        {workTpc && <Tpc />}
        {workUhdss && <Uhdss />}
        
      </div>
    </section>
  );
};

export default Experience;
