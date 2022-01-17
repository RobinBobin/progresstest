/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {
  useCallback
} from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from "react-native-reanimated";

const App: React.FC = () => {
  const progressWidth = useSharedValue(0);
  
  const progressBackground = useAnimatedStyle(() => ({
    backgroundColor: "blue",
    flex: 1,
    width: `${progressWidth.value * 100}%`
  }), []);
  
  const startProgress = useCallback(() => {
    progressWidth.value = 0;
    
    progressWidth.value = withTiming(
      0.75,
      {
        duration: 700
      }
    );
  }, []);
  
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={styles.progressContainer}
      >
        <Animated.View
          style={progressBackground}
        />
      </View>
      <Button
        onPress={startProgress}
        title="press me"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "cyan",
    flex: 1,
    justifyContent: "space-evenly"
  },
  progressContainer: {
    borderRadius: 4,
    borderWidth: 1,
    height: 40,
    width: 400
  }
});

export default App;
