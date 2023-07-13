export const projects = [
    {
        title: 'Магазин пиццы',
        image: '/images/pizza.png',
        stack: ['TypeScript', 'React', 'SCSS / CSS modules', 'Redux / Redux Toolkit', 'ESlint'],
        text: 'магазин пиццерии на React',
        desc: 'Один из моих самых первых "серьезных" проектов. Мне понравилось его делать, с ним я впервые осваивал Typescript! Тут реализована фильтрация через URL, корзина, а так же можно выбрать тип определенной пиццы',
        id: 1,
        url: 'https://react-typescript-pizza-pearl.vercel.app/'
    },
    {
        title: 'Магазин Султан',
        image: '/images/sultan.png',
        stack: ['TypeScript', 'React', 'SCSS / CSS modules', 'Redux / Redux Toolkit', 'ESlint'],
        text: 'Магазин ухода за телом на React',
        desc: 'Этот проект куда серьезней того, что я делал до этого, тк тут работает связка всех фильтров на сайте, причем не через URL. Так же реализована панель админа, можно удалять, редактировать или создавать карточки. Все созданные карточки сохраняются в LocaleStore. Данные придумывал сам',
        id: 2,
        url: 'https://sultan-shop-six.vercel.app/'
    },
    {
        title: 'Иви-портал',
        image: '/images/ivi-portal.png',
        stack: ['TypeScript', 'React / NextJS', 'SCSS / CSS modules', 'Redux / Redux Toolkit', 'ESlint', 'Cypress / Jest', 'StoryBook', 'Swiper', 'react-i18next'],
        text: 'Онлайн кинотеатр с реальным бекендом на NextJs',
        desc: 'Самый крупный проект в моей карьере. Реализована вся часть оригинального сайта, работает с реальным бекендом, чья БД была создана на основе кинопоиска. Разрабатывал проект не один. Фильтрация, отрисовка, авторизация - все работает через бекенд, на сайте можно зарегестрироваться. Проект был так же прогнан через множества тестов, реализована StoryBook. К сожалению, деплоя нет, ибо мои бекендеры отказались делать деплой',
        id: 3,
        url: 'https://github.com/SVBadSeed/ivi-portal'
    },
    {
        title: 'Чемпионат по экономике',
        image: '/images/finsgram.png',
        stack: ['Webpack', 'SCSS'],
        text: 'Чемпионат в Хабаровске на html-css со сборщиком webpack',
        desc: 'Обычный лендинг. Никакой логики нет, просто верстка макета, но со сборщиком webpack',
        id: 4,
        url: 'https://svbadseed.github.io/Finsgram-championship/'
    },
    {
        title: 'Магазин корма для котов',
        image: '/images/cat.png',
        stack: ['TypeScript', 'React', 'CSS'],
        text: 'Мини-магазин карточек с едой для котов на React',
        desc: 'Мини магазин с мемным котом нямушка. Логика простая, работают ховеры, эктивы. Реагирует в любых случаях и подставляет разные данные в зависимости от того, что нужно',
        id: 5,
        url: 'https://cat-food-shop.vercel.app/'
    },
    {
        title: 'Портфолио',
        image: '/images/portfolio.png',
        stack: ['TypeScript', 'React / Astro', 'Taiwind / CSS', 'Swiper', 'React-toastify / react-tilty'],
        text: 'Мое портфолио на AstroJS ',
        desc: 'Этот проект я решил написать на новой для себя технологии и это - Astro. Делая эту работу мне он очень понравился, особенно если сравнивать его с NextJS, ведь они очень похожи. Только Next - SSR, а Astro - островная архитектура. Она даже по скорости разработки многократно превосходит Next. Впрочем, отдаю предпочтение этому фреймворку и, надеюсь, продолжу его использовать и дальше :) Так же на этом проекте освоил Taiwind',
        id: 6,
        url: 'https://svbadseed.github.io/Portfolio/'
    },
    {
        title: 'Карточки',
        image: '/images/cards.png',
        stack: ['TypeScript', 'React', 'CSS'],
        text: 'Карточки со слайдерами внутри на React',
        desc: 'Простенькие слайдеры внутри карточек, данные брались с placeholder. Так же работает прелоудер и подгрузка карточек при клике на кнопку',
        id: 7,
        url: 'https://svbadseed.github.io/cards-project/'
    },
    {
        title: 'Комментарии',
        image: '/images/comments.png',
        stack: ['JavaScript', 'Webpack', 'CSS'],
        text: 'Приложение для оставления комментариев на нативном js',
        desc: 'Простенькое приложение для оставление комментариев. Форма абсолютно валидная, нельзя не заполнить что-то, так же нельзя отправлять пустые сообщения. В случае не указания даты - указывается сегодняшняя. Можно поставить лайк',
        id: 8,
        url: 'https://svbadseed.github.io/comments-blog/'
    },
    {
        title: 'Поиск репозиториев',
        image: '/images/reps.png',
        stack: ['JavaScript', 'Webpack', 'CSS'],
        text: 'Приложение по поиску репозиториев на нативном js',
        desc: 'Приложение для поиска репозиториев на гитхаб. Ищет все, что угодно по тому, что совпадает в написанном вами',
        id: 9,
        url: 'https://svbadseed.github.io/API-repositories/'
    },
]