import "./Search.scss";
import { ReactComponent as LupaIcon } from "../../assets/lupa.svg";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { setClientsSearchData, setTermData } from "../../redux/clientsSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  const setTerm = (term: string) => {
    dispatch(setTermData(term));
  };

  const setSearch = (term: string) => {
    dispatch(setClientsSearchData(term));
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setTerm(event.currentTarget.value);
    setSearch(event.currentTarget.value);
  };

  return (
    <div className="search">
      <LupaIcon className="icon" />
      <input
        className="searchInput"
        onChange={handleChange}
        placeholder="Search package, client or courier"
      />
    </div>
  );
};

export default Search;
