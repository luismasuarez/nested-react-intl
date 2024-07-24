import { useMemo, useState } from "react";
import { INestedMessages } from "../interfaces";
import en from "../translations/en.json";
import es from "../translations/es.json";
import { Locale } from "../types/types";
import { getDefaultLocale, parseMessages } from "../utils/utils";

const messages: Record<Locale, INestedMessages> = {
  en,
  es,
};

export const useLocale = () => {
  const defaultLocale = getDefaultLocale();
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const parsedMessages = useMemo(
    () => parseMessages(messages[locale]),
    [locale]
  );

  return {
    locale: defaultLocale,
    messages: parsedMessages,
    setLocale,
  };
};
