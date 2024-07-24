import { useMemo, useState } from "react";
import { INestedMessages } from "../interfaces";
import { Locale } from "../types/types";
import { getDefaultLocale, parseMessages } from "../utils/utils";

type Props = {
  nestedMessaged: Record<Locale, INestedMessages>;
};

export const useLocale = ({ nestedMessaged }: Props) => {
  const defaultLocale = getDefaultLocale();
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  const parsedMessages = useMemo(
    () => parseMessages(nestedMessaged[locale]),
    [locale]
  );

  return {
    locale: defaultLocale,
    messages: parsedMessages,
    setLocale,
  };
};
