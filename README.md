# React Nested Translations

This package allows you to use nested translations in React components.

## Installation

```bash
npm install nested-react-intl
```

## Usage

Wrap your root component in a `NestedIntlProvider` Provider:

IMPORTANT: You need to pass languages prop ro NestedIntlProvider like:

```jsx
import { NestedIntlProvider } from "nested-react-intl";

import en from "../translations/en.json";
import es from "../translations/es.json";

function App() {
  return (
    <MyCustomProvider>
      <NestedIntlProvider
        languages={{ en: { test: "test" }, es: { test: "Prueba" } }}
      >
        <MyCustomComponent />
      </NestedIntlProvider>
    </MyCustomProvider>
  );
}
```
