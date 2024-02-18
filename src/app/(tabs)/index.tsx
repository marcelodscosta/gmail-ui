import { FlatList, Text, View } from "react-native";

import { Avatar } from "@/components/Avatar";
import { Email } from "@/components/Email";
import { Input } from "@/components/Input";
import { MenuButton } from "@/components/MenuButton";

import { FloatButton } from "@/components/FloatButton";
import { EMAILS } from "@/utils/emails";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-900 pt-14 p-4" >
      <Input>
        <MenuButton />
        <Input.Field placeholder="Pesquisar no e-mail" />
        <Avatar
          source={{ uri: 'https://github.com/marcelodscosta.png' }}
          size="small"
        />
      </Input>

      <FlatList
        data={EMAILS}
        keyExtractor={({ id }) => (id)}
        renderItem={({ item }) => (<Email {...item} />)}
        contentContainerClassName="gap-6"
        ListHeaderComponent={() => (<Text className="uppercase text-gray-400 text-sm font-subtitle mt-6">Entrada</Text>)}
      />

      <FloatButton icon="edit" />
    </View>
  );
};