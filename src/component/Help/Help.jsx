import { useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { useRecoilState } from 'recoil';
import HelpCmdList from 'src/component/Help/HelpCmdList';
import HelpManual from 'src/component/Help/HelpManual';
import { helpOpenState } from 'src/state/NavBar.state';

const Help = ({ navBarRef }) => {
  const [targetIndex, setTargetIndex] = useState(null);
  const [isOpened, setIsOpened] = useRecoilState(helpOpenState);
  const [manualIsOpened, setManualIsOpened] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setPosition({
      x: window.innerWidth / 2 - 300,
      y: window.innerHeight / 2 - 300,
    });
  }, []);

  return (
    isOpened && (
      <Draggable defaultPosition={position} bounds='body'>
        <div className='absolute' ref={navBarRef}>
          {!manualIsOpened ? (
            <HelpCmdList
              setTargetIndex={setTargetIndex}
              setIsOpened={setIsOpened}
              setManualIsOpened={setManualIsOpened}
            />
          ) : (
            <HelpManual
              targetIndex={targetIndex}
              setManualIsOpened={setManualIsOpened}
              navBarRef={navBarRef}
            />
          )}
        </div>
      </Draggable>
    )
  );
};

export default Help;
