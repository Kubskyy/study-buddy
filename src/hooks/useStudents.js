import { useCallback } from 'react';
import axios from 'axios';
import { useError } from 'hooks/useError';

const studentsAPI = axios.create({});

studentsAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');

    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const useStudents = () => {
  const { dispatchError } = useError();
  const getGroups = useCallback(async () => {
    try {
      const result = await studentsAPI.get('/groups');
      return result.data.groups;
    } catch (e) {
      dispatchError('Unable to fetch group');
    }
  }, []);

  const getStudentById = useCallback(async (studentId) => {
    try {
      const result = await studentsAPI.get(`/students/${studentId}`);
      return result.data.students;
    } catch (e) {
      dispatchError('Unable to fetch students');
    }
  });

  const getStudentsByGroup = useCallback(async (groupId) => {
    try {
      const result = await axios.get(`/groups/${groupId}`);
      return result.data.students;
    } catch (e) {
      dispatchError('Unable to fetch students in group');
    }
  }, []);

  const findStudents = async (searchPhrase) => {
    try {
      const { data } = await studentsAPI.post(`/students/search`, {
        searchPhrase,
      });
      return data;
    } catch (e) {
      dispatchError('There are no particular students');
    }
  };

  return {
    getGroups,
    getStudentsByGroup,
    findStudents,
    getStudentById,
  };
};
