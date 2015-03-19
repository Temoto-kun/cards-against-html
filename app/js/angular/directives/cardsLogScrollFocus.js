/*global angular*/

(function(angular, undefined) {

    "use strict";

    function cardsLogScrollFocus($timeout) {
        return {
            restrict: "A",
            link: function(scope, element) {
                scope.$on("cards.events.chatbox.log.scrollfocus", function() {
                    $timeout(function() {
                        element.scrollTop(element.children().height());
                        scope.$emit("cards.events.chatbox.log.scrollfocused");
                    });
                });
            }
        };
    }

    cardsLogScrollFocus.$inject = ["$timeout"];

    angular
        .module("cards.directives")
        .directive("cardsLogScrollFocus", cardsLogScrollFocus);

})(angular);
