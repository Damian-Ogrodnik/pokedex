import axios from "axios";

export const getDamageInfo = async (urlArray) => {
  const strengths = [];
  const weaknesses = [];

  await axios
    .get(urlArray[0].type.url)
    .then(async (response) => {
      await response.data.damage_relations.double_damage_from.forEach(
        ({ name }) => weaknesses.push({ type: { name } })
      );
      await response.data.damage_relations.double_damage_to.forEach(
        ({ name }) => {
          strengths.push({ type: { name } });
        }
      );
    })
    .catch((err) => console.log(err));

  return { strengths, weaknesses };
};
