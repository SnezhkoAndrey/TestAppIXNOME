import Search from "../../components/Search";
import "./Main.scss";
import { useAppSelector } from "../../hooks/reduxHooks";
import { selectClients } from "../../redux/clientsSlice";
import Table from "./components/Table";

const Main = () => {
  const clients = useAppSelector(selectClients);

  return (
    <main className="main">
      <div className="content">
        <Search />
        <div className="titleContainer">
          <h2 className="title">Packages</h2>
          <div className="entries">{clients.length} entries</div>
        </div>
        <Table />
      </div>
    </main>
  );
};

export default Main;
