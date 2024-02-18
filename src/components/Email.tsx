import { Text, View } from "react-native";
import { Avatar } from "./Avatar";

import { colors } from "@/styles/colors";
import { MaterialIcons } from '@expo/vector-icons';

export const Email = () => {
  return <View className="w-full flex-row gap-4" >

    <Avatar source={{ uri: 'https://github.com/marcelodscosta.png' }} />

    <View className='flex-1'>

      <View className="flex-row items-center gap-1">

        <MaterialIcons name="label-important" size={16} color={colors.yellow[600]} />

        <Text className="font-body text-gray-400 flex-1">Marcelo Costa</Text>

        <Text className="font-body text-gray-400">19 de Fev.</Text>

      </View>
      <Text
        className="text-base font-body text-gray-400"
        numberOfLines={1}
        lineBreakMode="tail"
      >
        Assunto de e-mail
      </Text>

      <View className="flex-row items-center gap-4">

        <Text
          className="text-base font-body text-gray-400 flex-1"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          Essa é a mensagem do e-mail
        </Text>
        <MaterialIcons name="star" size={22} color={colors.blue[600]} />
      </View>

    </View>
  </View>
};