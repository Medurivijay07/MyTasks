import {EachTaskItem, TaskName, TagButton} from './styledComponents'

const EachTask = props => {
  const {item} = props
  const {userInput, selectedOptionId} = item
  return (
    <EachTaskItem>
      <TaskName>{userInput}</TaskName>
      <TagButton type="button">
        <p>{selectedOptionId}</p>
      </TagButton>
    </EachTaskItem>
  )
}

export default EachTask
