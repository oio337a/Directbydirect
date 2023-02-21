import { createContext, useState } from 'react';
import Header from './component/infoBar/Header';
import Command from './component/command/Command';
import View from './component/view/View';
import GitButton from './component/infoBar/GitButton';
import Directory from './component/init/Directory';
import Tree from './model/Tree';
import { TYPE } from './constants/Type';
import { styled } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';
import Colors from './constants/Colors';
import { Box, Stack } from '@mui/material';

export const Interaction = createContext();

function App() {
  const [record, setRecord] = useState({ cmd: [], error: [] });
  const [cwd, setCwd] = useState([]);
  const [root, setRoot] = useState();

  const onDirec = (direc) => {
    const root = new Tree(direc, TYPE.DIR);
    setCwd([root]);
    setRoot(root);
  };

  return (
    <ThemeProvider theme={Colors}>
      <Wrapper>
        <Header />
        <MiddleWrapper>
          {cwd.length > 0 ? (
            <Interaction.Provider
              value={{ record, setRecord, cwd, setCwd, root }}
            >
              <Stack direction='row' justifyContent='space-between'>
                <Command />
                <View />
              </Stack>
            </Interaction.Provider>
          ) : (
            <Directory onDirec={onDirec} />
          )}
        </MiddleWrapper>
        <GitButton />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;

const Wrapper = styled(Box)`
  position: relative;
  font-family: system-ui;
  color: white;
  height: 100%;
  width: 100%;
  background-color: #213c4b;
`;

const MiddleWrapper = styled(Box)`
  display: flex;
  height: 96%;
  width: 100%;
  background-color: #213c4b;
  justify-content: center;
  align-content: center;
`;
