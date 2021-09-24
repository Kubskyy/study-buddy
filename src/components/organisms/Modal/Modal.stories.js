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
        course: 'Economy and finances',
        grades: [
          {
            subject: 'Business Philosophy',
            average: '3.3',
          },
          {
            subject: 'Marketing',
            average: '4.7',
          },
          {
            subject: 'Modern Economy',
            average: '2.5',
          },
        ],
      }}
    />
  </Modal>
);

export const Default = Template.bind({});
