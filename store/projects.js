export const state = () => ({
    projects: [
        {
            id: 1, 
            name: 'Roller skates Store',
            stack: 'Vue.js, vue-cli, vuex, vue-router, axios, json-server, Адаптивная верстка',
            screen:'RSS.png',
            http: "http://217.25.89.87/",
            comment: "Небольшой pet-project, разработан в целях практики работы с Vue.js"},
        {
            id: 2, 
            name: 'Antools',
            stack: 'html, css, js, gulp, Адаптивная верстка, Figma',
            screen: 'Antools.png',
            http: "https://jarer0n.github.io/AntoolsGHP/",
            comment: "Выполнен по макету Figma для тренировки верстки"
    },
        {
            id: 3,
            name: 'Calculator Vue 3',
            stack: 'html, css, js, gulp, Адаптивная верстка, Figma',
            screen: "Calc.png",
            http: "https://jarer0n-calc-vue3.netlify.app/",
            comment: "Практика Vue.js"
        },
        {
            id: 4,
            name: 'Artifical-Intelligence',
            stack: 'Vue.js',
            screen: "Artifical.png",
            http: "https://jarer0n.github.io/Artifical-IntelligenceGHP/",
            comment: "Выполнен по макету Figma для тренировки верстки"
        },
        {
            id: 5,
            name: 'Кэнбу Кокоро',
            stack: 'html, css, js, gulp, Адаптивная верстка, PSD',
            screen: "Kenbu.png",
            http: "https://jarer0n.github.io/kenbu-kokoroGHP/",
            comment: "Маленький коммерческий проект-форма",
        }
    ]
})

export const getters = {
    GET_PROJECTS: state => state.projects
}