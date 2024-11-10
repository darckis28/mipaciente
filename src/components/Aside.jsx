import { FaPen } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import LinkDash from "./LinkDash";

const Aside = () => {
  return (
    <aside className=" [grid-area:aside] bg-gradientApp">
      <ul className="py-2 pl-4">
        <LinkDash href={"/"} icon={<IoHomeSharp />}>
          Inicio
        </LinkDash>
        <LinkDash href={"/"} icon={<FaPen />}>
          Registrar
        </LinkDash>
      </ul>
    </aside>
  );
};
export default Aside;
