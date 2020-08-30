import { rem } from 'polished';
import styled from 'styled-components';

const Container = styled.div`
  overflow-x: scroll;
  box-shadow: 1px 2px 4px rgba(30, 30, 30, 0.25);
  margin: 0 0 ${rem('20px')} 0;
`;

const StyledTable = styled.table`
  width: 100%;
  ${(props) => props.theme.fonts.primary};
  th {
    text-align: left;
    background-color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
    vertical-align: middle;
    color: white;
    border-bottom: 3px solid ${(props) => props.theme.colors.secondary};
  }
  tr {
    &:nth-of-type(2n) {
      background: #f8f8f8;
    }
  }
  td {
    font-weight: 400;
  }
  td,
  th {
    padding: 1rem;
  }
  span {
    font-size: 12px;
    color: #34548a;
    vertical-align: middle;
  }
`;

export { StyledTable, Container };
