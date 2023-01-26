import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { request } from "../api";
import styled from "styled-components";

function Category() {
  const { data } = useQuery<any>("keys", () => request({ url: "/categories", method: "GET" }));
  console.log("리랜");
  return (
    <Wrapper>
      <h1>카테고리</h1>
      <div className="category-container">
        <ul className="step-one">
          {data?.data.map((e: any, i: number) => (
            <li key={i} className={"sub"}>
              {e["nameKo"]}
              {
                <ul className="step-two">
                  {e["children"].map((e: any, i: number) => (
                    <li key={i}>
                      <h4>{e["nameKo"]}</h4>
                      <ul className="step-three">
                        {e["children"].map((e: any, i: number) => (
                          <li key={i}>{e["nameKo"]}</li>
                        ))}
                      </ul>
                    </li>
                  ))}
                </ul>
              }
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}

export default Category;
const Wrapper = styled.div`


  .category-container {
    position: relative;

    .step-one {
      margin-bottom: 20px;

      .step-two {
        height: 500px;
        position: absolute;
        left: 350px;
        top: 0;
        background-color: lightgray;
        display: flex;
        gap: 5px;
        display: none;
        .step-three {
          display: flex;
          flex-direction: column;
          width: 200px;
          gap: 10px;
        }
      }
    }
    .sub:hover {
      .step-two {
        display: flex;
      }
    }
    .step-one > li:hover {
      border: 1px solid red;
    }
  }
  &:hover {
    .step-one {
      display: block;
    }
  }
`;
