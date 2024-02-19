import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Image, ScrollView, View } from "react-native";


export function DrawerContent(drawerProps: DrawerContentComponentProps) {
  return (
    <View className='flex-1 bg-gray-600 overflow-hidden'>
      <View className='mt-20 w-full border-b pb-6 border-gray-500'>
        <Image
          source={require('@/assets/logo.png')}
          className='w-24 ml-5'
          resizeMode='contain'
        />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 42 }}
      >

        <View className='mt-2'>

        </View>

      </ScrollView>
    </View>
  );
};