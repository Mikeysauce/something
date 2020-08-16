import FuzzySearch from "fuzzy-search";

const createSearch = (data: string) => {
  const matchers = ["first_name", "email"];
  const options = {
    caseSensitive: true,
    sort: true,
  };

  const fuzzy = new FuzzySearch(data, matchers, options);
  return fuzzy;
};

export { createSearch };
