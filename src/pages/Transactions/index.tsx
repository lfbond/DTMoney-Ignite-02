import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './SearchForm'
import {
  PriceHighLight,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Hamburger</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 59,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Aluguél do Apartamento</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 1.200,00</PriceHighLight>
              </td>
              <td>Casa</td>
              <td>27/03/2022</td>
            </tr>

            <tr>
              <td width="50%">Computador</td>
              <td>
                <PriceHighLight variant="income">R$ 5.400,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>15/03/2022</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighLight variant="income">R$ 8.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/03/2022</td>
            </tr>

            <tr>
              <td width="50%">Janta</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 39,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Aluguél do Apartamento</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 1.200,00</PriceHighLight>
              </td>
              <td>Casa</td>
              <td>27/02/2022</td>
            </tr>

            <tr>
              <td width="50%">Sálario</td>
              <td>
                <PriceHighLight variant="income">R$ 5.400,00</PriceHighLight>
              </td>
              <td>Salário</td>
              <td>15/02/2022</td>
            </tr>

            <tr>
              <td width="50%">Almoço</td>
              <td>
                <PriceHighLight variant="outcome">- R$ 30,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>05/02/2022</td>
            </tr>

            <tr>
              <td width="50%">Fone de Ouvido</td>
              <td>
                <PriceHighLight variant="income">- R$ 150,00</PriceHighLight>
              </td>
              <td>Itens</td>
              <td>02/02/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
