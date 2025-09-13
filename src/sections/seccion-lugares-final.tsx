import React from "react";
import { lugares } from "./lugares";

export function SeccionLugaresFinal() {
  return (
    <div className="w-full bg-white flex-col flex items-center  pt-20">
      <div className="max-w-5xl mx-auto px-6 ">
        <h2 data-aos="fade-up" className="text-4xl text-cyan-900 mb-4">
          Turismo en la zona
        </h2>
        <p data-aos="fade-up" className="text-cyan-800">
          Tomando Los Pilos como centro de operaciones, puedes ir a muchos
          lugares atractivos de la zona.
        </p>

        <section className="py-8 grid md:grid-cols-3 gap-6">
          {lugares.map((item, idx) => (
            <div data-aos="fade-up" key={idx} className="flex flex-col">
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
          ))}
        </section>
      </div>
    </div>
  );
}
