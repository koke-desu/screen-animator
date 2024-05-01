import NumberInput from "./NumberInput";
import TextInput from "./TextInput";

export type NodeOptionBaseType<T> = {
  name: string;
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
  type: T;
} & OptionComponentProps<T>;
export type OptionsType = OptionType<OptionComponentName>[];

// Option定義時に型補助を効かせるためのヘルパー関数
export const createOption = <T extends OptionComponentName>(
  option: Omit<
    OptionType<T>,
    "value" | "setValue" // value, setValueはNodeのインスタンスから注入するため、Optionの定義にはいらない
  >,
) => {
  return option as OptionType<T>; // うーん
};

export default OptionComponents;
