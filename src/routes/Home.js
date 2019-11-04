import React, { Fragment } from 'react';
import Card from '../components/Card/Card';
import List from '../components/List/List';

export default function Home() {
  return (
      <Fragment>
        <List title="Абитуриентам">
          <Card color="#66cccc" title="Направления Подготовки"
                text="Куда пойти учиться? Где легче? Мнения студентов"/>
          <Card color="#6666cc" title="Калькулятор ЕГЭ" href="https://priem.urfu.ru/#/calculator-ege"
                text="Подскажет, куда можно пройти на бюджет"/>
        </List>
        <List title="Студентам">
          <Card color="#ffcc66" title="Электронные конспекты" href="https://mat-mex.github.io/old-site-with-conspects"
                text="Записанные студентами лекции в .MD формате"/>
        </List>
        <List title="Старшим курсам">
          <Card color="#66cc99" icon="/icons/plus.svg" title="Калькулятор Зачетных Единиц"
                href="http://creewick.github.io/zet"
                text="Отмечай сданные курсы, считай и планируй баллы"/>
          <Card color="#cc6699" title="Курсовая работа"
                text="Где взять тему? Когда и как сдавать? Шаблоны документов"/>
          <Card color="#cc6666" title="Учебная пратика"
                text="Когда и как сдавать? Шаблоны документов"/>
        </List>
      </Fragment>
  );
}
