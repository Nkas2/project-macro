import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { pets as data } from "../../data/pet";
import { useEffect, useState } from "react";
import { CardPet } from "../components/items/CardPet";
import { Footer } from "../components/Footer";

export const Adoption = () => {
  const [pets, setPets] = useState([]);
  const [filter, setFilter] = useState({
    scoottishFold: false,
    siamese: false,
    abyssinians: false,
    somali: false,
    anggora: false,
    abuAbu: false,
    orange: false,
    coklat: false,
    hitam: false,
  });

  const filterPets = () => {
    let filteredPets = data.filter((pet) => {
      return (
        (!filter.scoottishFold || pet.type === "Scottish fold") &&
        (!filter.siamese || pet.type === "siamese") &&
        (!filter.abyssinians || pet.type === "abyssinians") &&
        (!filter.somali || pet.type === "somali") &&
        (!filter.anggora || pet.type === "anggora") &&
        (!filter.abuAbu || pet.color === "abu-abu") &&
        (!filter.orange || pet.color === "orange") &&
        (!filter.coklat || pet.color === "coklat") &&
        (!filter.hitam || pet.color === "hitam")
      );
    });
    setPets(filteredPets);
  };

  const check = (e) => {
    const { name, checked } = e.target;
    setFilter({ ...filter, [name]: checked });
  };
  useEffect(() => {
    filterPets();
  }, [filter]);

  // useEffect(() => {
  //   setPets(data);
  // }, []);

  const showCard = () =>
    pets.map((pet) => (
      <CardPet
        key={pet.id}
        id={pet.id}
        image={pet.image}
        age={pet.age}
        name={pet.name}
        gender={pet.gender}
      />
    ));

  return (
    <div className="w-full min-h-screen bg-[#FFF5F0]">
      <div className="max-w-[1250px] min-h-screen flex mx-auto">
        {/* kategori */}
        <div className="w-56 top-5 mt-6 sticky h-fit">
          <h1 className="text-[#3C424C] text-2xl font-bold mb-7">Kategori</h1>
          <ChakraProvider>
            <Accordion allowMultiple className="flex flex-col gap-5">
              <AccordionItem border={"none"}>
                <h2 className="bg-[#FFCC81] text-[#3C424C] text-lg font-bold rounded-lg border border-[#3C424C]">
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Jenis
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pl={1} pb={0} className="bg-[#FFF5F0]">
                  <Stack spacing={"5px"}>
                    <Checkbox
                      size={"md"}
                      borderColor={"gray.700"}
                      colorScheme="gray"
                      spacing={"5"}
                      name="scoottishFold"
                      onChange={check}
                    >
                      <p className="text-[#3C424C] text-xl font-medium">
                        Scottish fold
                      </p>
                    </Checkbox>
                    <Checkbox
                      size={"md"}
                      borderColor={"gray.700"}
                      colorScheme="gray"
                      spacing={"5"}
                      name="siamese"
                      onChange={check}
                    >
                      <p className="text-[#3C424C] text-xl font-medium">
                        Siamese
                      </p>
                    </Checkbox>
                    <Checkbox
                      size={"md"}
                      borderColor={"gray.700"}
                      colorScheme="gray"
                      spacing={"5"}
                      name="abyssinians"
                      onChange={check}
                    >
                      <p className="text-[#3C424C] text-xl font-medium">
                        Abyssinians
                      </p>
                    </Checkbox>
                    <Checkbox
                      size={"md"}
                      borderColor={"gray.700"}
                      colorScheme="gray"
                      spacing={"5"}
                      name="somali"
                      onChange={check}
                    >
                      <p className="text-[#3C424C] text-xl font-medium">
                        Somali
                      </p>
                    </Checkbox>
                    <Checkbox
                      size={"md"}
                      borderColor={"gray.700"}
                      colorScheme="gray"
                      spacing={"5"}
                      name="anggora"
                      onChange={check}
                    >
                      <p className="text-[#3C424C] text-xl font-medium">
                        Anggora
                      </p>
                    </Checkbox>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border={"none"}>
                <h2 className="bg-[#FFCC81] text-[#3C424C] text-lg font-bold rounded-lg border border-[#3C424C]">
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Warna
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pl={1} pb={0}>
                  <Stack spacing={"5px"}>
                    <Checkbox
                      size={"md"}
                      borderColor={"gray.700"}
                      colorScheme="gray"
                      spacing={"5"}
                      name="abuAbu"
                      onChange={check}
                    >
                      <p className="text-[#3C424C] text-xl font-medium">
                        Abu - Abu
                      </p>
                    </Checkbox>
                    <Checkbox
                      size={"md"}
                      borderColor={"gray.700"}
                      colorScheme="gray"
                      spacing={"5"}
                      name="orange"
                      onChange={check}
                    >
                      <p className="text-[#3C424C] text-xl font-medium">
                        Orange
                      </p>
                    </Checkbox>
                    <Checkbox
                      size={"md"}
                      borderColor={"gray.700"}
                      colorScheme="gray"
                      spacing={"5"}
                    >
                      <p className="text-[#3C424C] text-xl font-medium">
                        Coklat
                      </p>
                    </Checkbox>
                    <Checkbox
                      size={"md"}
                      borderColor={"gray.700"}
                      colorScheme="gray"
                      spacing={"5"}
                    >
                      <p className="text-[#3C424C] text-xl font-medium">
                        Hitam
                      </p>
                    </Checkbox>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border={"none"}>
                <h2 className="bg-[#FFCC81] text-[#3C424C] text-lg font-bold rounded-lg border border-[#3C424C]">
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Usia
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pl={1} pb={0} className="bg-[#FFF5F0]">
                  <Stack spacing={"5px"}>
                    <Checkbox
                      size={"md"}
                      borderColor={"gray.700"}
                      colorScheme="gray"
                      spacing={"5"}
                    >
                      <p className="text-[#3C424C] text-xl font-medium">
                        1 - 3
                      </p>
                    </Checkbox>
                    <Checkbox
                      size={"md"}
                      borderColor={"gray.700"}
                      colorScheme="gray"
                      spacing={"5"}
                    >
                      <p className="text-[#3C424C] text-xl font-medium">
                        4 - 6
                      </p>
                    </Checkbox>
                    <Checkbox
                      size={"md"}
                      borderColor={"gray.700"}
                      colorScheme="gray"
                      spacing={"5"}
                    >
                      <p className="text-[#3C424C] text-xl font-medium">
                        7 {">"}
                      </p>
                    </Checkbox>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </ChakraProvider>
        </div>
        {/* pet */}
        <div className="flex-1 ml-10 grid grid-cols-4 gap-10 pt-20">
          {showCard()}
        </div>
      </div>
      <Footer />
    </div>
  );
};

// let arr = [];
// if (allFalse(filter)) {
//   setPets(data);
//   return;
// }
// data.forEach((pet) => {
//   if (filter.scoottishFold && pet.type === "Scottish fold") {
//     arr.push(pet);
//     return;
//   }
//   if (filter.siamese && pet.type === "siamese") {
//     arr.push(pet);
//     return;
//   }
//   if (filter.abyssinians && pet.type === "abyssinians") {
//     arr.push(pet);
//   }
//   if (filter.somali && pet.type === "somali") {
//     arr.push(pet);
//   }
//   if (filter.anggora && pet.type === "anggora") {
//     arr.push(pet);
//   }
//   if (filter.abuAbu && pet.color === "abu-abu") {
//     arr.push(pet);
//     return;
//   }
//   if (filter.orange && pet.color === "orange") {
//     arr.push(pet);
//     return;
//   }
// });
// setPets(arr);

// const allFalse = (obj) => {
//   for (const key in obj) {
//     if (obj[key] !== false) {
//       return false;
//     }
//   }
//   return true;
// };
