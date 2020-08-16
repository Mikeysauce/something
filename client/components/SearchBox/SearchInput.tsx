import { StyledInput } from "./styles";

const SearchInput = ({ setSearch, setFocus }) => {
  const handleToggleFocus = () => setFocus((v: boolean) => !v);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.currentTarget.value);
  };
  return (
    <StyledInput
      placeholder="Search"
      onChange={handleChange}
      onFocus={handleToggleFocus}
      onBlur={handleToggleFocus}
    />
  );
};

export { SearchInput };
