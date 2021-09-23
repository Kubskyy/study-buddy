import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { StyledAverage } from '../StudentsListItem/StudentsListItem.styles';

export const StudentDetailsHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 50px;
`;

export const ExtendedStyledAverage = styled(StyledAverage)`
  width: 70px;
  height: 70px;
  margin-right: 85px;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const StudentDetailsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 100%;
  padding: 0 30px;
`;

export const ExtendedTitle = styled(Title)`
  font-size: ${({ theme }) => theme.fontSize.l};
`;
export const GradeContainer = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;
export const StyledInfo = styled.p`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme, isBig }) =>
    isBig ? theme.fontSize.xl : theme.fontSize.l};
`;

export const Wrapper = styled.div`
  width: 100%;
`;
