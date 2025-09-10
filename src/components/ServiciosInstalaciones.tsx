import Lists from "./lists";

const courses = [
  "E-Commerce",
  "UI UX Design",
  "Web Development",
  "Creative Design",
  "Mobile App Development",
  "Social Media Marketing",
  "Content Marketing & Advertising",
];

const ServiciosInstalaciones = () => {
  return (
    <div className="my-6  py-20">
      <div className="mx-auto max-w-xl rounded-lg border border-blue-100 bg-white p-10">
        <Lists title="Resumen Servicios e Instalaciones" items={courses} />
      </div>
    </div>
  );
};

export default ServiciosInstalaciones;
