import 'react-native-gesture-handler';
import React, { useState} from 'react';
import { 
  Alert,
  Dimensions, 
  StyleSheet, 
  View,
  Text
} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
  runOnJS,
} from 'react-native-reanimated';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;
const HORIZONTAL_PADDING = 16;
const AVAILABLE_WIDTH = SCREEN_WIDTH - HORIZONTAL_PADDING * 2;

const COLORS = ['#6a5acd', '#4caf50', '#ff9800', '#f44336'];

const QUESTIONS = [
  'Вам подобається бути в центрі уваги?',
  'Часто дієте імпульсивно?',
  'Любите планувати все заздалегіть?',
  'Швидко втомлюєтесь у компаніях?',
  'Маєте добру витривалість до стресу?',
]
export default function App() {


  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const progress = useSharedValue(0);
  const pressed = useSharedValue(false);
  const offset = useSharedValue(0);


const nextQuestion =(isYes: Boolean) => {
  if (isYes){
    setScore((prev) => prev + 1);
  }
  if (questionIndex < QUESTIONS.length - 1){
    setQuestionIndex((prev) => prev + 1);
    progress.value = progress.value + 1;
  }
  else{
    setIsFinished(true);
    const finalScore = isYes ? score + 1 : score;
    const finalType =
      score >= 4
        ? 'Холерик'
        : score >= 2
        ? 'Сангвінік'
        : score === 1
        ? 'Флегматик'
        : 'Меланхолік';

        Alert.alert('Результат тесту', `Ваш темперамент:${finalType}`);
  }
};

const restartTest = () => {
  setScore(0);
  setQuestionIndex(0);
  setIsFinished(false);
  progress.value = 0;
};

const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      offset.value = event.translationX;
    })
    .onFinalize((event) => {
      pressed.value = false;

      const theshold = 100;
      if (event.translationX > theshold){
          runOnJS(nextQuestion)(true);
      }
      else if (event.translationX < -theshold){
        runOnJS(nextQuestion)(false); 
      }

      offset.value = withSpring(0);
    });

  const circleStyle  = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value },
      { scale: withTiming(pressed.value ? 1.2 : 1) },
    ],
    backgroundColor: pressed.value ? '#FFE04B' : '#b58df1',
  }));

  const barStyle  = useAnimatedStyle(() => {
    return {
      width: withSpring((progress.value / 4) * AVAILABLE_WIDTH),
      backgroundColor: COLORS[progress.value - 1] || COLORS[0],
    };
  });

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.inner}>
        <View style={styles.barBackground}>
          <Animated.View style={[styles.barFill, barStyle]}>
            <View style={styles.textContainer}>
              <Text style={styles.progressText}>
                {Math.round((progress.value / (QUESTIONS.length - 1)) * 100)}%
              </Text>
            </View>
          </Animated.View>
        </View>
        
        <Text style={styles.questionText}>
          {QUESTIONS[questionIndex]}
        </Text>

        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.circle, circleStyle]} />
        </GestureDetector>

        <Text style={styles.swipeInfo}>⬅ Ні     |     Так ➡</Text>
      </View>
      {isFinished && (
      <View style={{ marginTop: 20 }}>
        <Text onPress={restartTest} style={styles.restartButton}>
          Почати знову
        </Text>
      </View>
)}
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: HORIZONTAL_PADDING,
    gap: 30,
  },
  circle: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 100,
    cursor: 'grab',
  },
  barBackground: {
    height: 30,
    backgroundColor: '#eee',
    borderRadius: 15,
    overflow: 'hidden',
    width: '100%',
  },
  barFill: {
    height: '100%',
    backgroundColor: '#6a5acd',
    borderRadius: 15,
  },
  textContainer: {
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
  },
  progressText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  swipeInfo: {
    fontSize: 16,
    color: '#888',
    marginTop: 10,
  },
  restartButton: {
    fontSize: 20,
    color: '#6a5acd',
    fontWeight: 'bold',
    paddingVertical: 15,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#6a5acd',
    borderRadius: 10,
  },
});
