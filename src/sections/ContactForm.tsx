"use client";
export function ContactForm() {
  return (
    <form>
      <input
        type="text"
        placeholder="Tu nombre"
        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <input
        type="email"
        placeholder="Tu correo"
        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      />
      <textarea
        placeholder="Tu mensaje"
        rows={4}
        className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
      ></textarea>
      <button
        type="submit"
        className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white hover:from-cyan-400 hover:to-cyan-500 transition-all shadow-md hover:shadow-lg font-semibold"
      >
        Enviar mensaje
      </button>
    </form>
  );
}
