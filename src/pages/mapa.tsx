import { Navbar } from "../components/Navbar";
import { TabelaDevices } from "../components/TabelaDevices";

export const Mapa = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-stone-900 m-screen">
        <br />
        <br />
        <div className="flex">
          <div className="flex-1 w-3/5 bg-white mx-6 h-full">
            <img className="m-auto" src="src\assets\image.png" alt="Mapa da fabrica" />
          </div>
          <div className="flex-2 w-2/5 bg-slate-50 mr-6 h-full">
            <div className="bg-stone-900 h-16">
                <ul className="flex text-white text-center">
                    <li className="flex-1 p-3">Fábrica Campinas</li>
                    <li className="flex-1 p-3">Dia 25/03</li>
                    <li className="flex-1 p-3">17:15</li>
                </ul>
            </div>
            <div className="flex w-full">
              <div className="overflow-x-auto m-12 border-slate-600">
                <TabelaDevices />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};