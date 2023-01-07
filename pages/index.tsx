import { BaseComponent } from "../components";

function Home() {
  return (
    <>
      <p className="text-blue-500">Home Page</p>

      <BaseComponent text="Component props works" darkmode />
    </>
  );
}

export default Home;
