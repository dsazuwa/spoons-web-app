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
            sx={{
              textAlign: 'center',
              maxWidth: { xs: '450px', sm: '550px', md: '700px' },
              fontSize: { xs: '8px', sm: '10px', md: '12px' },
            }}
          >
            {note}
          </Typography>
        ))}
    </Stack>
  );
}

export default CategoryNotes;
