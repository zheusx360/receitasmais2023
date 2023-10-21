import { View } from 'react-native';

interface ITypes {
  children: any;
  bgColor?: string;
  padX?: string;
}
const ComponentContainer = ({ children, bgColor, padX }: ITypes) => {
  return (
    <View
      className={`w-full h-full items-center justify-center 
      ${bgColor} 
      ${padX ? padX : 'px-2'}
      `}
    >
      {children}
    </View>
  );
};

export default ComponentContainer;
