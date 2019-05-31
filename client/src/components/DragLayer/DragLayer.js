import { __EXPERIMENTAL_DND_HOOKS_THAT_MAY_CHANGE_AND_BREAK_MY_BUILD__ as dnd } from 'react-dnd'
const { useDragLayer } = dnd

function DragLayerComponent(props) {
    const collectedProps = useDragLayer(spec)
    return <div className="col-lg-12"></div>
  }

  export default DragLayerComponent;