import React from 'react';
import { SubjectList } from './SubjectList';
import TempConverter from './TempConverter';
import Counter from './Counter'; // Import the Counter component

const CMSCSubjects = [
  { code: "CMSC100", description: "Web Programming", id: 1 },
  { code: "CMSC150", description: "Scientific Computation", id: 2 },
  { code: "CMSC22", description: "Object-Oriented Programming", id: 3 },
];

const CHEMSubjects = [
  { code: "CHEM100", description: "Introduction to Organic Chemistry", id: 1 },
  { code: "CHEM10", description: "Chemical Kinetics", id: 2 },
  { code: "CHEM11", description: "Introduction to Biochemistry", id: 3 },
];

function App() {
   return (
    <div>
      <Counter val = {0} /> {/* Render the Counter component */}
      <SubjectList list={CMSCSubjects} title={'Computer Science Subjects'} />
      <SubjectList list={CHEMSubjects} title= {'Chemistry Subjects'} />
      <TempConverter /> 
    </div>
  );
}

export default App;
