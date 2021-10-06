import React, { useState } from 'react';
import { Redirect, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { useStudents } from 'hooks/useStudents';
import { GroupWrapper, TitleWrapper, Wrapper } from 'views/Dashboard.styles';
import { Title } from 'components/atoms/Title/Title';
import useModal from 'components/organisms/Modal/useModal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';
import Modal from 'components/organisms/Modal/Modal';
import { useGetGroupsQuery } from 'store/api/groups';

const Dashboard = () => {
  const [currentStudent, setCurrentStudent] = useState([]);
  const { id } = useParams();
  const { getStudentById } = useStudents();
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();
  const { data, isLoading } = useGetGroupsQuery();

  const handleOpenStudentDetails = async (id) => {
    const student = await getStudentById(id);
    setCurrentStudent(student);
    handleOpenModal();
  };

  if (isLoading) {
    return (
      <Wrapper>
        <TitleWrapper>Loading...</TitleWrapper>
      </Wrapper>
    );
  }

  if (!id && data.groups.length > 0)
    return <Redirect to={`/group/${data.groups[0].id}`} />;

  return (
    <Wrapper>
      <TitleWrapper>
        <Title as="h2">Group {id}</Title>
        <nav>
          {data.groups.map(({ id }) => (
            <Link key={id} to={`/group/${id}`}>
              {id}{' '}
            </Link>
          ))}
        </nav>
      </TitleWrapper>
      <GroupWrapper>
        <StudentsList handleOpenStudentDetails={handleOpenStudentDetails} />
        <Modal isOpen={isOpen} handleCloseModal={handleCloseModal}>
          <StudentDetails student={currentStudent} />
        </Modal>
      </GroupWrapper>
    </Wrapper>
  );
};

export default Dashboard;
