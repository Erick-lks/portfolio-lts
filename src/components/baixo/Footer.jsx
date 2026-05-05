import { useState } from "react";

export default function Footer() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
  };

  return (
    <div className="mr-50">
      <section id="contato" className="scroll-mt-70">
        <form
          onSubmit={handleSubmit}
          className="bg-amber-50 shadow-md rounded-lg p-6 ml-130 h-150 w-220"
        >
          <h2>Ainda nao Implementado</h2>
          <h2 className="text-2xl font-bold mb-4 text-center">
            Entre em Contato
          </h2>

          <label className="block text-left mb-2 font-medium">Seu Nome</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Digite seu nome"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block text-left mb-2 font-medium">Seu Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu e-mail"
            className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label className="block text-left mb-2 font-medium">Descrição</label>
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Escreva sua mensagem"
            className="w-full p-2 mb-4 border border-gray-300 rounded h-32 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors w-full"
          >
            Enviar
          </button>
          <div className="flex flex-col space-y-3  p-4 rounded-md w-40">
            <a
              href="https://www.linkedin.com/in/erickcaetano/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-colors duration-300 font-semibold"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/Erick-lks"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-colors duration-300 font-semibold"
            >
              GitHub
            </a>
          </div>
        </form>
      </section>
    </div>
  );
}
