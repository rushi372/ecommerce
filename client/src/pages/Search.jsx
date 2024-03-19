import Layout from "../components/Layout/Layout";
import React, { useState, useEffect } from "react";
import { useSearch } from "../context/Search";
import { useNavigate } from "react-router-dom";

//Search page
const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>

          <div className="col-md-15">
            <div className="d-flex flex-wrap">
              {values?.results.map((p) => (
                <div
                  className="card m-2"
                  key={p._id}
                  style={{ width: "18rem" }}
                >
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body mt-1">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-title card-price">
                        {p.price.toLocaleString("en-IN", {
                          style: "currency",
                          currency: "INR",
                        })}
                      </h5>
                    </div>
                  </div>
                  <div className="card-name-price mb-2">
                    <button
                      className="btn btn-primary ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
