import { useState } from 'react';
import { Container, AtomText } from '../../components/global';
import { InputField } from '../../components/inputField/inputField';
import { View } from 'react-native';

export const Login = () => {
  return (
    <Container bgColor="bg-orange-500">
      <View
        className={`w-11/12 h-2/4 shadow-md
        shadow-black/100
        bg-orange-400 
        items-center justify-center 
        rounded-br-[70px] rounded-tl-[70px] 
        rounded-tr-sm 
        rounded-bl-sm`}
      >
        <AtomText>TITLE</AtomText>
        <InputField placeholder="E-Mail" />
        <InputField placeholder="Senha" />
      </View>
    </Container>
  );
};
