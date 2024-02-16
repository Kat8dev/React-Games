import { useState } from 'react';
import styled from 'styled-components';
 import Quiz from './Quiz';
import WelcomeToQuiz from './welcomeToQuiz/WelcomeToQuiz';
import QuestionsProvider from './store/QuestionStore'; 


const AppContainer = styled.div``;

function QuizGame() {
    const [isStarted, setIsStarted] = useState(false);

    return (
        <QuestionsProvider>
            <AppContainer>
                {isStarted ? <Quiz restart={setIsStarted} /> : <WelcomeToQuiz onClick={() => setIsStarted(true)} />}
            </AppContainer>
        </QuestionsProvider>
    );
}

export default QuizGame;
