import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const CardPet = ({ id, image, name, age, gender }) => {
  return (
    <>
      <Link to={`${id}`}>
        <div className="cursor-pointer">
          {/* image */}
          <div className="w-44 mx-auto rounded-full h-44 mb-8 border-2 border-[#3C424C]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-full "
            />
          </div>
          <h4 className="text-[#3C424C] text-lg font-bold text-center capitalize mb-1">
            {name}
          </h4>
          <div className="text-[#979797] flex justify-center gap-4">
            <p>
              {age}{" "}
              {age >= 4
                ? "th"
                : age == 3
                ? "rd"
                : age == 2
                ? "nd"
                : age === 1
                ? "st"
                : null}
            </p>
            <p>{gender}</p>
          </div>
        </div>
      </Link>
    </>
  );
};
