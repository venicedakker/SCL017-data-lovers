const pokemons = {

  sortData: (data, sortBy, sortOrder) => {
    // Funcion para ordenar ascendente y descendente la data entregada
    // sortOrder: "upwardFilter" or "downwardFilter"
    // sortBy: "name","num"

    let sortDirection;

    if (sortOrder == "upwardFilter") {
      sortDirection = false;
    }

    if (sortOrder == "downwardFilter") {
      sortDirection = true;
    }

    return data.sort((object1, object2) => {
      return compareObjects(object1, object2, sortBy, sortDirection);

    })
  },

  filterData: (data, condition) => {
    //Funcion que encuentra/filtra segun la condicion ciertos pokemon
    // ie. condition = ["type","water"];

    if (condition[0] == "type") {
      const filteredTypesPokemon = data.filter(row => row.type.some(element => condition.includes(element)));
      return filteredTypesPokemon;

    }
    if (condition[0] == "weaknesses") {
      const filteredWeaknesses = data.filter(row => row.weaknesses.some(element => condition.includes(element)));
      return filteredWeaknesses;

    }
    if (condition[0] == "resistant") {
      const filteredResistant = data.filter(row => row.resistant.some(element => condition.includes(element)));
      return filteredResistant;
    }
    if (condition[0] == "generation") {
      const filteredGeneration = data.filter(row => condition.includes(row.generation.name));
      return filteredGeneration;
    }
  },

  findData: (pokeArrayName, nombrePoke) => {
    //Funcion que segun lo que busca los pokemon segun lo que el usuario escriba en el buscador 
    const filterPoke = pokeArrayName.filter(pokeArrayName => pokeArrayName.toLowerCase().includes(nombrePoke.toLowerCase()));
    return filterPoke;
  }
}

function compareObjects(object1, object2, key, direction) {

  const obj1 = object1[key].toUpperCase();
  const obj2 = object2[key].toUpperCase();

  let score = 1;

  if (direction) {
    score *= -1;
  }

  if (obj1 > obj2) {
    return score;
  }

  if (obj1 < obj2) {
    return -score;
  }

  return 0;
}

export default pokemons
