/*global angular*/

(function(angular, undefined) {

    "use strict";

    function cardsChoice($parse) {
        return {
            restrict: "A",
            link: function(scope, elem, attrs) {
                var choiceData = $parse(attrs.cardsChoice)(scope);
                var choiceText = $parse(attrs.cardsDrawCardText)(scope);

                choiceText = choiceText.replace("[[0]]", "<strong>" + choiceData.cardTexts[0] + "</strong>");
                choiceText = choiceText.replace("[[1]]", "<strong>" + choiceData.cardTexts[1] + "</strong>");

                elem.html(choiceText);
            }
        };
    }

    cardsChoice.$inject = ["$parse"];

    angular
        .module("cards.directives")
        .directive("cardsChoice", cardsChoice);

})(angular);
