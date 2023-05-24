import React from "react";
import about1 from "./2.jpg";

export default function BriefAbout() {
  return (
    <>
      <>
        <div className="md:container md:mx-auto flex my-5 items-center pre-BriefAbout-text ">
          <div className="BriefAbout-text">
            <h2 className="font-bold text-2xl py-5 mx-10">Welcome to our To-Do Website!</h2>
            <p className="mx-10">
              A to-do list, often referred to as a "to-do," is a list of tasks or activities
              that need to be completed or accomplished. It's a simple and effective way to organize
              and prioritize your tasks, helping you stay focused and productive. Typically, a to-do
              list includes specific items or actions that need to be done, along with deadlines or due

            </p>
            <br />
            <br />

            <p className="mx-10">

              dates if applicable. By creating a to-do list, you can better manage your time, track your
              progress, and ensure that important tasks are completed in a timely manner
            </p>
          </div>
          <div className="about-img">
            <img src={about1} alt="about1" />
          </div>
        </div>
      </>
    </>
  );
};