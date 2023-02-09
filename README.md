page : https://hjw4595.github.io/wanted-pre-onboarding-challenge-fe-2/
문서화에대한 개념이 부족해 이런함수를 만들겠다 정도만 정의한것같습니다...
추후 강의를 통해 습득후 개편해 작성해보겠습니다 감사합니다



2  인터페이스 사용해서 / 추후 브렌치로 나눠서 등록 필요
interface Todo {
  id : number,
  content : string,
  isComplete: boolean,
  category: string,
  tags : {id : number , name : string}[],
}

interface TodoModified {
    content : Todo['content'],
    category : Todo['category'],
    tags?: Todo['tags']
}

interface Tag {
    id : number;
    name : string;
}

const createTodo = (item : TodoModified) => {}
const deleteTodo = (id : Todo['id']) => {}
const deleteTodoAll = () => {}
const modifiedTodo = (item : TodoModified ) => {}
const createTag = (name : string) => {}
