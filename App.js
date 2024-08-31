import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AndroidPicker from './components/anroidPicker';

export default function App() {
  const [month, setSelectedMonth] = useState(String(new Date().getMonth() + 1))

  return (
    <View style={styles.container}>
      <AndroidPicker month={month} setSelectedMonth={setSelectedMonth}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  picker: {
    width: '100%'
  },
  item: {
    fontSize: 16
  }
});
