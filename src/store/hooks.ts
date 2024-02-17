import {
  useSelector as useReduxSelector,
  useDispatch as useReduxDispatch,
  type TypedUseSelectorHook,
} from "react-redux";
import type { StoreDispatch, StoreState } from "./store";

export const useSelector: TypedUseSelectorHook<StoreState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<StoreDispatch>();
