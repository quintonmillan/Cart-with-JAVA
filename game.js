var module = angular.module('game', []);

module.controller('GameCtrl', GameCtrl);

function GameCtrl() {
    var vm = this;
    vm.games = [];

    vm.addGame = function () {
        vm.games.push({
            title: vm.title,
            image: vm.image,
            genre: vm.genre,
            complete: false
        });

        vm.title = '';
        vm.image = '';
        vm.genre = '';
    };

    vm.removeAllGames = function () {
        vm.games.splice(0);
    };
}
