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
      <div className="background"></div>
      <div className="list-categories container m-auto">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          {categories.map((category) => (
            <div className="category text-3xl" key={category}>
              {String(category).toUpperCase()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
