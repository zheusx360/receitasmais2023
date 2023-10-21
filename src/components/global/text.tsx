import { View, Text } from 'react-native';

interface ITypes {
  children: string;
  bgColor?: string;
  size?: number;
  color?: string;
  weight?: string;
  textAlign?: string;
}
export const ComponentTitle = ({
  children,
  size,
  weight,
  color,
  textAlign,
}: ITypes) => {
  return (
    <View>
      <Text
        className={`
        ${size ? size : 'text-lg'} 
        ${weight ? weight : 'font-bold'} 
        ${color ? color : 'text-gray-900'}
        ${textAlign ? textAlign : 'text-center'}
        `}
      >
        {children}
      </Text>
    </View>
  );
};
export const ComponentText = ({
  children,
  size,
  weight,
  color,
  textAlign,
}: ITypes) => {
  return (
    <View>
      <Text
        className={`
        ${size ? size : 'text-base'} 
        ${weight ? weight : 'font-medium'} 
        ${color ? color : 'text-gray-800'}
        ${textAlign ? textAlign : 'text-center'}
        `}
      >
        {children}
      </Text>
    </View>
  );
};
export const ComponentTextButton = ({
  children,
  size,
  weight,
  color,
  textAlign,
}: ITypes) => {
  return (
    <View>
      <Text
        className={`
        ${size ? size : 'text-base'} 
        ${weight ? weight : 'font-semibold'} 
        ${color ? color : 'text-white'}
        ${textAlign ? textAlign : 'text-center'}
        `}
      >
        {children}
      </Text>
    </View>
  );
};
