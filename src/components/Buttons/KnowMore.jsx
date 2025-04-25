import React from 'react'

const KnowMore = ({ text = "More Info", onClick }) => {
  return (
    <div>
       <button
      onClick={onClick}
      className="w-full cursor-pointer max-w-[180px] py-2 uppercase px-6 text-[16px]   text-textmoreinfobtn bg-moreinfobtn hover:bg-hovermoreinfobtn   transition-all duration-600"
    >
      {text}
    </button>
    </div>
  )
}

export default KnowMore
