import Button from "./Button";

export default function NavBar() {
  return (
    <div className="bg-transparent  p-4 fixed w-full top-0 z-50">
      <div className="flex gap-10 text-2xl text-white justify-center">
        <a href="#informacao">
          <Button>Informação</Button>
        </a>
        <a href="#stacks">
          <Button>Stacks</Button>
        </a>
        <a href="#stacks">
          <Button>Projetos</Button>
        </a>
        <a href="#contato">
          <Button>Contato</Button>
        </a>
      </div>
    </div>
  );
}
