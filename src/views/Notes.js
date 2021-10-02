import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'components/atoms/Button/Button';
import Note from 'components/molecules/Note/Note';
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from 'store';

import {
  FormWrapper,
  NotesWrapper,
  StyledFormField,
  Wrapper,
} from 'views/Notes.styles';

const Notes = () => {
  const notes = useSelector((state) => state.notes);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    setTimeout(() => {
      reset({
        title: '',
        content: '',
      });
    }, 2000);
  }, [reset]);

  const handleAddNote = ({ title, content }) => {
    console.log(title, content);
    dispatch(
      addNote({
        title,
        content,
      })
    );
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
      <NotesWrapper>
        {notes.length ? (
          notes.map(({ title, content, id }) => (
            <Note id={id} key={id} title={title} content={content} />
          ))
        ) : (
          <p>Create your first note</p>
        )}
      </NotesWrapper>
    </Wrapper>
  );
};

export default Notes;
