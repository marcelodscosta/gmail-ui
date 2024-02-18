import { Text, View } from "react-native";
import { Avatar } from "./Avatar";

import { colors } from "@/styles/colors";
import { MaterialIcons } from '@expo/vector-icons';

import { EmailDataProps } from "@/utils/emails";


export const Email = (item: EmailDataProps) => {
  return <View className="w-full flex-row gap-4" >

    <Avatar source={{ uri: item.avatar }} />

    <View className='flex-1'>

      <View className="flex-row items-center gap-1">

        {item.marker &&
          <MaterialIcons name="label-important" size={16} color={colors.yellow[600]} />
        }
        <Text className="font-heading text-gray-400 flex-1">{item.name}</Text>

        <Text className="font-body text-gray-400">{item.date}</Text>

      </View>
      <Text
        className="text-base font-body text-gray-400"
        numberOfLines={1}
        lineBreakMode="tail"
      >
        {item.subject}
      </Text>

      <View className="flex-row items-center gap-4">

        <Text
          className="text-base font-body text-gray-400 flex-1"
          numberOfLines={1}
          lineBreakMode="tail"
        >
          {item.message}
        </Text>
        <MaterialIcons name={item.start ? "star" : "star-outline"} size={22} color={colors.blue[600]} />
      </View>

    </View>
  </View>
};