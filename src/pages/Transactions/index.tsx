import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import {
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de uma aplicação mobile</td>
              <td>
                <PriceHighlight variant="income">-1.200€</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>21/08/2024</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de uma aplicação mobile</td>
              <td>
                <PriceHighlight variant="outcome">-1.200€</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>21/08/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  );
}
