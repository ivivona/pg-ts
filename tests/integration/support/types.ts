import * as t from "io-ts";

export const Void = undefined as void;

export const Unit = t.interface({
  id: t.number,
  name: t.string,
});

export type Unit = t.TypeOf<typeof Unit>;
