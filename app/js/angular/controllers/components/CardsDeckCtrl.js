/*global angular*/

(function(angular, undefined) {

    "use strict";

    function CardsDeckCtrl() {
        var ctrl = this;
    }

    CardsDeckCtrl.$inject = [];

    angular
        .module("cards.controllers.components")
        .controller("CardsDeckCtrl", CardsDeckCtrl);

})(angular);
