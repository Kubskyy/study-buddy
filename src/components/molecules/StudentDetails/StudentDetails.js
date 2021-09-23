import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import { StyledAverage } from '../StudentsListItem/StudentsListItem.styles';
import {
  ExtendedStyledAverage,
  ExtendedTitle,
  GradeContainer,
  StudentDetailsContent,
  StudentDetailsHeader,
  StyledInfo,
  Wrapper,
} from './StudentDetails.styles';

const StudentDetails = ({ student }) => {
  return (
    <Wrapper>
      <StudentDetailsHeader>
        <ExtendedStyledAverage value={student.average}>
          {student.average}
        </ExtendedStyledAverage>
        <Title>{student.name}</Title>
      </StudentDetailsHeader>
      <StudentDetailsContent>
        <ExtendedTitle>Course</ExtendedTitle>
        <StyledInfo isBig>{student.course}</StyledInfo>
        <ExtendedTitle>Average</ExtendedTitle>
        {student.grades.map(({ subject, average }) => (
          <GradeContainer key={subject}>
            <StyledInfo>{subject}</StyledInfo>
            <StyledAverage value={average}>{average}</StyledAverage>
          </GradeContainer>
        ))}
      </StudentDetailsContent>
    </Wrapper>
  );
};

export default StudentDetails;
