import defenseIcon from "../assets/defense.png";
import attackIcon from "../assets/attack.png";
import healthIcon from "../assets/health.png";
import heightIcon from "../assets/height.png";
import weightIcon from "../assets/weight.png";
import typesIcon from "../assets/pokeball-black.png";

export const statsData = [
  [typesIcon, "types", "right"],
  [heightIcon, "height", "right"],
  [weightIcon, "weight", "right"],
  [attackIcon, "attack"],
  [defenseIcon, "defense"],
  [healthIcon, "health"],
];

export const pokemonTypes = [
  { value: "all", label: "All" },
  { value: "poison", label: "Poison" },
  { value: "grass", label: "Grass" },
  { value: "ghost", label: "Ghost" },
  { value: "rock", label: "Rock" },
  { value: "fighting", label: "Fighting" },
  { value: "fairy", label: "Fairy" },
  { value: "steel", label: "Steel" },
  { value: "ice", label: "Ice" },
  { value: "ground", label: "Ground" },
  { value: "psychic", label: "Psychic" },
  { value: "electric", label: "Electric" },
  { value: "dark", label: "Dark" },
  { value: "normal", label: "Normal" },
  { value: "bug", label: "Bug" },
  { value: "water", label: "Water" },
  { value: "dragon", label: "Dragon" },
  { value: "flying", label: "Flying" },
  { value: "fire", label: "Fire" },
];

export const customSelectStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid #393298",
    color: state.isSelected ? "#ffce31" : "#393298",
    backgroundColor: state.isSelected ? "#393298" : "#f5eeeefa",
    padding: "1rem",
  }),
  control: () => ({
    display: "flex",
    color: "#393298",
    border: "0.1rem solid #393298",
    borderRadius: "50px",
    height: "3rem",
    width: "15rem",
    fontSize: "1.25rem",
    fontWeight: 700,
    lineHeight: "1.5rem",
    padding: "0.5rem 1rem",
  }),
  placeholder: () => ({
    color: "#393298",
    fontSize: "1.25rem",
    fontWeight: 700,
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "#f5eeeefa",
    border: "0.1rem solid #393298 ",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "black",
    display: "flex",
    border: "none",
  }),
  input: () => ({
    color: "#393298",
    fontSize: "1.25rem",
    fontWeight: 700,
  }),
  singleValue: () => ({
    color: "#393298",
    fontSize: "1.25rem",
    fontWeight: 700,
  }),
};
