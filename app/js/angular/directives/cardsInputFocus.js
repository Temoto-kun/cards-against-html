/*global angular*/

(function(angular, undefined) {

    "use strict";

    function cardsInputFocus() {
        return {
            restrict: "A",
            link: function(scope, element) {
                scope.$on("cards.events.chatbox.input.focus", function() {
                    element.focus();
                    scope.$emit("cards.events.chatbox.input.focused");
                });
            }
        };
    }

    cardsInputFocus.$inject = [];

    angular
        .module("cards.directives")
        .directive("cardsInputFocus", cardsInputFocus);

})(angular);
