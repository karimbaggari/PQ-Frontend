import parse from 'html-react-parser'

const FeedbackCard = ({ content, name, img }) => (
  <div className="flex justify-between px-10 py-12 rounded-[20px] flex-col max-w-[370px] max-h-[400px] relative md:mr-10 sm:mr-5 mr-0 my-10 feedback-card bg-indigo-900" >
    <div className="w-[78%] h-[30px] flex mb-12 -mt-4 justify-center absolute">
      {parse(img)}
    </div>
    <div className="w-full flex justify-center mt-4 h-full items-start">
      {name}
    </div>
    <p className="font-poppins font-normal text-[18px] leading-[22.4px] text-white my-10 flex  flex-col justify-end h-full">
      {content}
    </p>
    <div class="flex flex-col sm:flex-row sm:justify-center lg:justify-center">
      <a href="#" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-indigo-900 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">Learn More</a>
    </div>
  </div>
);


export default FeedbackCard;