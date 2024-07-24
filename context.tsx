import { createContext } from "react";
import { Locale } from "./types/types";
import { LANG_DEFAULT } from "./utils/utils";

export const NestedIntlContext = createContext({
  locale: LANG_DEFAULT,
  selectLanguage: (e: Locale) => {
    console.log(e);
  },
});
