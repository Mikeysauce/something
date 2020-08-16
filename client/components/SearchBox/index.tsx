import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { SearchContainer, SearchResultsContainer } from "./styles";
import { createSearch } from "./fuzzy";
import { SearchInput } from "./SearchInput";
import { Search as SearchIcon } from "tabler-icons-react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const [focus, setFocus] = useState(false);
  const [fuzzyInstance, setFuzzyInstance] = useState(null);
  const [results, setResults] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const { data } = await axios.get("http://localhost:3000/api/users");
      setFuzzyInstance(createSearch(data));
    }

    if (!fuzzyInstance) fetchUsers();
  }, [fuzzyInstance]);

  useEffect(() => {
    if (search) {
      const fuzzySearchResults = fuzzyInstance.search(search);
      setResults(fuzzySearchResults);
    } else {
      setResults(null);
    }
  }, [search]);

  return (
    <>
      <SearchContainer tabIndex={0} focus={focus}>
        <SearchIcon style={{ marginRight: "1rem" }} />
        <SearchInput setSearch={setSearch} setFocus={setFocus} />
        {results && (
          <SearchResultsContainer>
            {results.map(({ first_name, last_name }, key) => (
              <p key={key}>
                {first_name} {last_name}
              </p>
            ))}
          </SearchResultsContainer>
        )}
      </SearchContainer>
    </>
  );
};
export { SearchBox };
