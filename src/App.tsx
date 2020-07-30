import React, { useState } from 'react';
import QuestionCard from './Quiz_Services/QuestionCard';
import {fetchQuizQuestions, Difficulty, QuestionsState} from './Api';
import { GlobalStyle, Wrapper } from './App.styles';
const TOTAL_QUESTION = 10;

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function App() {

const [Loding, SetLoding] = useState(false);
const [Question, SetQuestion] = useState<QuestionsState[]>([]);
const [Number, SetNumber ] = useState(0);
const [UserAnswer, SetUserAnswer] = useState<AnswerObject[]>([]);
const [score, SetScore] = useState(0);
const [GameOver, SetGameOver] = useState(true);

console.log(Question)

  const startQuiz = async () => {
    SetLoding(true);
    SetGameOver(false);
    const newQuestions: any = await fetchQuizQuestions(
      TOTAL_QUESTION,
      Difficulty.EASY
    );
    SetQuestion(newQuestions);
    SetScore(0);
    SetUserAnswer([]);
    SetNumber(0);
    SetLoding(false);
  };

  const nextQuiz = async () => {
    const nextQ = Number + 1;

    if (nextQ === TOTAL_QUESTION) {
      SetGameOver(true);
    } else {
      SetNumber(nextQ);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!GameOver) {
      const answer = e.currentTarget.value;
      const correct = Question[Number].correct_answer === answer;
      if (correct) SetScore(prev => prev  + 1);
      const answerObject = {
        question: Question[Number].question,
        answer,
        correct,
        correctAnswer: Question[Number].correct_answer,
      };
      SetUserAnswer((prev) => [...prev, answerObject]);
    }
  };


  return (
    <>
    <GlobalStyle />
    <Wrapper>
      <h1>Quiz</h1>
      {GameOver || UserAnswer.length === TOTAL_QUESTION ? ( 
      <button className="start" onClick={startQuiz} >
      Begun Quiz  
      </button>) : null}
      {!GameOver ? (
      <p className="score">
      Score : {score}
      </p>) : null}
      {Loding ? (
      <p className="loding">
      Loding
      </p>) : null}
      {!Loding && !GameOver ? (
      <QuestionCard
        questionNr={Number +1}
        totalQuestions={TOTAL_QUESTION}
        question={Question[Number].question}
        answers={Question[Number].answers}
        userAnswer={UserAnswer ? UserAnswer[Number] : undefined}
        callback={checkAnswer}
      />) : null}
      {!GameOver && !Loding && UserAnswer.length === Number + 1 && Number !== TOTAL_QUESTION - 1 ? (
      <button  className='next' onClick={nextQuiz}>
      Next 
      </button>) : null} 
    </Wrapper>
    </>
  );
}

export default App;
