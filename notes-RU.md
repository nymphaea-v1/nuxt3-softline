## Заметки к макету

### Общее
- Два практически одинаковых цвета - #b01736 и #a30c33 - это тест на внимательность или опечатка? :thinking:
- Подогнала брейкпоинты под макет, добавила свой адаптив для корректного отображения на устройствах любой ширины, не только на больших мониторах/телефонах
- Не пон на счет макета для телефонов. Я так понимаю, имелось в виду:
**1)** Ширина контента - максимум 290 пикселей (с внутренними отступами - 300 пикселей), а внешний отступ резиновый
**2)** Отступы по бокам: внешний - 15 пикселей, внутренний - 5 пикселей, ширина контента - все остальное (резиновое)
Осуществила второй вариант, но можно легко изменить это (оставила закомментированным код под это у класса %container в assets/css/_helpers.scss)

### Header
- Указано, что надписи никуда не ведут. Соответственно, это не навигация (хотя изначально могло бы показаться, что это именно она), оформление в виде простого текста.

### Button
- Не указаны стили для disabled и active. Добавила свои.

### Numbers
- В макете у рядов явно задано расстояние между элементами, у первого ряда - 185 пикселей, у второго - 180. Why?
- Ладно, я посмотрела на версию для смартфонов и заплакала.

### Benefits
- Разные горизонтальные отступы у иконок в секции "Компенсационный пакет" и "Программа дополнительной мотивации" в мобильной версии - выглядит, конечно, очень интересно