import * as Dialog from "@radix-ui/react-dialog";
import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButon,
} from "./style";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Nova transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form action="">
          <input type="text" placeholder="Descrição" required />
          <input type="text" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButon variant="income">
              <ArrowCircleUp size={24} /> Entrada
            </TransactionTypeButon>
            <TransactionTypeButon variant="outcome">
              <ArrowCircleDown size={24} /> Saída
            </TransactionTypeButon>
          </TransactionType>

          <button type="submit">Registar</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
