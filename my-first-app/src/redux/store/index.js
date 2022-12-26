import { createStore } from "@redux/toolkit";
import reducers from "../reducers/index";

export const Store = createStore(reducers);