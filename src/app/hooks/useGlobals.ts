import { createContext, useContext } from "react";
import { Member } from "../../lib/types/member";

interface GlobalInterface {         // 1- interface orqali typelarni xosil qilamiz
  authMember: Member | null;
  setAuthMember: (member: Member | null) => void;
  orderBuilder: Date;
  setOrderBuilder: (input: Date) => void;
}

export const GlobalContext = createContext<GlobalInterface | undefined>(undefined);  // 2 - yuqoridagi interface orqali GlobalContextni xosil qilamiz

export const useGlobals = () => { /// 3 - GlobalContext ni useGlobals nomi bn export qilamiz
  const context = useContext(GlobalContext);

  if (context === undefined) throw new Error("useGlobals without Provider");

  return context; 
}; // ContextProvider.ts ni ichida ishlatamiz