import WhatWeOfferComp from "./WhatWeOfferComp";
import eductaion from "./data-analytics.png";
import trading from "./trader.png";
import support from "./help.png";
import tel from "/telegram.png"
const WorkData = [
  {
    id: "01",
    workImage: trading,
    workTitle: "Daily Trading Insights",
    content: `Receive daily market analysis, hot stock picks, and trend forecasts right in your inbox.`,
    idSelector: ` flex sm:flex-row flex-col `,
    numcolor:`text-[#35B5FC]`,
    titlecolor:"text-[#00C36C]"
  },
  {
    id: "02",
    workImage: eductaion,
    workTitle: "Educational Resources",
    content: `Access a wealth of trading resources, including articles, webinars, and video tutorials.`,
    idSelector: ` flex flex-col sm:flex-row-reverse`,
    numcolor:`text-[#00C36C]`,
    titlecolor:"text-[#35B5FC]"
  },
  {
    id: "03",
    workImage: support,
    workTitle: "Community Support",
    content: `Join our vibrant trading community, connect with like-minded traders, and share your experiences. `,
    idSelector: ` flex sm:flex-row flex-col `,
    numcolor:`text-[#35B5FC]`,
    titlecolor:"text-[#00C36C]"
  },
];

const Work = () => {
  return (
    <div className="bg-[#F8F9FA] pt-[100px]">
    <div className="container">
      <div className=" mx-auto">
        <div className=" flex justify-center">
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
              <path
                d="M8,3 L8,3.5 C8,4.32842712 8.67157288,5 9.5,5 L14.5,5 C15.3284271,5 16,4.32842712 16,3.5 L16,3 L18,3 C19.1045695,3 20,3.8954305 20,5 L20,21 C20,22.1045695 19.1045695,23 18,23 L6,23 C4.8954305,23 4,22.1045695 4,21 L4,5 C4,3.8954305 4.8954305,3 6,3 L8,3 Z"
                fill="#00C36C"
                opacity="0.3"
              ></path>{" "}
              <path
                d="M11,2 C11,1.44771525 11.4477153,1 12,1 C12.5522847,1 13,1.44771525 13,2 L14.5,2 C14.7761424,2 15,2.22385763 15,2.5 L15,3.5 C15,3.77614237 14.7761424,4 14.5,4 L9.5,4 C9.22385763,4 9,3.77614237 9,3.5 L9,2.5 C9,2.22385763 9.22385763,2 9.5,2 L11,2 Z"
                fill="#00C36C"
              ></path>{" "}
              <rect
                fill="#00C36C"
                opacity="0.3"
                x="10"
                y="9"
                width="7"
                height="2"
                rx="1"
              ></rect>{" "}
              <rect
                fill="#00C36C"
                opacity="0.3"
                x="7"
                y="9"
                width="2"
                height="2"
                rx="1"
              ></rect>{" "}
              <rect
                fill="#00C36C"
                opacity="0.3"
                x="7"
                y="13"
                width="2"
                height="2"
                rx="1"
              ></rect>{" "}
              <rect
                fill="#00C36C"
                opacity="0.3"
                x="10"
                y="13"
                width="7"
                height="2"
                rx="1"
              ></rect>{" "}
              <rect
                fill="#00C36C"
                opacity="0.3"
                x="7"
                y="17"
                width="2"
                height="2"
                rx="1"
              ></rect>{" "}
              <rect
                fill="#00C36C"
                opacity="0.3"
                x="10"
                y="17"
                width="7"
                height="2"
                rx="1"
              ></rect>{" "}
            </g>{" "}
          </svg>
        </div>
        <div className="text-center">
          <div className="text-3xl sm:text-5xl py-1 sm:py-2 font-bold text-center text-[#495057]">
            What You Get With Our <br />
            Free Membership?
          </div>
        </div>
        <div className="flex flex-col gap-2 sm:gap-3 py-28">
          {WorkData.map((data) => {
            return <WhatWeOfferComp key={data.id} {...data} />;
          })}
      <div className="flex justify-center pt-5">
      <a className="button-3  px-4 py-2" href="https://t.me/+wzWxNqcChlwwZWY1" target="_blank" rel="noreferrer">
            <div className="flex flex-row gap-4 justify-center items-center">
              <img src={tel} alt="" className="w-[40px]" />
              <p className="sm:text-3xl text-xl">Join the exclusive group</p>
            </div>
            </a>
      </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Work;

/* CSS */
