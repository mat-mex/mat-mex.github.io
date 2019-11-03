import React, { Fragment } from 'react';
import Card from '../components/Card/Card';
import List from '../components/List/List';
export default function Home() {
  return (
      <Fragment>
        <List title="Все карточки">
          <Card color="#66cc99" icon="/icons/plus.svg" title="Калькулятор Зачетных Единиц"
                text="Отмечайте сданные курсы, считайте баллы, планируйте"/>
          <Card color="#66cccc" title="Направления Подготовки"
                text="Куда пойти учиться? Где сложнее? Мнения студентов"/>
          <Card color="#ffcc66" title="Электронные конспекты"
                text="Записанные студентами лекции в .MD формате"/>
          <Card color="#cc6666" title="Учебная пратика"
                text="Когда и как сдавать? Шаблоны документов"/>
        </List>
        <List title="Ещё карточки">
          <Card color="#66cc99" icon="/icons/plus.svg" title="Калькулятор Зачетных Единиц"
                text="Отмечайте сданные курсы, считайте баллы, планируйте"/>
          <Card color="#66cccc" title="Направления Подготовки"
                text="Куда пойти учиться? Где сложнее? Мнения студентов"/>
          <Card color="#ffcc66" title="Электронные конспекты"
                text="Записанные студентами лекции в .MD формате"/>
          <Card color="#cc6666" title="Учебная пратика"
                text="Когда и как сдавать? Шаблоны документов"/>
        </List>
        <List title="И ещё карточки">
          <Card color="#66cc99" icon="/icons/plus.svg" title="Калькулятор Зачетных Единиц"
                text="Отмечайте сданные курсы, считайте баллы, планируйте"/>
          <Card color="#66cccc" title="Направления Подготовки"
                text="Куда пойти учиться? Где сложнее? Мнения студентов"/>
          <Card color="#ffcc66" title="Электронные конспекты"
                text="Записанные студентами лекции в .MD формате"/>
          <Card color="#cc6666" title="Учебная пратика"
                text="Когда и как сдавать? Шаблоны документов"/>
        </List>
      </Fragment>
  );
}
