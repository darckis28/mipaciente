import Button from "./Button";
import InputStyle from "./InputStyle";
import { FaAddressCard } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

import { useContextRegister } from "../hooks/useContextRegister";
import { useContextGlobal } from "../hooks/useContextGlobal";

const FromRegister = () => {
  const { dispatchClients } = useContextGlobal();
  const { pacient, setPacient } = useContextRegister();
  function handelSubmit(e) {
    e.preventDefault();
    dispatchClients({ type: "ADD", payload: pacient });
    setPacient({
      nombres: "",
      apellidoMaterno: "",
      apellidoPaterno: "",
      dni: "",
      direccion: "",
    });
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPacient((prevData) => ({
      ...prevData,
      [name]: value.toUpperCase(),
    }));
  };
  return (
    <form className="max-w-96 mx-auto mt-10" onSubmit={handelSubmit}>
      <legend className="mb-4 text-center font-bold text-2xl text-colorSecundary">
        Registrar paciente
      </legend>
      <InputStyle
        icon={<FaRegUser />}
        title={"Nombres"}
        name={"nombres"}
        placeholder={"Andres Luis "}
        value={pacient.nombres}
        onChange={handleChange}
      />
      <InputStyle
        icon={<FaRegUser />}
        name={"apellidoPaterno"}
        title={"Primer Apellido"}
        placeholder={"Hurtado "}
        onChange={handleChange}
        value={pacient.apellidoPaterno}
      />
      <InputStyle
        icon={<FaRegUser />}
        name={"apellidoMaterno"}
        title={"Segundo Apellido"}
        placeholder={"Quizpe "}
        onChange={handleChange}
        value={pacient.apellidoMaterno}
      />
      <InputStyle
        icon={<FaAddressCard />}
        title={"DNI"}
        name={"dni"}
        placeholder={"75151515 "}
        type={"number"}
        onChange={handleChange}
        value={pacient.dni}
      />
      <InputStyle
        icon={<FaAddressCard />}
        title={"direccion"}
        name={"direccion"}
        placeholder={"av. Los laureles 335 "}
        onChange={handleChange}
        value={pacient.direccion}
      />

      <Button>Registrar</Button>
    </form>
  );
};
export default FromRegister;
