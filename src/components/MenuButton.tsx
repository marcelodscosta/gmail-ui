import { colors } from '@/styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { Pressable } from "react-native";

export const MenuButton = () => {
  return (
    <Pressable>
      <MaterialIcons name="menu" color={colors.white} size={22} />
    </Pressable>
  );
};