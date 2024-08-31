import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import months from './months';

const AndroidPicker = ({month, setSelectedMonth}) => {
    return (

        <Picker
      style={styles.picker}
      selectedValue={month}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedMonth(itemValue)
      }>
        {
            months.map(item =>(
                <Picker.item style={styles.item} key={item.value} value={item.value}  label={item.label} />
            ))
        }
        
      </Picker>
  );
}

export default AndroidPicker
const styles = StyleSheet.create({
 
  picker: {
    width: '100%'
  },
  item: {
    fontSize: 16
  }
});