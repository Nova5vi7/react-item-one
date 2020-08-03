import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Items from "./Items";
import Input from "./Input";
import Pagination from "./Pagination";
import filterItemsByName from "./helpers/filter-items-by-name";

const App = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const [items, setItems] = useState([]);
  const [searchString, setSearchString] = useState("");
  const [filterItems, setFilterItems] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [curentPage, setCurentPage] = useState(1);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())

      .then((result) => {
        setLoaded(true);
        setItems(result);
        setFilterItems(filterItemsByName(result, searchString));
      })
      .catch((error) => {
        setLoaded(true);
        setError(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    setFilterItems(filterItemsByName(items, searchString));
  }, [searchString]);

  const handlSearch = (e) => {
    const searchQuery = e.target.value.toLowerCase(); // что-бы поиск не зависил от регистра значение в инпуте переводим в малый регистр
    setSearchString(searchQuery);
  };

  const handlPerPage = (e) => {
    setPerPage(e.target.value);
  };

  const handlCurentPage = (e) => {
    setCurentPage(e.target.value);
  };

  const resultDataPager = (items, page = 1, perPage = 10) => {
    return items.slice((page - 1) * perPage, page * perPage);
  };

  if (error) {
    return <p> Error {error.message} </p>;
  } else if (!isLoaded) {
    return <p> Loading... </p>;
  } else {
    return (
      <div>
        <Pagination
          onChange={handlCurentPage}
          value={curentPage}
          label="Curent Page"
          items={resultDataPager(filterItems, curentPage, perPage)}
        />
        <hr />
        <Input onChange={handlSearch} value={searchString} label="Search" />

        <Items items={resultDataPager(filterItems, curentPage, perPage)} />
      </div>
    );
  }
};

export default App;
