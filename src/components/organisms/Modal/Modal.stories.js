import Modal from './Modal';
import StudentDetails from 'components/molecules/StudentDetails/StudentDetails';

export default {
  title: 'Components/Organisms/Modal',
  component: Modal,
};

const Template = (args) => (
  <Modal {...args}>
    <StudentDetails
      student={{
        id: '15',
        name: 'Marek Ratajski',
        attendance: '78%',
        average: '3.5',
        group: 'C',
      }}
    />
  </Modal>
);

export const Default = Template.bind({});
