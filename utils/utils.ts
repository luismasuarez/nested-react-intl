import { BehaviorSubject } from "rxjs";
import { INestedMessages } from "../interfaces";
import { Locale } from "../types/types";

const LOCALE_STORAGE_VAR = "language";
export const LANG_DEFAULT = "en";

export const parseMessages = (
  nestedMessages: INestedMessages,
  prefix = ""
): Record<string, string> => {
  return Object.keys(nestedMessages).reduce(
    (messages: Record<string, string>, key) => {
      const value = nestedMessages[key];
      const prefixedKey = prefix ? `${prefix}.${key}` : key;
      if (typeof value === "string") {
        messages[prefixedKey] = value;
      } else {
        Object.assign(messages, parseMessages(value, prefixedKey));
      }

      return messages;
    },
    {}
  );
};

export const getLocaleFromBrowser = () => {
  if (typeof navigator != "undefined" && navigator.language) {
    if (navigator.language.includes("en")) {
      return "en";
    }
    if (navigator.language.includes("es")) {
      return "es";
    }
  }
  return LANG_DEFAULT;
};

export const getLocaleStored = () =>
  localStorage.getItem(LOCALE_STORAGE_VAR) ?? getLocaleFromBrowser();

export const locale$ = new BehaviorSubject<string>(getLocaleStored());

export const setLocaleStored = (locale: string) => {
  localStorage.setItem(LOCALE_STORAGE_VAR, locale);
  locale$.next(locale);
};

export const getDefaultLocale = () => {
  const localLocale = getLocaleStored() ?? LANG_DEFAULT;
  const browserLocale = getLocaleFromBrowser();

  return localLocale ? (localLocale as Locale) : browserLocale;
};
