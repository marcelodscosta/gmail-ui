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


export function DrawerButton({ title, isFocused, isDivider, notification, ...rest }: DrawerButtonProps) {


  return (
    <Pressable className={clsx("py-2 w-full", { "border-b ml-10 border-gray-500": isDivider })}>

      <View
        className={clsx("flex-row items-center gap-4 h-14 px-6 -ml-2 w-full", {
          "-ml-14": isDivider,
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
        })}>{notification}</Text>
      </View>
    </Pressable>
  );
};