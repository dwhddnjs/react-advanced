import { useRef, useState } from "react";
import { SearchInput } from "./components/SearchInput";
import { List } from "./components/List";
import { useDebounce } from "./hooks/useDebounce";
import { Modal } from "./components/Modal";

function App() {
  const [searchValue, setSearchValue] = useState(0);

  const debouncedSearchValue = useDebounce(searchValue, 1000);
  const modalRef = useRef() as any;
  const handleOpenModal = () => {
    modalRef.current.openModal();
  };

  return (
    <>
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue} />
      <List searchTerm={debouncedSearchValue} />
      <div className="App1">
        <Modal ref={modalRef} />
        <button onClick={handleOpenModal}>Open</button>
      </div>
    </>
  );
}

export default App;
