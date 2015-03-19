/*global angular*/

(function(angular, undefined) {

    "use strict";

    function cardsDrawCard($parse) {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {
                var choiceText = $parse(attrs.cardsDrawCardText)(scope);

                choiceText = choiceText.replace("[[0]]", "_______");
                choiceText = choiceText.replace("[[1]]", "_______");

                elem.text(choiceText);
            }
        };
    }

    cardsDrawCard.$inject = ["$parse"];

    angular
        .module("cards.directives")
        .directive("cardsDrawCard", cardsDrawCard);

})(angular);
