import { GiDeliveryDrone,GiLaptop,GiHeadphones,GiGameConsole,GiWatch,GiCctvCamera, } from "react-icons/gi";
import { ImMobile } from "react-icons/im";
import { TfiPrinter } from "react-icons/tfi";

const Trending = () => {
  return (
    <div>
      <h2 className="text-center mt-10 mb-2 text-4xl font-bold dark:text-white">
        Top Trending Category
      </h2>
      <p className="text-center dark:text-white">
        Get Your Desired Products from Featured Category!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-10">
        <div className="text-center bg-base-200 py-8 rounded-3xl border border-blue-950 hover:bg-blue-100 flex flex-col items-center">
          <GiDeliveryDrone className="text-6xl mb-4 text-blue-950" />
          <div>
            <h2 className="font-bold">Drone</h2>
          </div>
        </div>
        <div className="text-center bg-base-200 py-8 rounded-3xl border border-blue-950 hover:bg-blue-100 flex flex-col items-center">
          <GiLaptop className="text-6xl mb-4 text-blue-950 " />
          <div>
            <h2 className="font-bold">Laptop</h2>
          </div>
        </div>
        <div className="text-center bg-base-200 p-10 rounded-3xl border border-blue-950 hover:bg-blue-100 flex flex-col items-center">
          <ImMobile className="text-6xl mb-4 text-blue-950 " />
          <div>
            <h2 className="font-bold">Mobile</h2>
          </div>
        </div>
        <div className="text-center bg-base-200 py-8 rounded-3xl border border-blue-950 hover:bg-blue-100 flex flex-col items-center">
          <GiHeadphones className="text-6xl mb-4 text-blue-950 " />
          <div>
            <h2 className="font-bold">HeadPhone</h2>
          </div>
        </div>
        <div className="text-center bg-base-200 py-8 rounded-3xl border border-blue-950 hover:bg-blue-100 flex flex-col items-center">
          <GiGameConsole className="text-6xl mb-4 text-blue-950 " />
          <div>
            <h2 className="font-bold">Gaming Console</h2>
          </div>
        </div>
        <div className="text-center bg-base-200 py-8 rounded-3xl border border-blue-950 hover:bg-blue-100 flex flex-col items-center">
          <GiWatch className="text-6xl mb-4 text-blue-950 " />
          <div>
            <h2 className="font-bold">Smart Watch</h2>
          </div>
        </div>
        <div className="text-center bg-base-200 py-8 rounded-3xl border border-blue-950 hover:bg-blue-100 flex flex-col items-center">
          <GiCctvCamera className="text-6xl mb-4 text-blue-950 " />
          <div>
            <h2 className="font-bold">CC Camera</h2>
          </div>
        </div>
        <div className="text-center bg-base-200 py-8 rounded-3xl border border-blue-950 hover:bg-blue-100 flex flex-col items-center">
          <TfiPrinter className="text-6xl mb-4 text-blue-950 " />
          <div>
            <h2 className="font-bold">Printer</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
