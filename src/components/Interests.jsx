import { BsCupHotFill } from "react-icons/bs";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiNotebookDuotone } from "react-icons/pi";
import { FaMicrophoneLines } from "react-icons/fa6";
import { IoCameraOutline } from "react-icons/io5";
import { IoMdLaptop } from "react-icons/io";
import { LuAlarmClock } from "react-icons/lu";
import { TiPencil } from "react-icons/ti";
import { LiaSearchLocationSolid } from "react-icons/lia";
function Interests() {
  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold leading-relaxed flex gap-4 items-center">
        <span className="bg-basic p-3 rounded-full">
          <BsCupHotFill className="bg-basic" />
        </span>
        Interests
      </h1>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10 ms-10 ps-8">
        <div className="w-[60%] h-40  flex flex-col justify-center items-center rounded-tr-[2rem] rounded-bl-[2rem] border-t-background border-[12px]  border-basic">
          <IoChatbubblesOutline className=" text-6xl" />
          <p className=" text-center">Language Learning</p>
        </div>
        <div className="w-[60%] h-40  flex flex-col justify-center items-center rounded-br-[2rem] rounded-tl-[2rem] border-e-background border-[12px]  border-basic">
          <PiNotebookDuotone className="text-6xl" />
          <p className="text-center">Book Club Participation</p>
        </div>
        <div className="w-[60%] h-40  flex flex-col justify-center items-center rounded-bl-[2rem] rounded-tr-[2rem] border-b-background border-[12px]  border-basic">
          <FaMicrophoneLines className=" text-6xl" />
          <p className="text-center">Community Involvement</p>
        </div>
        <div className="w-[60%] h-40  flex flex-col justify-center items-center rounded-tl-[2rem] rounded-br-[2rem] border-l-background border-[12px]  border-basic">
          <IoCameraOutline className=" text-6xl" />
          <p className=" text-center">Photography</p>
        </div>
        <div className="w-[60%] h-40  flex flex-col justify-center items-center rounded-tl-[2rem] rounded-br-[2rem] border-l-background border-[12px]  border-basic">
          <IoMdLaptop className=" text-6xl" />
          <p className=" text-center">Tech Enthusiast</p>
        </div>
        <div className="w-[60%] h-40  flex flex-col justify-center items-center rounded-bl-[2rem] rounded-tr-[2rem] border-b-background border-[12px]  border-basic">
          <LuAlarmClock className=" text-6xl" />
          <p className=" text-center">Fitness and Wellness</p>
        </div>
        <div className="w-[60%] h-40  flex flex-col justify-center items-center rounded-br-[2rem] rounded-tl-[2rem] border-e-background border-[12px]  border-basic">
          <TiPencil className=" text-6xl" />
          <p className=" text-center">Creative Writing</p>
        </div>
        <div className="w-[60%] h-40  flex flex-col justify-center items-center rounded-tr-[2rem] rounded-bl-[2rem] border-t-background border-[12px]  border-basic">
          <LiaSearchLocationSolid className=" text-6xl" />
          <p className=" text-center">Continuous Learning</p>
        </div>
      </div>
    </div>
  );
}

export default Interests;
