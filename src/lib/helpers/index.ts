import axios from "axios";
import { SERVERURL } from "../Constants/Constants";

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}
