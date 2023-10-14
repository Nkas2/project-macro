import { useParams } from "react-router-dom";
import { pets } from "../../data/pet";

export const PetDetail = () => {
  const { id } = useParams();
  return <h1>dawd{id}</h1>;
};
