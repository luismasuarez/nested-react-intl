# React Nested Translations

This package allows you to use nested translations in React components.

## Installation

```bash
yarn add rxjs react-intl
```

## Usage

Wrap your root component in a `IntlWrapper` Provider:

```jsx
import { IntlWrapper } from "react-nested-intl";

function App() {
  return (
    <MyCustomProvider>
      <IntlWrapper>
        <MyCustomComponent />
      </IntlWrapper>
    </MyCustomProvider>
  );
}
```
