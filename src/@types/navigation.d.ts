import { IconNameProps } from '@/components/DrawerButton';
import { DrawerNavigationOptions } from '@react-navigation/drawer';

interface CustomOptions extends DrawerNavigationOptions {
  iconName: IconNameProps,
  isDividir?: boolean,
  notification?: number,
  sectionTitle: string,
  isFocused: boolean,
};


