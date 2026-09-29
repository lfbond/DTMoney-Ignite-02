import styled from 'styled-components'

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;

  @media (max-width: 768px) {
  margin-top: 2rem;
  padding: 0 1rem;
}
`
export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme['gray-700']};

    &:first-child {
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    &:last-child {
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }

  @media (max-width: 768px) {
  display: block;

  tbody {
    display: block;
  }

  tr {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;

    background-color: ${(props) => props.theme['gray-700']};
    border-radius: 10px;
    padding: 1.25rem;

    & + tr {
      margin-top: 0.75rem;
    }
  }

  td {
    display: block;
    padding: 0;
    background-color: transparent;

    &:first-child {
      grid-column: 1 / -1;
      width: auto;
      font-weight: bold;
    }

    &:nth-child(2) {
      font-weight: bold;
    }

    &:nth-child(3),
    &:nth-child(4) {
      color: ${(props) => props.theme['gray-300']};
      font-size: 0.875rem;
    }

    &:nth-child(4) {
      text-align: right;
    }
  }
}

@media (max-width: 400px) {
  tr {
    grid-template-columns: 1fr;
  }

  td {
    &:nth-child(4) {
      text-align: left;
    }
  }
}
`

interface PriceHighLightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighLight = styled.span<PriceHighLightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme['green-300']
      : props.theme['red-300']};
`
