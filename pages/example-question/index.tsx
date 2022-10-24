import type { NextPage } from 'next';
import PageLayout from '../PageLayout';
import QuestionDisplay from '../../components/questionDisplay';
import Tour from '../../components/tour/Tour';

const ExampleQuestion: NextPage = () => {
  return (
    <PageLayout>
      <QuestionDisplay
        id={0}
        question="If Daves Corner Shop had 16 employees in 2020 and and 21 employees
          in 2022 what percentage increase of employees was there between 2020
          and 2022?"
        answer={'C'}
        resA={'110% increase'}
        resB={'14.7% increase'}
        resC={'31.25% increase'}
        resD={'20% increase'}
        highlight={"Sometimes I hide because I'm shy."}
        image={
          'I like to be center of attention so everything else should be closed when I&#39;m open.'
        }
        definition={'I&#39;m just here to watch the fight.'}
        timeLimit={60}
        handleSubmitOnClick={() => {}}
      />
      <Tour />
    </PageLayout>
  );
};

export default ExampleQuestion;
