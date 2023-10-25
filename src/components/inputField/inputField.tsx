import { TextField, View, Text } from 'react-native-ui-lib';
interface ITypes {
  onChangeText?: (t: string) => string;
  placeholder: string;
  color?: string;
  placeHolderColor?: string;
  secure?: boolean;
}

export const InputField = ({
  onChangeText,
  placeholder,
  color,
  placeHolderColor,
  secure,
}: ITypes) => {
  return (
    <View className="bg-orange-100 h-14 w-3/4 pl-2 rounded-md justify-center border-2 border-orange-400 mt-8">
      <View className="absolute bottom-14 left-2">
        <Text className="font-semibold text-base">{placeholder}</Text>
      </View>
      <TextField
        placeholder={placeholder}
        placeholderTextColor={placeHolderColor || '#888'}
        onChangeText={onChangeText}
        className="text-lg font-semibold"
        secureTextEntry={secure}
      />
    </View>
  );
};
