/* eslint-disable react/prop-types */
import { TiTickOutline } from "react-icons/ti";

function Language({ name, proficiency, progress }) {
  return (
    <>
      <div>
        <h2 className="font-bold text-lg flex gap-3 items-center">
          <span className="border-2 p-1 border-basic rounded-full">
            <TiTickOutline className="rounded-full" />
          </span>
          {name}
        </h2>
        <span className="ms-10 text-basic font-semibold">{proficiency}</span>
      </div>
      <div className="gap-1 flex flex-col justify-between">
        {progress.map((value, index) => (
          <div key={index} className="bg-background h-full rounded-full">
            <div
              className="bg-basic h-full rounded-full"
              style={{ width: `${value}%` }}
            ></div>
          </div>
        ))}
      </div>
      <div className="gap-1 flex flex-col justify-around">
        <button className="p-1 text-basic bg-background rounded-full">
          Speaking
        </button>
        <button className="p-1 text-basic bg-background rounded-full">
          Writing
        </button>
        <button className="p-1 text-basic bg-background rounded-full">
          Comprehension
        </button>
      </div>
    </>
  );
}

export default Language;
