export default function Instalaciones() {
  return (
    <div className=" py-28 px-6 space-y-20 text-white">
      <div className="container mx-auto p-8 max-w-6xl bg-slate-800">
        <h2 className="text-4xl">Resumen instalaciones y servicios</h2>
        <hr className="my-6" />
        <h2 className="text-3xl font-semibold mb-3">Instalaciones básicas</h2>
        <ol>
          <li className="mb-2">
            <p className="text-base mb-4">
              <strong className="font-bold">
                Recepción / Oficina de administración
              </strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Control de ingreso y salida</li>
              <li className="mb-2">Información turística y mapas</li>
            </ul>
          </li>
          <li className="mb-2">
            <p className="text-base mb-4">
              <strong className="font-bold">Baños y duchas</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Separados por género o familiares</li>
              <li className="mb-2">Duchas con agua caliente</li>
              <li className="mb-2">Lavamanos y espejos</li>
            </ul>
          </li>
          <li className="mb-2">
            <p className="text-base mb-4">
              <strong className="font-bold">Áreas de camping</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                Parcelas delimitadas con pasto, sombra o gravilla
              </li>
              <li className="mb-2">Acceso a electricidad (enchufes seguros)</li>
              <li className="mb-2">Iluminación nocturna</li>
            </ul>
          </li>
          <li className="mb-2">
            <p className="text-base mb-4">
              <strong className="font-bold">Agua potable</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Grifos repartidos en el recinto</li>
              <li className="mb-2">Zona de lavado de loza</li>
            </ul>
          </li>
          <li className="mb-2">
            <p className="text-base mb-4">
              <strong className="font-bold">Manejo de residuos</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">
                Contenedores diferenciados (orgánico, reciclaje)
              </li>
              <li className="mb-2">Puntos de recolección distribuidos</li>
            </ul>
          </li>
          <li className="mb-2">
            <p className="text-base mb-4">
              <strong className="font-bold">Seguridad</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Cercado perimetral</li>
              <li className="mb-2">Señalética de emergencias</li>
              <li className="mb-2">
                Extintores y botiquín de primeros auxilios
              </li>
            </ul>
          </li>
        </ol>
        <hr />
        <h2 className="text-3xl font-semibold mb-3 my-4">
          Servicios complementarios
        </h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong className="font-bold">
              Estacionamiento para autos y camper vans
            </strong>
          </li>
          <li className="mb-2">
            <strong className="font-bold">Quinchos o parrillas</strong> para uso
            compartido
          </li>
          <li className="mb-2">
            <strong className="font-bold">Mesas y bancas de picnic</strong>
          </li>
          <li className="mb-2">
            <strong className="font-bold">Zona de juegos infantiles</strong>
          </li>
          <li className="mb-2">
            <strong className="font-bold">Pequeña tienda o kiosko</strong>{" "}
            (básicos: pan, bebidas, carbón, gas, snacks)
          </li>
          <li className="mb-2">
            <strong className="font-bold">Wi-Fi en sectores comunes</strong>
          </li>
          <li className="mb-2">
            <strong className="font-bold">Lavandería</strong> (lavadoras,
            secadoras o lavaderos grandes)
          </li>
          <li className="mb-2">
            <strong className="font-bold">
              Piscina o acceso seguro al río/lago
            </strong>
          </li>
          <li className="mb-2">
            <strong className="font-bold">
              Iluminación en senderos y áreas comunes
            </strong>
          </li>
        </ul>
        <hr className="my-6" />
        <h2 className="text-3xl font-semibold mb-3">Más allá de lo común</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">
            <strong className="font-bold">Cabañas o domos</strong> para quienes
            no llevan carpa
          </li>
          <li className="mb-2">
            <strong className="font-bold">Zona de glamping</strong> (carpas
            montadas con camas y comodidad extra)
          </li>
          <li className="mb-2">
            <strong className="font-bold">Actividades guiadas</strong> (kayak,
            trekking, cabalgatas)
          </li>
          <li className="mb-2">
            <strong className="font-bold">Espacios para mascotas</strong>
          </li>
          <li className="mb-2">
            <strong className="font-bold">
              Salón multiuso / comedor techado
            </strong>
          </li>
          <li className="mb-2">
            <strong className="font-bold">Sauna o hot tubs rústicos</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}
