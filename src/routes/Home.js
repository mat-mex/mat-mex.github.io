import React, { Fragment } from 'react';
import ListItem from '../components/ListItem';
import List from '../components/List';
export default function Home() {
  return (
      <Fragment>
        <List>
          <ListItem color="#66cc99" icon="/icons/plus.svg" title="Калькулятор Зачетных Единиц"
                    text="Отмечайте сданные курсы, считайте баллы, планируйте на будущее"/>
          <ListItem color="#66cccc" title="Направления Подготовки"
                    text="Куда пойти учиться? Где сложнее? Мнения студентов"/>
          <ListItem color="#ffcc66" title="Электронные конспекты"
                    text="Записанные студентами лекции в .MD формате"/>
          <ListItem color="#cc6666" title="Учебная пратика"
                    text="Когда и как сдавать? Шаблоны документов"/>
        </List>
      </Fragment>
  );
}
