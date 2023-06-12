import style from './list.module.scss';
import Item from "./item/index";
import { IProps } from '../../interface/IProps';


function List({tarefas, selecionaTarefa}: IProps) {
  return(
    <aside className={style.listaTarefas}>
      <h2>
          Estudos do dia
      </h2>
      <ul>
          {tarefas.map((item, index) => (
            <Item
            selecionaTarefa = {selecionaTarefa}
            key={item.id}
            {...item}/>
          ))}
      </ul>
    </aside>
  )
}

export default List;
