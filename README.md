Часть 1 (Теория)
===

1. Написать что выводит данный код. Предложите 2 варианта модификации кода, чтобы ответ был следующим: Bad: 10, Bad: 12, Good: 15, Good: 21

```
const arr = [10, 12, 15, 21];

  for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
      console.log(arr[i] > 13 ? `Good: ${arr[i]}` : `Bad: ${arr[i]}`);
    }, 3000);
  }
```

Часть 2 (Практика)
===
В качестве ответа принимаются html/js/css файлы. (Как плюс -- выложить ответы на GitHub Pages и приложить ссылки в readme.md)

1. Сверстать модальное окно, без использования сторонних библиотек. Внутри модального окна реализовать форму. Форма не должна быть доступна к отправке, если поля не заполнены, либо форма не валидна. Реализовать мобильную адаптацию. Реализовать возможность открыть/закрыть модальное окно на странице. Как плюс использование БЭМ-методологии. Дизайн формы в figma
2. Реализовать JavaScript функцию, которая делает запрос к https://jsonplaceholder.typicode.com/posts и выводит на странице полученные данные в виде таблицы без использования сторонних библиотек. 
3. Реализовать таблицу на основе полученных данных с https://jsonplaceholder.typicode.com/posts без использования сторонних библиотек. Добавить возможность сортировки по столбцам (при нажатии на название столбца строки таблицы сортируются по возрастанию, при повторном клике - по убыванию). Над таблицей вывести поисковую строку. При вводе данных (не менее 3-х символов) в поисковую строку производить фильтрацию таблицы (строки таблицы, данные которых не содержат подстроку, введённую пользователем, скрываются).


# Мой ответ

## Часть 1 (Теория)

#### 1.1. [theory-1](./theory-1/)  

## Часть 2 (Практика)

#### 2.1. Смотреть код: [practice-1](./practice-1/)  Публикация на [Github Pages](https://nagraiv.github.io/UniBase-practice1/).

#### 2.2. Смотреть код: [practice-2](./practice-2-3/practice-2.html)  Публикация на [Github Pages](https://nagraiv.github.io/UniBase-testTask/).

#### 2.3. Смотреть код: [practice-3](./practice-2-3/)  Публикация на [Github Pages](https://nagraiv.github.io/UniBase-practice2-3/).

