import { ITask } from "./ITask";

export interface ITaskCheck extends ITask{
  selecionaTarefa: (tarefaSelecionada: ITask)=>void
}