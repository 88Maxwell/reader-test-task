# TEST TASK STATUS (READY TO REVIEW)

## Перелік запитань, уточнень, зауважень щодо цього ТЗ
1. "Ф-ція сповістити автора про помилку" - не конфліктує з i18n
2. По роботі з текстом більше питання до реалізації, editor`у і форматі даних отриманих з сервера.
3. "Навігація по главам" ф-ція "Спочатку старі розділи" виглядає overhead`но і може конфліктувати з "пейволом"
4. "Закладки" Напрошується ф-ціонал для ручного виставлення закладки, в певному місті тексту, або глави, так як читач може перечитувати, або пропускати певні частини тексту.

## Перелік зробленого/незробленого/зміненого навмисне
1. ЗМІНЕНО: Колір теми - не слайдер, було використано toggle, так як може бути лише 2 значення
2. ЗМІНЕНО: Select для шрифта, немає disabled станів для кнопок, так як як вони не промальовані в двох режимах (dark/light)
3. ЗМІНЕНО: Для зміни розміру тексту використав елемент Slider, як для mobile так і для desktop, так як він хоча б орієнтовно показує діапазон зміни користувачу (в ідеалі вказувати це ще і явно число, але в дизайні цього немає)
4. ЗРОБЛЕНО ДОДАТКОВО: відкриття Mobile Setting Drawer свайпом вверх з нижньої чверті екрану
5. НЕ РОБИВ: Логіку на go back (кнопка повернення)
6. НЕ РОБИВ: логіку ф-ціональності для налаштувань (окрім перемикання теми)
7. НЕ РОБИВ: click outside для Mobile Setting Drawer
8. НЕ РОБИВ: перемикання сторінок/пагінацію
9. НЕ РОБИВ: hover/focus/active стани для елементів, так як відсутній для цього дизайн система 
10. ЗРОБЛЕНО: Скрол вниз на мобайлі прикриває AppBar
11. ЗРОБЛЕНО: Taп в центрі екрану на мобайлі показує AppBar якщо він був схований
12. ЗРОБЛЕНО ДОДАТКОВО: Кнопка "підписатись на автора" (в ТЗ сказано не робити в дизайні є)
13. НЕ РОБИВ: Горизонтальний (перевернути) варіант мобайлу


## Додатково
- Є велика проблема з кольоровою темою та іменуванням змінних для кольорів, інколи вони звучать вкрай абсурдно та не логічно (по типу "light/label/dark/main text").
- Зустрічаються кольори не додані в змінні, їх приходилось хардкодить, або придумувати змінні.
- Елементи перемикання розміру шрифта на мобайлі не є зручним, так як не показує теперішній стан та не є консистентним з Desktop`ом, + потребує відображення disabled state
- Дуже часто важко обрати елемент в Figma, обирається щось інше, що затрудняє роботу з Figma, і часто провокує до помилок та випущень по UI, складається враження, що в Figma дизайн експортується з іншого формату, ну або малюється все не згідно кращим практикам.