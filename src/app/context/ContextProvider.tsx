import React, {ReactNode, useState} from "react";
import Cookies from "universal-cookie";
import {Member} from "../../lib/types/member";
import {GlobalContext} from "../hooks/useGlobals";


const ContextProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const cookies = new Cookies();
    if (!cookies.get("accessToken")) localStorage.removeItem("memberData"); // agar cookie bulmasa memberData uchirilib tashlanadi

    const [authMember, setAuthMember] = useState<Member | null>(  // 3- authMember ni mantig'ini xosil qilib olamiz
        localStorage.getItem("memberData")
            ? JSON.parse(localStorage.getItem("memberData") as string)
            : null
    );
    const [orderBuilder, setOrderBuilder] = useState<Date>(new Date()); // 4 - orderBuilder ni qurib olamiz
    console.log("=== Verify ===");

    return (
        <GlobalContext.Provider value={{authMember, setAuthMember, orderBuilder, setOrderBuilder}}> 
            {children}
        </GlobalContext.Provider>)
}; // 5 - yuqoridagi authMember va orderBuilderlarni GlobalContext value sifatida beramiz

export default ContextProvider; // 6 - natijani ContextProvider nomi bilan index.ts ni ichida Global integratsa qilish uchun export qilamiz