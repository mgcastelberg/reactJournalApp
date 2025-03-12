import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../view/NoteView'
import { NothingSelectedView } from '../view/NothingSelectedView'

export const JournalPage = () => {
  return (
    <JournalLayout>  

      {/* Nothing selected */}
      {/* <NothingSelectedView /> */}

      {/* Note View */}
      <NoteView />

    </JournalLayout>
  )
}
