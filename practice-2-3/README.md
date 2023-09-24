Часть 2 (Практика)
===

2. Реализовать JavaScript функцию, которая делает запрос к https://jsonplaceholder.typicode.com/posts и выводит на странице полученные данные в виде таблицы без использования сторонних библиотек.
3. Реализовать таблицу на основе полученных данных с https://jsonplaceholder.typicode.com/posts без использования сторонних библиотек. Добавить возможность сортировки по столбцам (при нажатии на название столбца строки таблицы сортируются по возрастанию, при повторном клике - по убыванию). Над таблицей вывести поисковую строку. При вводе данных (не менее 3-х символов) в поисковую строку производить фильтрацию таблицы (строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются).


## Мой ответ

2. Функция реализована в файле [practice-2.html](practice-2.html). Не стала выносить в отдельный проект, т.к. функционал во многом дублирует 3 задание.
3. Функционал реализован в `search.js`, который подключается к `index.thml`. Публикация на [Github Pages](https://nagraiv.github.io/UniBase-practice2-3/).
