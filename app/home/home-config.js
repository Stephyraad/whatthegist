function homeState($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home',
            component: 'home'
        })
}

export default homeState;
