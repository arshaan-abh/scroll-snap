import { DetailedHTMLProps, HTMLAttributes, MutableRefObject } from "react";

export default interface HTMLProps<T>
  extends DetailedHTMLProps<HTMLAttributes<T>, T> {
  refProp?: MutableRefObject<T | null>;
}
