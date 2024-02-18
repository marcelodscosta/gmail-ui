import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { colors } from "@/styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

type FloatButtonProp = TouchableOpacityProps & {
  icon?: keyof typeof MaterialIcons.glyphMap,
}

export function FloatButton({ icon, ...rest }: FloatButtonProp) {
  return (
    <TouchableOpacity
      className="px-8 py-4 bg-gray-600 rounded-full absolute bottom-3 right-4 flex-row gap-1 items-center"
      activeOpacity={0.7}
      {...rest}
    >
      {icon && <MaterialIcons name={icon} size={22} color={colors.orange[500]} />}

      <Text className="text-orange-500">Escrever</Text>
    </TouchableOpacity>
  );
};