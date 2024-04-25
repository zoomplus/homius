type Mods = Record<string, boolean | string>;
export interface ClassNamesProps {
  cls?: string;
  mods?: Mods;
  additional?: string[];
}
export const classNames = ({
  cls = "",
  mods = {},
  additional = [],
}: ClassNamesProps): string => {
  return [
    cls,
    ...additional,
    ...Object.keys(mods).filter((className) => mods[className]),
  ].join(" ");
};
