import React, { useState } from "react";
import { lugares } from "./lugares";
import { div } from "framer-motion/client";

export function AtractivosZona() {
  const [vermas, setVermas] = useState(false);

  return (
    <div
      className="w-full bg-white flex-col flex items-center "
      id="link_turismo"
    >
      <div className="max-w-6xl mx-auto px-6 ">
        <h2 data-aos="fade-up" className="text-4xl text-cyan-900 mb-4">
          Turismo en la zona
        </h2>
        <p data-aos="fade-up" className="text-cyan-800">
          Tomando Los Pilos como centro de operaciones, puedes ir a muchos
          lugares atractivos de la zona.
        </p>

        <section className="py-8  grid md:grid-cols-3   gap-2">
          {lugares.map((item, idx) =>
            idx < 6 ? (
              <div
                data-aos="fade-up"
                key={idx}
                className="flex flex-col mx-2 my-4    "
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="mb-4 object-cover w-full h-64"
                />
                <h3 className="text-xl text-cyan-900 font-bold mb-2">
                  {item.name}
                </h3>
                <p className="text-cyan-800 text-sm">{item.desc}</p>
              </div>
            ) : vermas ? (
              <div
                data-aos="fade-up"
                key={idx}
                className="flex flex-col mx-2 my-4 "
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="mb-4 object-cover w-full h-64"
                />
                <h3 className="text-xl text-cyan-900 font-bold mb-2">
                  {item.name}
                </h3>
                <p className="text-cyan-800 text-sm">{item.desc}</p>
              </div>
            ) : (
              <div key={item.name}></div>
            )
          )}
        </section>
        <div
          className={
            vermas
              ? "w-full py-10 pb-20 flex justify-center"
              : "w-full pb-20 flex justify-center"
          }
        >
          <a
            onClick={() => setVermas(!vermas)}
            className="p-3 px-6 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-md hover:shadow-lg font-semibold"
          >
            {vermas ? (
              <p>Quiero ver menos</p>
            ) : (
              <p>Descubre mas lugares que visitar</p>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
