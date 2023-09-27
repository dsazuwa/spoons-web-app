import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function CategoryNotes({ notes }: { notes: string[] | undefined }) {
  return (
    <Stack alignItems='center'>
      {notes &&
        notes.map((note, index) => (
          <Typography
            key={index}
            variant='caption'
            sx={{ fontSize: '10px', textAlign: 'center', maxWidth: '700px' }}
          >
            {note}
          </Typography>
        ))}
    </Stack>
  );
}

export default CategoryNotes;
