const { v4 } = require("uuid");

const Mutation = {
  addAnimal: (
    parent,
    {
      id,
      title,
      image,
      rating,
      price,
      description,
      stock,
      onsale,
      slug,
      category,
    },
    { animals }
  ) => {
    let newAnimal = {
      id: v4(),
      title,
      image,
      rating,
      price,
      description,
      stock,
      onsale,
      slug,
      category,
    };
    animals.push(newAnimal);
    console.log(newAnimal);
    return newAnimal;
  },
  removeAnimal: (parent, { id }, { animals }) => {
    let index = animals.findIndex((animal) => {
      return animal.id === id;
    });
    animals.splice(index, 1);
    return true;
  },
};

module.exports = Mutation;
