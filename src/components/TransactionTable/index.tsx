import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="title">Desevolvimento de Ecoomerce</td>
            <td className="deposit">R$12000,00</td>
            <td>Desevolvimento</td>
            <td>14/05/2021</td>
          </tr>
          <tr>
            <td className="title">Desevolvimento de Ecoomerce</td>
            <td className="deposit">R$12000,00</td>
            <td>Desevolvimento</td>
            <td>14/05/2021</td>
          </tr>
          <tr>
            <td className="title">Aluguel</td>
            <td className="withdraw"> -R$1200,00</td>
            <td>Desevolvimento</td>
            <td>18/04/2021</td>
          </tr>
          <tr>
            <td className="title">Desevolvimento de Ecoomerce</td>
            <td className="deposit">R$12000,00</td>
            <td>Desevolvimento</td>
            <td>14/05/2021</td>
          </tr>
          <tr>
            <td className="title">Aluguel</td>
            <td className="withdraw"> -R$1200,00</td>
            <td>Desevolvimento</td>
            <td>18/04/2021</td>
          </tr>
          <tr>
            <td className="title">Desevolvimento de Ecoomerce</td>
            <td className="deposit">R$12000,00</td>
            <td>Desevolvimento</td>
            <td>14/05/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
