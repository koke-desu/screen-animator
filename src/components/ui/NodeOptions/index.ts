import NumberInput from "./NumberInput";
import TextInput from "./TextInput";

export type NodeOptionBaseType<T> = {
  value: T;
  setValue: (value: T) => void;
};

const OptionComponents = {
  Text: TextInput,
  Number: NumberInput,
} as const;

export type OptionComponentName = keyof typeof OptionComponents;
export type OptionComponentProps<T extends OptionComponentName> =
  React.ComponentProps<(typeof OptionComponents)[T]>;
export type OptionType<T extends OptionComponentName> = {
  name: T;
} & OptionComponentProps<T>;

export default OptionComponents;
