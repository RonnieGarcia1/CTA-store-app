import * as React from 'react';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

 function Loading() {
  const [query, setQuery] = React.useState('idle');
  const timerRef = React.useRef();

  React.useEffect(
    () => () => {
      clearTimeout(timerRef.current);
    },
    []
  );
  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    if (query !== 'idle') {
      setQuery('idle');
      return;
    }

    setQuery('progress');
    timerRef.current = window.setTimeout(() => {
      setQuery('success');
    }, 2000);
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Box sx={{ height: 5 }}>
        {query === 'success' ? (
          <Typography className="load-success"><h4>login failed</h4></Typography>
        ) : (
          <Fade
            in={query === 'progress'}
            style={{
              transitionDelay: query === 'progress' ? '800ms' : '0ms',
            }}
            unmountOnExit
          >
            <CircularProgress />
          </Fade>
        )}
        <br></br>
      </Box>
      <h4 onClick={handleClickQuery} sx={{ m: 2 }}>
        {query !== 'idle' ? 'logging you in...' : 'Login'}
      </h4>
    </Box>
  );
}

export default Loading;