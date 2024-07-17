interface Props {
  schoolName: string;
  major?: string;
  year: string;
  description: string;
  bgColor?: string;
}

const EducationCard = (props: Props) => {
  const { schoolName, major, year, description, bgColor } = props;

  return (
    <div className={`flex flex-col gap-3 p-5 ${bgColor}`}>
      <div className="flex flex-row justify-between">
        <h2 className="text-xl font-semibold">{schoolName}</h2>
        <h2 className="text-xl">{year}</h2>
      </div>

      {major && <p className="text-sm font-medium">- {major}</p>}

      <p>{description}</p>
    </div>
  );
};

export default EducationCard;
