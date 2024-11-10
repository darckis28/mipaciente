import Button from "./Button";
import InputStyle from "./InputStyle";
import { FaRegUser } from "react-icons/fa";

const FromRegister = () => {
  return (
    <form className="max-w-96 mx-auto">
      <legend>Registrar paciente</legend>
      <InputStyle
        icon={<FaRegUser />}
        name={"Nombres"}
        placeholder={"Andres Luis "}
      />
      <InputStyle
        icon={<FaRegUser />}
        name={"Primer Apellido"}
        placeholder={"Hurtado "}
      />
      <InputStyle
        icon={<FaRegUser />}
        name={"Segundo Apellido"}
        placeholder={"Quizpe "}
      />

      <Button>Registrar</Button>
    </form>
  );
};
export default FromRegister;
