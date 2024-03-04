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

      <Drawer.Screen
        name='inbox'
        options={{
          title: "Entrada",
          iconName: 'inbox',
          isDividir: true,
          notification: 3
        } as CustomOptions}
      />

      <Drawer.Screen
        name='important'
        options={{
          title: "Importante",
          iconName: 'label-important-outline',
          isDividir: true,
          notification: 3
        } as CustomOptions}
      />

      <Drawer.Screen
        name='send'
        options={{
          title: "Enviado",
          iconName: 'send',
          isDividir: false,
          notification: 3
        } as CustomOptions}
      />

      <Drawer.Screen
        name='exit-box'
        options={{
          title: "Caixa de saída",
          iconName: 'outbox',
          isDividir: false,
          notification: 3
        } as CustomOptions}
      />

      <Drawer.Screen
        name='general'
        options={{
          title: "Geral",
          iconName: 'outbox',
          isDividir: false,
          notification: 3,
          sectionTitle: "Outros"
        } as CustomOptions}
      />

    </Drawer>
  );
};