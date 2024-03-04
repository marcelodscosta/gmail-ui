import { CustomOptions } from '@/@types/navigation';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Image, ScrollView, Text, View } from "react-native";
import { DrawerButton } from './DrawerButton';


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
          {
            drawerProps.state.routes.map((route, index) => {
              const isFocused = drawerProps.state.index === index;
              const options = drawerProps.descriptors[route.key].options as CustomOptions;

              if (options.title === undefined) {
                return
              }
              console.log(options.title);


              return (
                <View key={route.key}>
                  {
                    options.sectionTitle && (

                      <Text className='text-gray-400 text-sm font-heading uppercase ml-4 mt-6'>{options.sectionTitle}</Text>

                    )
                  }
                  <DrawerButton
                    title={options.title}
                    iconName={options.iconName}
                    isDivider={options.isDividir}
                    isFocused={options.isFocused}
                  />
                </View>
              )
            })
          }
        </View>

      </ScrollView>
    </View>
  );
};