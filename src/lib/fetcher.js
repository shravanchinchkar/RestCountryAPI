import originalData from "../../public/originalData.json";
import data from "../../public/landingPageData.json";

export async function getData(value, contitent) {
  await new Promise((resolve) => setTimeout(resolve, 500));

  if ((!value && contitent === "default") || (!value && !contitent)) {
    return data;
  } else if (value) {
    const country = originalData.filter((item) => {
      return item.name.startsWith(
        value.trim().charAt(0).toUpperCase() +
          value.trim().slice(1).toLowerCase()
      );
    });

    console.log("valuee", value);
    console.log("countrrryyyyyy", country);
    return country;
  } else if (contitent) {
    const continentData = originalData.filter((item) => {
      return item.region === contitent;
    });

    return continentData;
  }
}
