import { ITask } from "./ITask"

export interface IProps{
  tarefas: ITask[],
  selecionaTarefa: (tarefaSelecionada: ITask)=>void
}
