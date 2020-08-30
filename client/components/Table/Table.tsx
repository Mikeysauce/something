import { StyledTable, Container } from './styles';
import React from 'react';
import { format } from 'date-fns';
import Link from 'next/link';

const Table = ({ rows, orders }) => (
  <Container>
    <StyledTable>
      <thead>
        <tr>
          {rows.map((row, key) => (
            <th key={key}>{row}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orders.map(({ products, id, status, total, updated_at }) => (
          <tr key={id}>
            <td>
              <Link href={`/orders/${id}`} passHref>
                <a>{id}</a>
              </Link>
            </td>
            <td>{status}</td>
            <td>{products.length}</td>
            <td>{total}</td>
            <td>
              {format(new Date(updated_at), 'dd/MM/yyyy')}{' '}
              <span>{format(new Date(updated_at), 'hh:mm a')}</span>
            </td>
          </tr>
        ))}
      </tbody>
    </StyledTable>
  </Container>
);

export { Table };
