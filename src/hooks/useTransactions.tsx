import { AxiosResponse } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionProps {
  id?: number;
  title: string;
  type: string;
  category: string;
  value: number;
  createdAt: string;
}

interface TransactionProviderProps {
  children: React.ReactNode;
}

export type TransactionInput = Omit<TransactionProps, "id">;

interface TransactionContextProps {
  transactions: TransactionProps[];
  getAllTransactions: () => void;
  createNewTransactions: (
    data: TransactionInput
  ) => Promise<AxiosResponse<any, any>>;
}

const TransactionContext = createContext<TransactionContextProps>(
  {} as TransactionContextProps
);

export function TransactionProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  const getAllTransactions = () => {
    api
      .get("transactions")
      .then((response) => setTransactions(response.data.transactions));
  };

  const createNewTransactions = (data: TransactionInput) => {
    return api.post("transactions", data);
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <TransactionContext.Provider
      value={{ transactions, getAllTransactions, createNewTransactions }}
    >
      {children}
    </TransactionContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionContext);
  return context;
}
