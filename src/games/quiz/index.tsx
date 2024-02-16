import { useState } from 'react';
import styled from 'styled-components';
import Quiz from './Quiz';
import WelcomeToQuiz from './welcomeToQuiz/WelcomeToQuiz';
import QuestionsProvider from './store/QuestionStore';
import Body from '../../components/layout/Body';

const AppContainer = styled.div`
background-color: #efe5e5;
`;

function QuizGame() {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <Body>
      <QuestionsProvider>
        <AppContainer>
          {isStarted ? (
            <Quiz restart={setIsStarted} />
          ) : (
            <WelcomeToQuiz onClick={() => setIsStarted(true)} />
          )}
        </AppContainer>
      </QuestionsProvider>
    </Body>
  );
}

export default QuizGame;
