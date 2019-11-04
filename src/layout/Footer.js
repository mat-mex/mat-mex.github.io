import React from 'react';
import styled from 'styled-components';
import Link from "../components/Link";

export default function Footer() {
  return (
    <MyFooter>
      <div className="limitWidth flex">
        <Column>
          <Link bold href="https://urfu.ru/ru/">Уральский Федеральный Университет</Link>
          <Link href="https://priem.urfu.ru/#/">Кабинет абитуриента</Link>
          <Link href="https://urfu.ru/ru/applicant/contacts/">Приёмная комиссия</Link>
          <Link href="https://vk.com/abiturient_urfu">ВК: Абитуриент</Link>
          <Link href="https://vk.com/public22941070">ВК: УрФУ</Link>
        </Column>
        <Column>
          <Link bold href="https://imkn.urfu.ru">Институт Математики и Компьютерных Наук</Link>
          <Link href="http://kma.math.usu.ru">Кафедра Математического Анализа и Теории Функций</Link>
          <Link href="http://kmf.math.usu.ru">Кафедра Математической Физики</Link>
          <Link href="http://kadm.math.usu.ru">Кафедра Алгебры и Фундаментальной Математики</Link>
          <Link href="https://vk.com/math_mech">ВК: МатМех</Link>
        </Column>
        <Column>
          <Link bold href="https://creewick.github.io">Designed by Creewick</Link>
          <Link href="https://vk.com/creewick">Илья Юхатский</Link>
          <Link href="https://vk.com/denchickkk">Денис Волков</Link>
        </Column>
      </div>
    </MyFooter>
  );
}

const Column = styled('div')`
    flex-grow: 1;
    padding: 20px;
`;

const MyFooter = styled('div')`
    width: 100%;
    padding: 50px 0 40px;
    top: 0;
    
    font-size: 14px;
    overflow: hidden;
    box-shadow: inset 0 3px 5px -5px black;
    background-color: #ddd;
    
    @media screen and (max-width: 768px) {
        div {
            flex-direction: column;
        }  
    }
`;
