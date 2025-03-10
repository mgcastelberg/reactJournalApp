import { Typography } from '@mui/material'
import { MailOutline } from '@mui/icons-material'
import { JournalLayout } from '../layout/JournalLayout'

export const JournalPage = () => {
  return (
    <JournalLayout>
      <Typography variant={'h1'}>JournalPage</Typography>
      <Typography >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias laboriosam et similique. Totam, consequatur saepe 
        esse eius vel exercitationem. Dolore est asperiores molestiae eum aliquid doloribus in hic cumque reprehenderit.
      </Typography>
      <MailOutline style={{ fontSize: '50px' }} />

      {/* Nothing selected */}

      {/* Note View */}

    </JournalLayout>
  )
}
