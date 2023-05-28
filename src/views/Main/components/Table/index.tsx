import { useState } from "react";
import "./Table.scss";
import { useAppSelector } from "../../../../hooks/reduxHooks";
import { selectTerm } from "../../../../redux/clientsSlice";
import ClientsTable from "../ClientsTable";
import InputsRow from "../InputsRow";

const Table = () => {
  const [adding, setAdding] = useState(false);

  const term = useAppSelector(selectTerm);

  const addingClose = () => {
    setAdding((prev) => !prev);
  };

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
