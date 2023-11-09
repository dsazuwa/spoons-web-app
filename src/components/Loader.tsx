import CircularProgress from '@mui/material/CircularProgress';

function Loader({ height }: { height: string | number }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height,
      }}
    >
      <CircularProgress />
    </div>
  );
}

export default Loader;
