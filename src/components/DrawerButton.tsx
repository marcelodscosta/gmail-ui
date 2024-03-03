import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";
import clsx from "clsx";
import { Pressable, PressableProps, Text, View } from "react-native";

export type IconNameProps = keyof typeof MaterialIcons.glyphMap;

type DrawerButtonProps = PressableProps & {
  title: string,
  isFocused?: boolean,
  isDivider?: boolean,
  iconName: IconNameProps,
  notification?: number,
};


export function DrawerButton({ title, ...rest }: DrawerButtonProps) {

  const isDividir = true;
  const isFocused = true;

  return (
    <Pressable className={clsx("py-2 w-full", { "border-b ml-10 border-gray-500": isDividir })}>

      <View
        className={clsx("flex-row items-center gap-4 h-14 px-6 -ml-2 w-full", {
          "-ml-14": isDividir,
        })}>

        <MaterialIcons
          name="email"
          size={20}
          color={isFocused ? colors.orange[300] : colors.gray[700]}
        />

        <Text className={clsx("text-white font-subtitle text-base", {
          "text-orange-300": isFocused,
        })}>{title}</Text>

        <Text className={clsx("text-gray-400 text-sm font-body", {
          "text-orange-300": isFocused
        })}>5</Text>
      </View>
    </Pressable>
  );
};