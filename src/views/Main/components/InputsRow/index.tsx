import { useState } from "react";
import "./InputsRow.scss";
import { ClientsType } from "../../../../types/types";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { setClientsData } from "../../../../redux/clientsSlice";
import { INPUTS_FORM_DATA } from "../../../../data/inputsFormData.data";

interface PropsType {
  addingClose: () => void;
}

const InputsRow = ({ addingClose }: PropsType) => {
  const [inputValue, setInputValue] = useState({
    id: "",
    client: "",
    pickup: "",
    dropoff: "",
    courier: "",
    isOnline: true,
  });

  const dispatch = useAppDispatch();
  const setClients = (client: ClientsType) => {
    dispatch(setClientsData(client));
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const name = event.currentTarget.name;
    const value = event.currentTarget.value;
    setInputValue((prev) => ({ ...prev, [name]: value } as ClientsType));
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setClients(inputValue);
    addingClose();
  };

  return (
    <div className="inputsRow">
      <form className="inputsForm" onSubmit={handleSubmit}>
        {INPUTS_FORM_DATA.map((input) => (
          <input
            key={input.name}
            className={`input ${input.name}`}
            name={input.name}
            placeholder={input.placeholder}
            onChange={handleChange}
          />
        ))}
        <button className="addButton">Add</button>
      </form>
    </div>
  );
};

export default InputsRow;
