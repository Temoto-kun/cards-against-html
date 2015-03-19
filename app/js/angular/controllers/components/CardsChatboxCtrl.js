/*global angular*/
/*global Remarkable*/

(function(angular, Remarkable, undefined) {

    "use strict";

    function CardsChatboxCtrl($scope) {
        var ctrl = this;

        var md = new Remarkable("full", {
            linkify: true,
            typographer: true
        });

        ctrl.chatDays = [
            {
                day: "Monday",
                logs: [
                    {
                        sent: true,
                        timestamp: 0,
                        sender: {
                            avatar: "http://placehold.it/32",
                            name: "Madoka"
                        },
                        content: {
                            html: "<p>Hello <b>World</b>.</p><img src='http://placehold.it/32' alt='image'>",
                            raw: "Hello **World**.\r\n\r\n![image](http://placehold.it/32)"
                        }
                    }
                ]
            }
        ];

        ctrl.input = {
            message: "Hello world yay"
        };

        function prepareQuoteText(rawContent) {
            var lines = rawContent.split(/\r\n/);
            var result = ["", ""];

            for (var i = 0; i < lines.length; i++) {
                var line = lines[i];

                result.push(">" + line);
            }

            return result.join("\r\n");
        }

        function parseMarkdown(raw) {
            return md.render(raw);
        }

        function triggerInputFocusEvent() {
            $scope.$broadcast("cards.events.chatbox.input.focus");
        }

        function triggerLogScrollFocusEvent() {
            $scope.$broadcast("cards.events.chatbox.log.scrollfocus");
        }

        ctrl.quote = function(log) {
            ctrl.input.message += prepareQuoteText(log.content.raw);
            ctrl.input.message = ctrl.input.message.trim();
            triggerInputFocusEvent();
        };

        ctrl.checkKeyPress = function(e) {
            if(!(e.ctrlKey && e.keyCode === 13)) {
                return;
            }

            ctrl.input.focus = false;
            ctrl.submit();
        };

        ctrl.submit = function() {
            ctrl.input.focus = false;

            if(ctrl.input.message.trim().length < 1) {
                return;
            }

            ctrl.chatDays[0].logs.push({
                sent: false,
                timestamp: Number(new Date()),
                sender: {
                    avatar: "http://placehold.it/32",
                    name: "Homura"
                },
                content: {
                    html: parseMarkdown(ctrl.input.message),
                    raw: ctrl.input.message
                }
            });

            ctrl.input = {
                message: ""
            };

            triggerInputFocusEvent();
            triggerLogScrollFocusEvent();
        };
    }

    CardsChatboxCtrl.$inject = ["$scope"];

    angular
        .module("cards.controllers.components")
        .controller("CardsChatboxCtrl", CardsChatboxCtrl);

})(angular, Remarkable);
