const filterItemsByName = (items, string) => {
  return items.filter((itm) => {
    // дальше фильтруем наш массив с объектами
    const searchValue = itm.title.toLowerCase(); // свойство title у объектов в массиве переводим в малый регистр
    return searchValue.indexOf(string) !== -1; // если в страке searchValue присутствует то что ввёл пользователь тогда мы возвращаем true
  });
};

export default filterItemsByName;
