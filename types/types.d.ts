import { ReactNode } from "react";
import { INestedMessages } from "../interfaces";

export type Locale = "en" | "es";

export type TIntlProviderProps = {
  children: ReactNode;
  languages: {
    en: INestedMessages;
    es: INestedMessages;
  };
};
