/*global angular*/

(function(angular, undefined) {

    "use strict";

    angular.module("cards.services", []);

    angular.module("cards.controllers.components", []);
    angular.module("cards.controllers", [
        "cards.controllers.components"
    ]);

    angular.module("cards.directives", []);

    angular
        .module("cards", [
            "ui.bootstrap",
            "ngSanitize",

            "cards.services",
            "cards.controllers",
            "cards.directives"
        ]);

})(angular);
