import { el } from 'redom';

const title = el('h1', 'Список моих предметов');

const list = el('ul');

const items = [
    { name: 'Веб-разработка', stack: 'HTML, CSS, JavaScript, Visual Studio Code', teacher: 'Иван Иванов', grade: 5 },
    { name: 'Python', stack: 'Python, Visual Studio Code', teacher: 'Петр Петров', grade: 4 },
    { name: 'C++', stack: 'C++, Visual Studio', teacher: 'Андрей Андреевич', grade: 5 },
];

items.forEach(item => {
    const li = el('li', [
        el('strong', item.name),
        el('p', `Стек: ${item.stack}`),
        el('p', `Преподаватель: ${item.teacher}`),
        el('p', `Оценка: ${item.grade}`)
    ]);
    list.append(li);
});

document.body.append(title, list);