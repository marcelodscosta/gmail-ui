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
        options={{ title: "Todas as caixas de entrada" }}
      />
    </Drawer>
  );
};