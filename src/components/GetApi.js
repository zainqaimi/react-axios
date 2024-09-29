import React, { useState } from "react";
import Axios from "axios";
const baseURL = "http://jsonplaceholder.typicode.com/posts";
function GetApi() {
  const [user, setuser] = useState([]);
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState(null);
  const getApi = async () => {
    setloading(true);
    seterr(null);
    try {
      const res = await Axios.get(baseURL);
      if (res.status == 200) {
        setuser(res.data);
      } else {
        seterr(`unepected response status: ${res.status}`);
      }
    } catch (eror) {
      console.log("failed to Fetching data:", eror);
      seterr("Failed to Fetching data Please Try Again!");
    } finally {
      setloading(false);
    }
  };
  return (
    <>
      <button onClick={getApi}>Check Api</button>
      {loading && <p>Loading.....</p>}
      {err && <p>Oop's Some thing Went wrong....</p>}
      {!loading &&
        !err &&
        user.length > 0 &&
        user.map((item) => {
          const {id, title, body} = item;
          return (
            <div key={id}>
              <h1>{id}</h1>
              <h2>{title}</h2>
              <h3>{body}</h3>
            </div>
          );
        })}
      {!loading && !err && user.length === 0 && <p>no data avalaible..</p>}
    </>
  );
}

export default GetApi;
