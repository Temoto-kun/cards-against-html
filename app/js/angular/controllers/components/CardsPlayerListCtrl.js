/*global angular*/

(function(angular, undefined) {

    "use strict";

    function CardsPlayerListCtrl() {
        var ctrl = this;
    }

    CardsPlayerListCtrl.$inject = [];

    angular
        .module("cards.controllers.components")
        .controller("CardsPlayerListCtrl", CardsPlayerListCtrl);

})(angular);
