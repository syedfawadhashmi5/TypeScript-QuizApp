import React from 'react';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';

type Props = {
  question: string;
  answers: string[];
  callback: any;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
}


const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions,

}) => {

    return (
              <Wrapper>
            <p>
                Question: {questionNr} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }}  />
            <div>
                {answers.map(answer => (
                    <ButtonWrapper
                        correct={userAnswer?.correctAnswer === answer}
                        userClicked={userAnswer?.answer === answer}
                    >
                        <button disabled={userAnswer} value={answer} onClick={callback}>
                            <span  dangerouslySetInnerHTML={{__html: answer }} />
                        </button>
                    </ButtonWrapper>
                ))}
            </div>
            </Wrapper>
    )
}

export default QuestionCard
