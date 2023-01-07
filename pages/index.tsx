import { BaseComponent } from "../components";

import { useDispatch, useSelector } from "react-redux";
import { getExampleData } from "../redux/slices/ExampleSlice";
import { AppDispatch } from "../redux/store";

function Home() {
  const dispatch = useDispatch<AppDispatch>();

  const { exampleResp, error } = useSelector((store: any) => store.example);

  const fetchDataFunc = () => {
    dispatch(getExampleData(`${Math.floor(Math.random() * 10) + 1}`));
  };

  return (
    <>
      <BaseComponent text="Component props works" darkmode />

      <button
        className="bg-green-500 text-white rounded-r-full my-6 p-4"
        onClick={fetchDataFunc}
      >
        Click to fetch data
      </button>

      <p>{error ? "Errorrrr!" : exampleResp ? exampleResp.name : ""}</p>
    </>
  );
}

export default Home;
