import React from "react";

const MagicButton = ({
  title,
  handleClick,
  otherClasses,
}: {
  title: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button className="p-[2px] relative" onClick={handleClick}>
      <div className="absolute inset-0 bg-gradient-to-r from-[#303086] to-[#99509f]" />
      <div className={`px-8 py-2  relative group transition duration-200   ${otherClasses}`}>
        {title}
      </div>
    </button>
  );
};

export default MagicButton;
