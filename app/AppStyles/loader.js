import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator,
} from 'react-native';
import { styles } from './styles';
// const SmartLoader = (props) => {
//     const {
//       isLoading,
//       ...attributes
//     } = props;
  
//     return (
//       <Modal
//         transparent
//         animationType={'none'}
//         visible={isLoading}
//         onRequestClose={() => { console.log('Noop'); }}
//       >
//         <View style={styles.modalBackground}>
//           <View style={styles.activityIndicatorHolder}>
//             <ActivityIndicator
//               animating={isLoading}
//               size="large"
//             />
//           </View>
//         </View>
//       </Modal>
//     );
//   };
const SmartLoader = () => {
    // const {
    //   isLoading,
    //   ...attributes
    // } = props;
  
    return (
      // <Modal
        // transparent
      //   animationType={'none'}
      //   visible={true}
      //   onRequestClose={() => { console.log('Noop'); }}
      // >
        <View style={styles.modalBackground}>
          <View style={styles.activityIndicatorHolder}>
            <ActivityIndicator
              animating={true}
              size="large"
            />
          </View>
        </View>
      // </Modal>
    );
  };
  export default SmartLoader;