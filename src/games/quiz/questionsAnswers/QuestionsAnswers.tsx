import {
  QuestionsAnswersStyled,
  QuestionBox,
  AnswerBox,
  AnswersWrapper,
} from './questionAnswers';

export default function QuestionsAnswers({ a, b, c, d, n, question, onClick }: {
  a: { option: string; isCorrect: boolean; },
  b: { option: string; isCorrect: boolean; },
  c: { option: string; isCorrect: boolean; },
  d: { option: string; isCorrect: boolean; },
  n: number,
  question: string,
  onClick: (p: { option: string; isCorrect: boolean; }) => void;
}) {
  return (
    <QuestionsAnswersStyled>
      <div className="wrapper">
        <QuestionBox>
          <p>
            {n + 1}) {question}
          </p>
        </QuestionBox>
        <AnswersWrapper>
          <AnswerBox onClick={() => onClick(a)}>
            <span>A:</span>
            <p>{a.option}</p>
          </AnswerBox>
          <AnswerBox onClick={() => onClick(b)}>
            <span>B:</span>
            <p>{b.option}</p>
          </AnswerBox>
          <AnswerBox onClick={() => onClick(c)}>
            <span>C:</span>
            <p>{c.option}</p>
          </AnswerBox>
          <AnswerBox onClick={() => onClick(d)}>
            <span>D:</span>
            <p>{d.option}</p>
          </AnswerBox>
        </AnswersWrapper>
      </div>
    </QuestionsAnswersStyled>
  );
}
