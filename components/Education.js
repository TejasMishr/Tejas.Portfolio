export default function Education({ education }) {
  return (
    <>
      <div>
        <div className="">
          <div className="flex flex-col gap-2 pl-7">
            <ol className="list-disc p-[2px]">
              <li className="flex flex-col items-start justify-start">
                <span className="flex  items-center text-gray-300 font-semibold relative -left-[30px]">
                  <span className="">
                    {/* Point Blink */}
                    <ul
                      className="list-disc pl-[30px] p-[1px] text-[#edae4f] animate-pulse"
                      style={{ fontSize: "1.3rem" }}
                    >
                      <li className=""></li>
                    </ul>
                  </span>
                  <div className="flex justify-between gap-3">
                    <span>{education.name}</span>

                    {/* <span className="text-[#C5A956] text-xs p-[3px] ">
                      {" ( "} {education.session} {" )"}
                    </span> */}
                  </div>
                </span>

                <span className="text-[#e6d6ac] text-xs font-extralight p-[3px] ">
                  {education.course} | {education.session} | CGPA :{" "}
                  {education.CGPA}
                </span>

                <ul className="list-disc pl-8 gap-2 flex flex-col mt-2 p-[3px] gap-2">
                  {education.description.points.map((point) => (
                    <li
                      key={point}
                      className="text-gray-300 font-thin text-xs flex-wrap"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="timeline-text"></p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}
