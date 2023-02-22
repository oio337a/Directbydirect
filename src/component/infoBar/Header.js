import { styled } from '@mui/material/styles';
import Theme from './Theme';
import { Box, AppBar, Stack } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useTheme } from '@mui/material/styles';

const Header = () => {
  const theme = useTheme();
  return (
    <Wrapper>
      <AppBar position='static' elevation={0} color='primary'>
        <Stack
          direction='row'
          justifyContent='space-between'
          sx={{ m: '0.1em' }}
        >
          <CardMedia
            component='img'
            sx={{
              ml: 3,
              width: 190,
              height: 50,
              objectFit: 'contain',
              cursor: 'pointer',
              float: 'left',
            }}
            image='img/logo.png'
            alt='go home'
            onClick={() => {
              window.location.reload();
            }}
          />
          <Stack direction='row' justifyContent='flex-end' spacing={2}>
            <Theme />
          </Stack>
        </Stack>
      </AppBar>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled(Box)`
  position: relative;
  flexgrow: 1;
  height: 5%;
  width: 100%;
`;
