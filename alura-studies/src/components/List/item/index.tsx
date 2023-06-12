import { ITaskCheck } from '../../../interface/ITaskCheck';
import style from '../list.module.scss';

export default function Item({tarefa, tempo, selecionado, completado, id,  selecionaTarefa}: ITaskCheck) {
    return (
          <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''}`} 
          onClick={() => selecionaTarefa(
            {
              tarefa,
              tempo,
              selecionado,
              completado, 
              id
            }
          )}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
          </li>
        )
}
