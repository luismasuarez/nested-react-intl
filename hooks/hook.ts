import { useContext } from "react";
import { NestedIntlContext } from "../context";

const useNestedIntlContext = () => {
  return useContext(NestedIntlContext);
};

export default useNestedIntlContext;
