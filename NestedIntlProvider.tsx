import React from "react";
import { IntlProvider } from "react-intl";
import { NestedIntlContext } from "./context";
import { useLocale } from "./hooks/useLocale";
import { Locale, TIntlProviderProps } from "./types/types";
import { setLocaleStored } from "./utils/utils";

const NestedIntlProvider: React.FC<TIntlProviderProps> = ({
  children,
  languages,
}) => {
  const { locale, messages, setLocale } = useLocale({
    nestedMessaged: { ...languages },
  });

  function selectLanguage(e: Locale) {
    setLocale(e);
    setLocaleStored(e);
    document.documentElement.lang = e;
  }

  return (
    <NestedIntlContext.Provider value={{ locale, selectLanguage }}>
      <IntlProvider messages={messages} locale={locale}>
        {children}
      </IntlProvider>
    </NestedIntlContext.Provider>
  );
};

export default NestedIntlProvider;
