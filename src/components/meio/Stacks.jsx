export default function Stacks() {
  return (
    <section id="stacks" className="scroll-mt-[80px] py-20">
      <div className="max-w-8xl mx-auto px-9 flex flex-col md:flex-row gap-10 justify-center">
        <div className="bg-amber-50 flex-1 p-10 rounded-lg shadow-md text-center text-2xl">
          <h2 className="font-bold mb-12 underline text-3xl">Habilidades</h2>

          <div className="flex flex-col md:flex-row gap-10 text-left">
            <div className="flex-1">
              <h4 className="font-semibold mb-2">Soft Skills</h4>
              <ul className="list-disc list-inside">
                <li>Comunicação eficaz</li>
                <li>Trabalho em equipe</li>
                <li>Resolução de problemas</li>
                <li>Proatividade</li>
                <li>Autogerenciamento</li>
                <li>Curiosidade / Sede de aprendizado</li>
              </ul>
            </div>

            <div className="flex-1">
              <h4 className="font-semibold mb-2">Hard Skills</h4>
              <ul className="list-disc list-inside">
                <li>JavaScript</li>
                <li>Spring Boot (Java)</li>
                <li>Autenticação (JWT, OAuth, etc.)</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Git / GitHub / GitLab</li>
                <li>Docker</li>
                <li>Banco de Dados</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 flex-1 p-10 rounded-lg shadow-md text-center text-2xl">
          <h3 className="font-bold mb-4 underline text-3xl">PROJETOS</h3>
          <ul className="list-disc list-inside text-left">
            <li>
              <a
                href="https://gerenciador-de-tarefas-gray.vercel.app/"
                className="hover:underline cursor-pointer text-blue-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                Gerenciador de tarefas
              </a>
            </li>
            <li>
              <a
                href="https://bs-bprecatorio.vercel.app/"
                className="hover:underline cursor-pointer text-blue-600"
              >
                Bsb Precatorio Project
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline cursor-pointer text-blue-600"
              >
                Sistema de Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
