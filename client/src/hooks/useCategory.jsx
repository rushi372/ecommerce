//Utility and api hooks
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //get categories
  const getCategories = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/category/get-all-category`
      );
      setCategories(data?.category);
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
