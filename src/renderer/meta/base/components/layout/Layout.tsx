/* eslint-disable react/jsx-props-no-spreading */
import { useResizable } from 'react-resizable-layout';
import Splitter from './Splitter';
import clsx from 'clsx';
import './Layout.css';

const Layout = () => {
  const {
    isDragging: isTerminalDragging,
    position: terminalH,
    splitterProps: terminalDragBarProps,
  } = useResizable({
    axis: 'y',
    initial: 150,
    min: 50,
    reverse: true,
  });
  const {
    isDragging: isFileDragging,
    position: fileW,
    splitterProps: fileDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 250,
    max: 250,
    min: 50,
  });
  const {
    isDragging: isPluginDragging,
    position: pluginW,
    splitterProps: pluginDragBarProps,
  } = useResizable({
    axis: 'x',
    initial: 200,
    min: 50,
    reverse: true,
  });

  return (
    <div className="flex flex-column h-screen bg-dark font-mono color-white overflow-hidden">
      <div className="flex grow">
        <div
          className={clsx('shrink-0 contents', isFileDragging && 'dragging')}
          style={{ width: fileW }}
        >
          File Tree
        </div>
        <Splitter isDragging={isFileDragging} {...fileDragBarProps} />
        <div className="flex grow">
          <div className="grow bg-darker contents">Editor</div>
          <Splitter isDragging={isPluginDragging} {...pluginDragBarProps} />
          <div
            className={clsx(
              'shrink-0 contents',
              isPluginDragging && 'dragging'
            )}
            style={{ width: pluginW }}
          >
            Plugin
          </div>
        </div>
      </div>
      <Splitter
        dir="horizontal"
        isDragging={isTerminalDragging}
        {...terminalDragBarProps}
      />
      <div
        className={clsx(
          'shrink-0 bg-darker contents',
          isTerminalDragging && 'dragging'
        )}
        style={{ height: terminalH }}
      >
        Terminal
      </div>
    </div>
  );
};

export default Layout;
