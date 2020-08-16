import styled, { css } from "styled-components";
import { rem } from "polished";
interface SearchContainerProps {
  focus?: boolean;
}

const SearchContainer = styled.aside<SearchContainerProps>`
  border: 1px solid #979797;
  border-radius: 4px;
  display: flex;
  align-items: center;
  padding: 0 ${rem("16px")};
  position: relative;
  ${(props) =>
    props.focus &&
    css`
      border: 1px solid ${props.theme.colors.secondary};
    `};
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  caret-color: white;
  color: white;
  font-size: 18px;
  width: 100px;
  ${(props) => props.theme.fonts.primary};
  &::placeholder {
    color: white;
    font-size: 16px;
    font-family: inherit;
    line-height: 16px;
    vertical-align: middle;
  }
`;

const SearchResultsContainer = styled.div`
  position: absolute;
  top: 110%;
  background: #f8f8f8;
  width: 150%;
  left: -50%;
  padding: 1rem;
  box-shadow: 0px 0px 4px rgba(30, 30, 30, 0.2);
  color: black;
`;

export { SearchContainer, StyledInput, SearchResultsContainer };
