import lap from "./Trading-1.webp";
import tel from "/telegram.png"
import { useEffect, useRef, useState } from "react";
const StandFor = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const monthtext = new Date().getMonth();
  console.log(monthtext);
  // 2019-09-09T06:35:10
  const startTimer = () => {
    let month = monthtext + 2;
    // const countdownDate = new Date(`${month} 15, 2023 00:00:00`).getTime();
    const countdownDate = new Date(`2023-${month}-01T00:00:00`).getTime();
    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        // clearInterval(interval.current)
        // restart timer
        // month=month+1;
        month = month + 1;
        console.log("jnk");
      } else {
        // updade time
        setTimerDays(`${days}`);
        setTimerHours(`${hours}`);
        setTimerMinutes(`${minutes} `);
        setTimerSeconds(`${seconds}`);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });
  const diffdata = [
    {
      number: 1,
      content:
        "Banknifty & Stock options insights boost informed trading choices, reducing risks.",
      classNamea: "bg-[#00C36C]",
    },
    {
      number: 2,
      content: "Momentum Trend Trading Pure Price Action Based strategies.",
      classNamea: "bg-[#35B5FC]",
    },
    {
      number: 3,
      content: "Shared knowledge aids in minimizing losses and managing risks.",
      classNamea: "bg-[#00C36C]",
    },
    {
      number: 4,
      content:
        "Continuous education fosters trader growth and skill development.",
      classNamea: "bg-[#35B5FC]",
    },
    {
      number: 5,
      content:
        "Connect with like-minded traders, expanding your professional circle.",
      classNamea: "bg-[#00C36C]",
    },
    {
      number: 6,
      content:
        "Real-time updates provide a competitive edge and timely trade executions.",
      classNamea: "bg-[#35B5FC]",
    },
  ];
  return (
    <div className="py-[100px]">
      <div className="container">
        <div className=" mx-auto">
          <div className="flex justify-center ">
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <defs></defs>{" "}
              <g stroke="none" fill="none">
                {" "}
                <rect
                  fill="#00C36C"
                  opacity="0.3"
                  x="2"
                  y="3"
                  width="20"
                  height="18"
                  rx="2"
                ></rect>{" "}
                <path
                  d="M9.9486833,13.3162278 C9.81256925,13.7245699 9.43043041,14 9,14 L5,14 C4.44771525,14 4,13.5522847 4,13 C4,12.4477153 4.44771525,12 5,12 L8.27924078,12 L10.0513167,6.68377223 C10.367686,5.73466443 11.7274983,5.78688777 11.9701425,6.75746437 L13.8145063,14.1349195 L14.6055728,12.5527864 C14.7749648,12.2140024 15.1212279,12 15.5,12 L19,12 C19.5522847,12 20,12.4477153 20,13 C20,13.5522847 19.5522847,14 19,14 L16.118034,14 L14.3944272,17.4472136 C13.9792313,18.2776054 12.7550291,18.143222 12.5298575,17.2425356 L10.8627389,10.5740611 L9.9486833,13.3162278 Z"
                  id="Path-108"
                  fill="#00C36C"
                ></path>{" "}
                <circle
                  fill="#00C36C"
                  opacity="0.3"
                  cx="19"
                  cy="6"
                  r="1"
                ></circle>{" "}
              </g>{" "}
            </svg>
          </div>
          <p className="sm:text-5xl text-3xl pt-2 pb-5 font-bold text-center text-[#495057]">
            Join The Next Revolution.
          </p>
          <div className="flex xl:flex-row flex-col gap-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 lg:px-4 flex-[60%]"  data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
              {diffdata.map((item, index) => (
                <div key={index} className="my-4">
                  <div className="flex gap-5">
                    <div
                      className={` text-white flex  rounded-[50%] text-3xl w-[50px] h-[50px] items-center justify-center ${item.classNamea}`}
                    >
                      <h1 className="">{item.number}</h1>
                    </div>
                    <div className="flex-1">
                      <p className="text-xl font-medium ">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className="flex-1 flex w-full  items-end justify-center flex-wrap">
            <img src={check} alt="" className="w-[100%]" />
          </div> */}
            </div>
            <div data-aos="fade-left" data-aos-offset="200" data-aos-easing="ease-in-sine" className="flex-[40%] flex flex-col gap-5 justify-center items-center">
              <div>
                <img src={lap} alt="" />
              </div>

              <div className="flex gap-3 justify-center items-center ">
                <div className="flex flex-col ">
                  <p className="sm:text-5xl text-3xl font-bold text-center">{timerDays}</p>
                  <p className="text-xl text-center">days</p>
                </div>
                <div className="text-5xl">:</div>
                <div className="flex flex-col ">
                  <p className="sm:text-5xl text-3xl font-bold text-center">{timerHours}</p>
                  <p className="text-xl text-center">Hours</p>
                </div>
                <div className="text-5xl">:</div>
                <div className="flex flex-col ">
                  <p className="sm:text-5xl text-3xl  font-bold text-center">
                    {timerMinutes}
                  </p>
                  <p className="text-xl text-center">Minutes</p>
                </div>
                <div className="text-5xl">:</div>
                <div className="flex flex-col ">
                  <p className="sm:text-5xl text-3xl  font-bold text-center">
                    {timerSeconds}
                  </p>
                  <p className="text-xl text-center">Seconds</p>
                </div>
              </div>
              <div>
              <a className="button-3  px-4 py-2" href="https://t.me/+wzWxNqcChlwwZWY1" target="_blank" rel="noreferrer">
            <div className="flex flex-row gap-4 justify-center items-center">
              <img src={tel} alt="" className="w-[40px]" />
              <p className="sm:text-3xl text-xl">Join the exclusive group</p>
            </div>
            </a>
                {/* <p className="text-3xl text-center font-semibold">Join the offer now</p> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StandFor;
