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
                icon="/icons/sum.svg" text="Подскажет, куда можно пройти на бюджет"/>
        </List>
        <List title="Поступившим">
          <Card color="#66cccc" title="Общежитие"
                text="Где находится? Как поселиться? Правила проживания"/>
          <Card color="#66cccc" title="Поликлиника"
                text="Мед.осмотр, обращения по&nbsp;болезни"/>
          <Card color="#66cccc" title="Стипендия"
                text="Обычная и повышенная. Сколько в рублях? Как её не потерять?"/>
          <Card color="#66cccc" title="Первая сессия"
                text="Когда начнется? Как выжить? Где взять хвостовку?"/>
        </List>
        <List title="Всем студентам">
          <Card color="#ff66cc" title="Расписание пар" href="https://istudent.urfu.ru/s/schedule"
                icon="/icons/calendar.svg" text="На сайте УрФУ"/>
          <Card color="#ffcc66" title="Электронные конспекты" href="https://mat-mex.github.io/old-site-with-conspects"
                badge="LEGACY" icon="/icons/book.svg" text="Записанные студентами лекции в .MD формате"/>
          <Card color="#ffcc66" title="Что делать, если потерял студик"
                text="К кому обращаться? Как восстановить?"/>
        </List>
        <List title="Старшим курсам">
          <Card color="#66cc99" icon="/icons/plus.svg" title="Калькулятор Зачетных Единиц"
                badge="LEGACY" href="http://creewick.github.io/zet"
                text="Отмечай сданные курсы, считай и планируй баллы"/>
          <Card color="#cc6699" title="Курсовая работа"
                text="Где взять тему? Когда и как сдавать? Шаблоны документов"/>
          <Card color="#cc6666" title="Учебная пратика"
                text="Когда и как сдавать? Шаблоны документов"/>
          <Card color="#cc6666" title="Спецкурсы и зачётные единицы"
                text="Сколько их нужно? Где их взять?"/>
        </List>
      </Fragment>
  );
}
