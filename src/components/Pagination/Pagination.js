/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { IconContext } from "react-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { paginatePokemon } from "../../redux/pagination/paginationUtils";
import { useWindowSize } from "../../custom-hooks";

export const Pagination = ({ pokemonArray }) => {
  const [active, setActive] = useState(1);
  const [pageNumbers, setPageNumbers] = useState([]);
  const [pokemonOnPage, setPokemonOnPage] = useState(10);
  const { windowWidth } = useWindowSize();
  const dispatch = useDispatch();

  useEffect(() => {
    if (windowWidth < 768 && windowWidth > 560) {
      setPokemonOnPage(8);
    } else if (windowWidth < 560) {
      setPokemonOnPage(4);
    } else {
      setPokemonOnPage(10);
    }
  }, [windowWidth]);

  useEffect(() => {
    paginate(1);
  }, [pokemonArray, windowWidth]);

  useEffect(() => {
    const calculatePages = async () => {
      let newArray = [];
      for (
        let i = 1;
        i <= Math.ceil(pokemonArray.length / pokemonOnPage);
        i++
      ) {
        newArray.push(i);
      }
      setPageNumbers(newArray);
    };
    calculatePages();
    setActive(1);
  }, [pokemonArray, pokemonOnPage]);

  const paginate = (pageNumber) => {
    dispatch(paginatePokemon(pageNumber, pokemonArray, pokemonOnPage));
    setActive(pageNumber);
  };

  const pageUp = () => {
    let upNumber =
      active === pageNumbers.length ? pageNumbers.length : active + 1;
    dispatch(paginatePokemon(upNumber, pokemonArray, pokemonOnPage));
    setActive(upNumber);
  };

  const pageDown = () => {
    let downNumber = active - 1 === 0 ? 1 : active - 1;
    dispatch(paginatePokemon(downNumber, pokemonArray, pokemonOnPage));
    setActive(downNumber);
  };

  const renderPagination = () => {
    let start,
      stop = 0;

    if (active < 10) {
      start = 0;
      stop = 10;
    } else if (active > pageNumbers.length - 9) {
      start = pageNumbers.length - 10;
      stop = pageNumbers.length;
    } else {
      start = active - 5 > 0 ? active - 5 : 0;
      stop = active + 5;
    }

    return pageNumbers.slice(start, stop).map((number) => (
      <li
        key={number}
        className={"pagination__item" + (active === number ? " active" : "")}
      >
        <button onClick={() => paginate(number)}>{number}</button>
      </li>
    ));
  };

  const renderIcon = (direction, func) => {
    if (pageNumbers.length > 10)
      return (
        <IconContext.Provider
          value={{ className: `pagination__arrow ${direction}` }}
        >
          {direction === "left" ? (
            <FaArrowLeft onClick={() => func()} />
          ) : (
            <FaArrowRight onClick={() => func()} />
          )}
        </IconContext.Provider>
      );
  };

  return (
    <div className="pagination__wrapper">
      <ul className="pagination">
        {renderIcon("left", pageDown)}
        {renderPagination()}
        {renderIcon("right", pageUp)}
      </ul>
    </div>
  );
};
