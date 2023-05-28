import { useAppDispatch, useAppSelector } from "../../../../hooks/reduxHooks";
import { selectClients, setIsOnlineData } from "../../../../redux/clientsSlice";
import "./ClientsTable.scss";

const ClientsTable = () => {
  const clients = useAppSelector(selectClients);

  const dispatch = useAppDispatch();
  const setIsOnline = (id: string) => {
    dispatch(setIsOnlineData(id));
  };

  return (
    <>
      {clients.map((client) => (
        <div
          key={Math.random()}
          className="tableRow"
          onClick={() => setIsOnline(client.id)}
        >
          <div className="tableItem id">{client.id}</div>
          <div className="tableItem client">{client.client}</div>
          <div className="tableItem pickup">{client.pickup}</div>
          <div className="tableItem dropoff">{client.dropoff}</div>
          <div className="tableItem courier">{client.courier}</div>
          <div
            className={`tableItem status ${
              client.isOnline ? "online" : "offline"
            }`}
          >
            {client.isOnline ? "online" : "offline"}
          </div>
        </div>
      ))}
    </>
  );
};

export default ClientsTable;
