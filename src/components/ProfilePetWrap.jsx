import { useState } from "react";
import { AddPetForm } from "./FormAddPet";

export const PetWrap = () => {
  const [pet, setPet] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const createPet = (data) => {
    const { name, imge } = data;
    setPet((prev) => [
      ...prev,
      {
        name,
        image: imge,
      },
    ]);
    setShowForm(false);
  };

  return (
    <div className="w-full p-8 bg-[#FFFBFA] border border-[#ECECEC] min-h-[500px] rounded-[15px]">
      <h1 className="text-[#3C424C] font-bold text-2xl">Profile Hewan</h1>
      {/* <NoPet /> */}
      {showForm ? (
        <AddPetForm onclose={() => setShowForm(false)} funca={createPet} />
      ) : null}
      {pet.length === 0 ? (
        <NoPet onclick={() => setShowForm(true)} />
      ) : (
        <Pet onclick={() => setShowForm(true)} pets={pet} />
      )}
    </div>
  );
};

const NoPet = ({ onclick }) => {
  return (
    <div className="w-full min-h-[500px] flex justify-center items-center">
      <div className="text-[#3C424C]">
        <h1 className="text-center text-2xl font-bold mb-4">
          Siap untuk memulai ?
        </h1>
        <p className="text-base text-center mb-4">
          Bantu kucing menemukan rumahnya dengan cara <br /> membuat profile
          hewan untuk diadopsi
        </p>
        <div className="flex justify-center mb-4">
          <button
            onClick={onclick}
            className="w-[307px] h-[63px] bg-[#FFCC81] rounded-[20px] text-2xl font-bold"
          >
            Mulai
          </button>
        </div>
      </div>
    </div>
  );
};

const Pet = ({ onclick, pets }) => {
  const pet = pets;
  return (
    <>
      <div className="w-full min-h-[400px] grid grid-cols-5 mt-5">
        {pet.map((p, i) => (
          <CardPet key={i} name={p.name} image={p.image} />
        ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={onclick}
          className="w-[307px] h-[63px] bg-[#FFCC81] rounded-[20px] text-2xl font-bold"
        >
          Mulai
        </button>
      </div>
    </>
  );
};

const CardPet = ({ name, image }) => {
  return (
    <div className="h-fit flex flex-col items-center gap-3">
      <img
        src={`${image}`}
        className="w-28 h-28 rounded-full border border-[#3C424C] object-cover"
        alt=""
      />
      <h1 className="capitalize text-center text-[#3C424C] text-lg font-bold">
        {name}
      </h1>
    </div>
  );
};
