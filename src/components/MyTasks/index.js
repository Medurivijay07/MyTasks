import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import EachTask from '../EachTask'

import {
  AppMainContainer,
  LeftContainer,
  RightContainer,
  LeftTitle,
  FormContainer,
  LabelElement,
  InputElement,
  OptionElement,
  AddTaskButton,
  RightTitle,
  TagNamesList,
  EachTagItem,
  TagButton,
  NoTasksView,
  TasksList,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    userInput: '',
    selectedOptionId: tagsList[0].optionId,
    tasksList: [],
    activeTag: '',
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  onChangeTag = event => {
    this.setState({selectedOptionId: event.target.value})
  }

  onSubmitForm = event => {
    const {userInput, selectedOptionId} = this.state
    event.preventDefault()
    if (userInput !== '') {
      const newObject = {
        id: uuidv4(),
        userInput,
        selectedOptionId,
      }
      this.setState(prevState => ({
        tasksList: [...prevState.tasksList, newObject],
        userInput: '',
        selectedOptionId: tagsList[0].optionId,
      }))
    }
  }

  onClickingTag = id => {
    this.setState(prevState => ({
      activeTag: prevState.activeTag === id ? '' : id,
    }))
  }

  renderInputElement = () => {
    const {userInput} = this.state

    return (
      <>
        <LabelElement htmlFor="task">Task</LabelElement>
        <InputElement
          type="text"
          placeholder="Enter the task here"
          id="task"
          value={userInput}
          onChange={this.onChangeUserInput}
        />
      </>
    )
  }

  renderTags = () => {
    const {selectedOptionId} = this.state
    return (
      <>
        <LabelElement htmlFor="tag">Tags</LabelElement>
        <OptionElement
          value={selectedOptionId}
          onChange={this.onChangeTag}
          id="tag"
        >
          {tagsList.map(Item => (
            <option key={Item.optionId} value={Item.optionId}>
              {Item.displayText}
            </option>
          ))}
        </OptionElement>
      </>
    )
  }

  renderNoTasksView = () => (
    <NoTasksView>
      <p>No Tasks Added Yet</p>
    </NoTasksView>
  )

  renderTasksList = () => {
    const {tasksList, activeTag} = this.state

    const filteredTasks = activeTag
      ? tasksList.filter(Item => Item.selectedOptionId === activeTag)
      : tasksList

    return (
      <TasksList>
        {filteredTasks.map(Item => (
          <EachTask key={Item.id} item={Item} />
        ))}
      </TasksList>
    )
  }

  render() {
    const {tasksList, activeTag} = this.state
    return (
      <AppMainContainer>
        <LeftContainer>
          <LeftTitle>Create a task!</LeftTitle>
          <FormContainer onSubmit={this.onSubmitForm}>
            {this.renderInputElement()}
            {this.renderTags()}
            <AddTaskButton type="submit">Add Task</AddTaskButton>
          </FormContainer>
        </LeftContainer>
        <RightContainer>
          <RightTitle>Tags</RightTitle>
          <TagNamesList>
            {tagsList.map(Item => (
              <EachTagItem key={Item.optionId}>
                <TagButton
                  type="button"
                  isActive={Item.optionId === activeTag}
                  onClick={() => this.onClickingTag(Item.optionId)}
                >
                  {Item.displayText}
                </TagButton>
              </EachTagItem>
            ))}
          </TagNamesList>
          <RightTitle>Tasks</RightTitle>
          {tasksList.length === 0
            ? this.renderNoTasksView()
            : this.renderTasksList()}
        </RightContainer>
      </AppMainContainer>
    )
  }
}

export default MyTasks
