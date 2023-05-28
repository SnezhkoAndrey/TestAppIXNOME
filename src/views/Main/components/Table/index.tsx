import { useEffect, useState } from "react";
import "./Table.scss";
import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { selectTerm, setClientsStorage } from "../../../../redux/clientsSlice";
import ClientsTable from "../ClientsTable";
import InputsRow from "../InputsRow";
import { ClientsType } from "../../../../types/types";

const Table = () => {
  const [adding, setAdding] = useState(false);

  const term = useAppSelector(selectTerm);

  const addingClose = () => {
    setAdding((prev) => !prev);
  };

  const dispatch = useAppDispatch();
  const setClients = (clients: ClientsType[]) => {
    dispatch(setClientsStorage(clients));
  };

  useEffect(() => {
    const clients = JSON.parse(
      localStorage.getItem("clients") as string
    ) as ClientsType[];
    if (clients) {
      setClients(clients);
    }
  }, []);

  return (
    <>
      <div className="table">
        <div className="tableHeader">
          <div className="tableItem id">ID</div>
          <div className="tableItem client">Client</div>
          <div className="tableItem pickup">Pickup Address</div>
          <div className="tableItem dropoff">Dropoff Address</div>
          <div className="tableItem courier">Courier</div>
          <div className="tableItem status">Status</div>
          <button className="addButton" onClick={addingClose} disabled={!!term}>
            +
          </button>
        </div>
        <ClientsTable />
      </div>
      {adding && <InputsRow addingClose={addingClose} />}
    </>
  );
};

export default Table;
