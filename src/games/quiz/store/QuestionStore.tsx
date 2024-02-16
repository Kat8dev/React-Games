/* eslint-disable @typescript-eslint/no-unused-vars */
import { createContext, useState } from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const QuestionsContext = createContext( {questions: [], setQuestions: (_q: any) => {}});

function QuestionsProvider({ children }: { children: React.ReactNode }) {
  const [questions, setQuestions] = useState([]);
  return <QuestionsContext.Provider value={{questions, setQuestions}}>{children}</QuestionsContext.Provider>;
}

export { QuestionsContext };

export default QuestionsProvider;
