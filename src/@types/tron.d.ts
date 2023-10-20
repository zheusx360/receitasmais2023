import { Reactotron } from 'reactotron-react-native';

declare global {
   interface Console {
     tron: typeof Reactotron | { log: () => null; display: () => null };
   }
 }