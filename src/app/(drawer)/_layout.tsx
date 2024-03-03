import { CustomOptions } from '@/@types/navigation';
import { DrawerContent } from '@/components/DrawerContent';
import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer
      drawerContent={(props) => <DrawerContent {...props} />}
      defaultStatus='open'
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '75%'
        }
      }}
    >
      <Drawer.Screen
        name='(tabs)'
        options={{
          title: "Todas as caixas de entrada",
          iconName: 'all-inbox',
          isDividir: true,
          notification: 5
        } as CustomOptions}
      />

    </Drawer>
  );
};