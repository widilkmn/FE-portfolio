import EducationCard from "../../components/education-card";
import Educations from "./data/dummyEducation.json";
import Profile from "../../assets/profile.jpg";
import ProjectCard from "../../components/project-card";
import Projects from "./data/dummyProject.json";

interface Project {
  name: string;
  year: string;
  description: string;
}

interface Education {
  schoolName: string;
  major?: string;
  year: string;
  description: string;
}

const LandingPage = () => {
  const projects: Project[] = Projects;
  const education: Education[] = Educations;

  return (
    <div className="flex flex-col gap-5 w-full">
      <section className="flex flex-row w-full justify-evenly my-10 items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold">HELLO WORLD !</h1>
          <p className="text-2xl">Widi Lukman S</p>
        </div>
        <div className="flex flex-col">
          <img
            src={Profile}
            className="w-60 h-60 rounded-lg object-cover object-top"
          />
        </div>
      </section>
      <section className="flex flex-row w-full bg-slate-100 h-72 p-10">
        <div className="flex flex-col gap-5 justify-center">
          <h1 className="text-2xl font-semibold">SUMMARY</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
            neque voluptas. Saepe, beatae. Quod, accusamus aperiam? Mollitia,
            adipisci excepturi. Pariatur, necessitatibus porro. A eum distinctio
            unde dolor voluptate consectetur optio.
          </p>
        </div>
      </section>
      <section className="flex flex-row p-10">
        <div className="flex flex-col w-full gap-5">
          <h1 className="text-2xl font-semibold">PROJECTS</h1>
          {projects.map((item: Project, index: number) => (
            <ProjectCard
              key={index}
              name={item.name}
              year={item.year}
              description={item.description}
              bgColor={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
            />
          ))}
        </div>
      </section>
      <section className="flex flex-row p-10">
        <div className="flex flex-col w-full gap-5">
          <h1 className="text-2xl font-semibold">EDUCATION</h1>
          {education.map((item: Education, index: number) => (
            <EducationCard
              schoolName={item.schoolName}
              major={item.major}
              year={item.year}
              description={item.description}
              bgColor={`${index % 2 === 0 ? "bg-gray-100" : ""}`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
