import { useState } from 'react';
import { Alert } from 'react-native';

const QUESTIONS = [
  'Мені подобається бути в центрі уваги?',
  'Часто дію імпульсивно?',
  'Люблю планувати все заздалегідь?',
  'Швидко втомлююсь у компанії?',
  'Маю добру витривалість до стресу?',
];

export function useTest() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const currentQuestion = QUESTIONS[index];
  const progress = (index + 1) / QUESTIONS.length;

  const answer = (isYes: boolean) => {
    if (isYes) {
      setScore((prev) => prev + 1);
    }

    if (index < QUESTIONS.length - 1) {
      setIndex((prev) => prev + 1);
    } else {
      setFinished(true);
      const finalScore = isYes ? score + 1 : score;
      const type =
        finalScore >= 4
          ? 'Холерик'
          : finalScore >= 2
          ? 'Сангвінік'
          : finalScore === 1
          ? 'Флегматик'
          : 'Меланхолік';

      Alert.alert('Результат тесту', `Ваш тип темпераменту: ${type}`);
    }
  };

  const restart = () => {
    setScore(0);
    setIndex(0);
    setFinished(false);
  };

  return {
    currentQuestion,
    progress,
    index,
    finished,
    answer,
    restart,
  };
}
