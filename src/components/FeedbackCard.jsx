import { quotes } from "../assets";
import parse from 'html-react-parser'

const FeedbackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card bg-indigo-900" >
    <div className="w-full h-[30px] flex justify-center">
    { parse(img) }
    </div>
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>
  </div>
);


export default FeedbackCard;