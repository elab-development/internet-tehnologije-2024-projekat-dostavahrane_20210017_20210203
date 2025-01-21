import { useState, useMemo } from "react";

const useMenu = (dishes, itemsPerPage) => {
 
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [priceFilter, setPriceFilter] = useState({ min: "", max: "" });
  const [currentPage, setCurrentPage] = useState(1);

 
  const processedDishes = useMemo(() => {
    let result = [...dishes];

    
    if (searchQuery) {
      result = result.filter((dish) =>
        dish.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    
    const minPrice = priceFilter.min ? parseFloat(priceFilter.min) : 0;
    const maxPrice = priceFilter.max ? parseFloat(priceFilter.max) : Infinity;

    result = result.filter((dish) => dish.price >= minPrice && dish.price <= maxPrice);

   
    result.sort((a, b) => {
      if (sortOption === "price-asc") {
        return a.price - b.price;
      }
      if (sortOption === "price-desc") {
        return b.price - a.price;
      }
      if (sortOption === "name-asc") {
        return a.name.localeCompare(b.name);
      }
      if (sortOption === "name-desc") {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });

    return result;
  }, [dishes, searchQuery, priceFilter, sortOption]);

  
  const totalPages = Math.ceil(processedDishes.length / itemsPerPage);
  const paginatedDishes = processedDishes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return {
    paginatedDishes,
    totalPages,
    currentPage,
    setCurrentPage,
    sortOption,
    setSortOption,
    searchQuery,
    setSearchQuery,
    priceFilter,
    setPriceFilter,
  };
};

export default useMenu;
