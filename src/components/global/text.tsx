import { View, Text } from 'react-native';
interface ITypes {
  children: string;
  type?: string;
  styles?: string;
}

export const AtomTextComponent = ({
  children,
  type = 'title',
  styles,
}: ITypes) => {
  const textType: { [key: string]: string } = {
    title: `text-lg font-bold text-slate-800`,
    subtitle: `text-base font-semibold text-slate-600`,
    label: `text-lg font-semibold text-green-600`,
    textbutton: `text-lg font-semibold text-pink-700`,
  };

  return (
    <View>
      <Text className={`${textType[type]} ${styles}`}>{children}</Text>
    </View>
  );
};
