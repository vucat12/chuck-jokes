import axios from "axios";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.chucknorris.io/jokes/categories")
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <div>
      <div className="top-nav"></div>
      <div className="background"></div>
      <div className="list-categories">
        <div className="container">
          {categories.map((category) => (
            <div className="category item font-large" key={category}>
              {String(category).toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
