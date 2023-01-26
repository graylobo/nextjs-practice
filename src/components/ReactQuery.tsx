import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";

function ReactQuery() {
  const { isLoading, error, data } = useQuery("fetchLuke", () => axios("http://swapi.dev/api/people/1/"));
  const [loading, setLoading] = useState<any>();
  const [errors, setErrors] = useState<any>();
  const [datas, setDatas] = useState<any>();

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const some = await axios("http://swapi.dev/api/people/1/");
        setDatas(some);
      } catch (err) {
        setErrors(err);
      }
      setLoading(false);
    })();
  });
  return (
    <>
      <div className="App">
        <h1>스타워즈 API와 함께하는 React Query 예제</h1>
        {!!error && <div>뭔가 잘못됐군요 ...</div>}
        {isLoading ? <div>루크 스카이워커의 데이터를 불러옵니다 ...</div> : <pre>{JSON.stringify(data, null, 2)}</pre>}
      </div>
    </>
  );
}

export default ReactQuery;
