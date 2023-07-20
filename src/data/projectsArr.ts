export const projects = [
    {
        title: 'Магазин пиццы',
        image: '/images/pizza.png',
        stack: ['TypeScript', 'React', 'SCSS / CSS modules', 'Redux / Redux Toolkit', 'ESlint'],
        text: 'магазин пиццерии на React',
        desc: 'Один из моих самых первых серьезных проектов. Мне понравилось его делать, с ним я впервые осваивал TypeScript. ' +
            'Здесь реализована фильтрация через URL, корзина, а также можно выбрать тип определенной пиццы.',
        id: 1,
        url: 'https://react-typescript-pizza-pearl.vercel.app/'
    },
    {
        title: 'Магазин Султан',
        image: '/images/sultan.png',
        stack: ['TypeScript', 'React', 'SCSS / CSS modules', 'Redux / Redux Toolkit', 'ESlint'],
        text: 'Магазин ухода за телом на React',
        desc: 'Этот проект намного серьезнее, чем то, что я делал до этого, потому что здесь работает связка всех' +
            ' фильтров на сайте, и при этом не используется фильтрация через URL. Также реализована панель администратора,' +
            ' где можно удалять, редактировать или создавать карточки. Все созданные карточки сохраняются в локальном' +
            ' хранилище (LocaleStorage). Данные придумывал сам.',
        id: 2,
        url: 'https://sultan-shop-six.vercel.app/'
    },
    {
        title: 'Иви-портал',
        image: '/images/ivi-portal.png',
        stack: ['TypeScript', 'React / NextJS', 'SCSS / CSS modules', 'Redux / Redux Toolkit', 'ESlint', 'Cypress / Jest', 'StoryBook', 'Swiper', 'react-i18next'],
        text: 'Онлайн кинотеатр с реальным бекендом на NextJs',
        desc: 'Это самый крупный проект в моей карьере. Реализована вся часть оригинального сайта, работающая с базой ' +
            'данных на основе КиноПоиска. Проект был разработан не только мной. Фильтрация, отрисовка и авторизация -' +
            ' все работает через бэкенд, на сайте можно зарегистрироваться. Регистрация реализована через JWT-токены.' +
            ' Проект был протестирован множеством тестов, также реализована Storybook. К сожалению, деплоя нет, так как' +
            ' мои бэкендеры отказались делать деплой.',
        id: 3,
        url: 'https://github.com/SVBadSeed/ivi-portal'
    },
    {
        title: 'Чемпионат по экономике',
        image: '/images/finsgram.png',
        stack: ['Webpack', 'SCSS'],
        text: 'Чемпионат в Хабаровске на html-css со сборщиком webpack',
        desc: 'Это обычный лендинг, в котором нет никакой логики, только верстка макета. ' +
            'Однако, для сборки проекта использовался сборщик webpack.',
        id: 4,
        url: 'https://svbadseed.github.io/Finsgram-championship/'
    },
    {
        title: 'Магазин корма для котов',
        image: '/images/cat.png',
        stack: ['TypeScript', 'React', 'CSS'],
        text: 'Мини-магазин карточек с едой для котов на React',
        desc: 'Это мини-магазин с мемным котом Нямушка. Логика простая: работают ховеры и эктивы.' +
            ' Он реагирует в любых случаях и подставляет разные данные в зависимости от того, что нужно.',
        id: 5,
        url: 'https://cat-food-shop.vercel.app/'
    },
    {
        title: 'Портфолио',
        image: '/images/portfolio.png',
        stack: ['TypeScript', 'React / Astro', 'Taiwind / CSS', 'Swiper', 'React-toastify / react-tilty / react-hook-form', 'emailjs-com'],
        text: 'Мое портфолио на AstroJS ',
        desc: '"Я решил написать этот проект на новой для себя технологии - Astro. При работе над проектом мне он очень' +
            ' понравился, особенно если сравнивать его с Next.js, так как они похожи. Однако Astro многократно превосходит' +
            ' Next.js по скорости разработки. Я предпочитаю использовать этот фреймворк и надеюсь продолжать его использовать ' +
            'в дальнейшем :) Также на этом проекте я освоил Tailwind и множество разных библиотек.',
        id: 6,
        url: 'https://portfolio-svbadseed.vercel.app/'
    },
    {
        title: 'Карточки',
        image: '/images/cards.png',
        stack: ['TypeScript', 'React', 'CSS'],
        text: 'Карточки со слайдерами внутри на React',
        desc: 'Это простенькие слайдеры внутри карточек, данные для которых были взяты с сайта-заглушки (placeholder). ' +
            'Также на сайте работает прелоудер и подгрузка карточек при клике на кнопку.',
        id: 7,
        url: 'https://svbadseed.github.io/cards-project/'
    },
    {
        title: 'Комментарии',
        image: '/images/comments.png',
        stack: ['JavaScript', 'Webpack', 'CSS'],
        text: 'Приложение для оставления комментариев на нативном js',
        desc: 'Это простенькое приложение для оставления комментариев. Форма абсолютно валидная,' +
            ' нельзя отправить сообщение, не заполнив все поля, и нельзя отправлять пустые сообщения. ' +
            'В случае, если дата не указана, указывается сегодняшняя дата. Также можно поставить лайк.',
        id: 8,
        url: 'https://svbadseed.github.io/comments-blog/'
    },
    {
        title: 'Поиск репозиториев',
        image: '/images/reps.png',
        stack: ['JavaScript', 'Webpack', 'CSS'],
        text: 'Приложение по поиску репозиториев на нативном js',
        desc: 'Это приложение для поиска репозиториев на GitHub. Вы можете искать все, что угодно,' +
            ' используя ключевые слова, которые вы напишете.',
        id: 9,
        url: 'https://svbadseed.github.io/API-repositories/'
    },
]