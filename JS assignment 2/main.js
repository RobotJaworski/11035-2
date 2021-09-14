const data = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    hair_color: "blond",
    skin_color: "fair",
    eye_color: "blue",
    birth_year: "19BBY",
    gender: "male",
  },
  {
    name: "C-3PO",
    height: "167",
    mass: "75",
    hair_color: "n/a",
    skin_color: "gold",
    eye_color: "yellow",
    birth_year: "112BBY",
    gender: "n/a",
  },
  {
    name: "R2-D2",
    height: "96",
    mass: "32",
    hair_color: "n/a",
    skin_color: "white, blue",
    eye_color: "red",
    birth_year: "33BBY",
    gender: "n/a",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    hair_color: "none",
    skin_color: "white",
    eye_color: "yellow",
    birth_year: "41.9BBY",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    hair_color: "brown",
    skin_color: "light",
    eye_color: "brown",
    birth_year: "19BBY",
    gender: "female",
  },
];
var newArr = [];
var filteredArr = [];

let choice = parseInt(
  prompt(
    "1. Gender : Male characters\n 2. Gender : Female characters\n 3. Gender : N/A characters \n 4. characters whose height is greater than 150"
  )
);

const male_char = (item) => {
  if (item.gender == "male") {
    return item.name;
  }
};

const female_char = (item) => {
  if (item.gender == "female") {
    return item.name;
  }
};

const NA_char = (item) => {
  if (item.gender == "n/a") {
    return item.name;
  }
};

const height_char = (item) => {
  if (item.height > 150) {
    return item.name;
  }
};

const anti_undefined = (item) => {
  if (typeof item !== "undefined") {
    return item;
  }
};

switch (choice) {
  case 1:
    newArr = data.map(male_char).filter(anti_undefined);
    // filteredArr = newArr
    alert(newArr);
    break;
  case 2:
    newArr = data.map(female_char);
    filteredArr = newArr.filter(anti_undefined);
    alert(filteredArr);
    break;
  case 3:
    newArr = data.map(NA_char);
    filteredArr = newArr.filter(anti_undefined);
    alert(filteredArr);
    break;
  case 4:
    newArr = data.map(height_char);
    filteredArr = newArr.filter(anti_undefined);
    alert(filteredArr);
    break;
}

console.log(filteredArr);
