import React from 'react';
import { 
  Button, 
  Dimensions, 
  StyleSheet, 
  View,
  Text
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

const SCREEN_WIDTH = Dimensions.get('window').width;
const HORIZONTAL_PADDING = 16;
const AVAILABLE_WIDTH = SCREEN_WIDTH - HORIZONTAL_PADDING * 2;

const COLORS = ['#6a5acd', '#4caf50', '#ff9800', '#f44336'];

export default function App() {
  const progress = useSharedValue(0);

  const handlePress = () => {
    progress.value = (progress.value + 1) % 5;
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: withSpring((progress.value / 4) * AVAILABLE_WIDTH),
      backgroundColor: COLORS[progress.value - 1] || COLORS[0],
    };
  });

  return (
    <View style={styles.container}>
      <View style={styles.barBackground}>
        <Animated.View style={[styles.barFill, animatedStyle]}>
          <View style={styles.textContainer}>
            <Text style={styles.progressText}>
              {progress.value * 25}%
            </Text>
          </View>
        </Animated.View>
      </View>
      <Button title="Збільшити" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  barBackground: {
    height: 30,
    backgroundColor: '#eee',
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
  },
  barFill: {
    height: '100%',
    backgroundColor: '#6a5acd',
    borderRadius: 15,
  },
  textContainer:{
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  progressText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
