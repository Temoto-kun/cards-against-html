/*global angular*/

(function(angular) {

    "use strict";

    function CardsPickCtrl() {
        var ctrl = this;

        ctrl.drawCardText = "Lorem ipsum dolor sit [[0]] amet consectetur adipisicing [[1]] elit sed do eiusmod aliquam.";

        ctrl.allLocked = false; // TODO get data from other controllers

        ctrl.choices = [];
        [1,2,3,4,5].forEach(function(i) {
            ctrl.choices.push({
                cardTexts: [
                    "ASDF" + i,
                    "ZXCV"
                ],
                submittedBy: i
            });
        });
    }

    CardsPickCtrl.$inject = [];

    angular
        .module("cards.controllers.components")
        .controller("CardsPickCtrl", CardsPickCtrl);

})(angular);
