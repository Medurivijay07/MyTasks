import styled from 'styled-components'

export const AppMainContainer = styled.div`
  min-height: 100vh;
  display: flex;
`
export const LeftContainer = styled.div`
  width: 30%;
  min-height: 100vh;
  background-color: #131213;
  padding: 30px;
`
export const RightContainer = styled.div`
  width: 70%;
  min-height: 100vh;
  background-color: #000000;
  padding-top: 30px;
  padding-bottom: 30px;
  padding: 10px;
`
export const LeftTitle = styled.h1`
  color: #f3aa4e;
`
export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
`
export const LabelElement = styled.label`
  color: #ffffff;
`
export const InputElement = styled.input`
  background-color: #ffffff;
  outline: none;
  padding: 10px;
  margin-bottom: 30px;
  margin-top: 15px;
`
export const OptionElement = styled.select`
  outline: none;
  padding: 10px;
  margin-bottom: 30px;
  margin-top: 15px;
`
export const AddTaskButton = styled.button`
  background-color: #f3aa4e;
  border: none;
  border-radius: 7px;
  padding: 10px;
  padding-right: 20px;
  padding-right: 20px;
  cursor: pointer;
  outline: none;
  color: #ffffff;
`
export const RightTitle = styled.h1`
  color: #ffffff;
`
export const TagNamesList = styled.ul`
  display: flex;
`
export const EachTagItem = styled.li`
  margin-right: 10px;
`
export const TagButton = styled.button`
  border: 1px solid #f3aa4e;
  border-radius: 15px;
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  padding: 7px;
  cursor: pointer;
  outline: none;
  color: #ffffff;
  padding-left: 12px;
  padding-right: 12px;
`
export const NoTasksView = styled.div`
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
`
export const TasksList = styled.ul`
  display: flex;
  flex-direction: column;
`
