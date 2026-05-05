import Lottie from "lottie-react";
import animationData from "../../assets/devpeople.json";
import Informacao from "./Informacao";
import Stacks from "./Stacks";

export default function Body() {
  return (
    <div className="w-full h-full  text-center">
      <div
        className=" pt-28
       text-4xl grid gap-6 font-mono text-white"
      >
        <h2>Bem-vindo ao Meu Portifólio</h2>

        <h3>
          Desenvolvedor Full Stack | React | Node.js | Java | Spring Boot{" "}
        </h3>
        <div className="w-200 mx-auto mt-15 h-180 ">
          <Lottie animationData={animationData} loop={true} />
        </div>
      </div>
      <Informacao />
      //
      <Stacks />
    </div>
    //

    //
  );
}
