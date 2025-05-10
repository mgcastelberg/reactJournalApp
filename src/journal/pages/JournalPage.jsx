import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../view/NoteView'
import { NothingSelectedView } from '../view/NothingSelectedView'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'

export const JournalPage = () => {

  const dispatch = useDispatch();

  const onClickNewNote = () => {
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>  

      {/* Nothing selected */}
      <NothingSelectedView />

      {/* Note View */}
      {/* <NoteView /> */}

      <IconButton 
        onClick={ onClickNewNote } 
        size='large' 
        sx={{
          color: 'white', 
          backgroundColor:'error.main', 
          ':hover': { backgroundColor: 'error.main', opacity: 0.8 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}>

        <AddOutlined sx={{ fontSize: 30 }} />

      </IconButton>

    </JournalLayout>
  )
}
