interface Props {
  name: string;
  year: string;
  description: string;
  bgColor?: string;
}

const ProjectCard = (props: Props) => {
  const { name, year, description, bgColor } = props;

  return (
    <div className={`flex flex-col gap-5 p-5 ${bgColor}`}>
      <div className="flex flex-row justify-between">
        <h2 className="text-xl font-semibold">{name}</h2>
        <h2 className="text-xl">{year}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
