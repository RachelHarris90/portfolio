export const Card = ({
  styleOverride,
  heading,
  details,
}: {
  styleOverride?: string;
  heading: string;
  details: string[];
}) => {
  const cardStyle = `col-span-1 row-span-2 bg-white/[.7] rounded p-8 shadow-lg ${styleOverride}`;
  return (
    <div className={cardStyle}>
      <h2 className="font-sans text-black text-2xl font-semibold mb-4">
        {heading}
      </h2>
      {details.map((d, i) => (
        <p
          className="border-l-4 pl-4 border-black hover:border-[#D279EE]"
          key={i}
        >
          {d}
        </p>
      ))}
    </div>
  );
};
