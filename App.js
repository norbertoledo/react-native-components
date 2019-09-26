import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Components
import MiPicker from './components/MiPicker';
import MiActivityIndicator from './components/MiActivityIndicator';
import MiAlert from './components/MiAlert';
import MiModal from './components/MiModal';
import MiImage from './components/MiImage';
import MiAsyncStorage from './components/MiAsyncStorage';


export default function App() {
  return (
    <View style={styles.container}>
      
      {/* <MiPicker/> */}

      {/* <MiActivityIndicator/> */}

      {/* <MiAlert/> */}

      {/* <MiModal /> */}

      {/* <MiImage/> */}

      <MiAsyncStorage/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
