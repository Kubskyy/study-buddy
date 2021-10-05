import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import { useAddNoteMutation, useGetNotesQuery } from 'store';

import {
  FormWrapper,
  NotesWrapper,
  StyledFormField,
  Wrapper,
} from 'views/Notes.styles';
import { Title } from 'components/atoms/Title/Title';

const Notes = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { data, isLoading } = useGetNotesQuery();
  const [addNote] = useAddNoteMutation();

  useEffect(() => {
    setTimeout(() => {
      reset({
        title: '',
        content: '',
      });
    }, 2000);
  }, [reset]);

  const handleAddNote = ({ title, content }) => {
    addNote({ title, content });
  };

  return (
    <Wrapper>
      <FormWrapper onSubmit={handleSubmit(handleAddNote)}>
        <StyledFormField
          label="Title"
          name="title"
          id="title"
          {...register('title', { required: true })}
        />
        <StyledFormField
          isTextarea
          label="Content"
          name="content"
          id="content"
          {...register('content', { required: true })}
        />
        <Button type="submit">Add</Button>
      </FormWrapper>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <NotesWrapper>
          {data.notes.length ? (
            data.notes.map(({ title, content, id }) => (
              <Note id={id} key={id} title={title} content={content} />
            ))
          ) : (
            <p>Create your first note</p>
          )}
        </NotesWrapper>
      )}
    </Wrapper>
  );
};

export default Notes;
