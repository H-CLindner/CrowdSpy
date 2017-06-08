(function() {

    angular
        .module("crowdspy")
        .directive('myArrow',
        function(){
            return {
                restrict: 'E',
                scope: {
                    plus: '@'
                },
                template: '<canvas id="canvas" height="300" width="300" style="display:block; margin:1em auto; border:1px solid black; background-size: 100% 100%;"></canvas>',
                link: function (scope, element, attrs) {

                    var c = document.getElementById('canvas');
                    var ctx = c.getContext("2d");

                    function initialise(){
                        var image = new Image();
                        image.src = scope.plus;
                        ctx.drawImage(image, 0, 0, 300, 300);
                    }

                    function drawArrow(fromx, fromy, tox, toy) {
                            //variables to be used when creating the arrow
                            var headlen = 1;

                            var angle = Math.atan2(toy - fromy, tox - fromx);

                            //starting path of the arrow from the start square to the end square and drawing the stroke
                            ctx.beginPath();
                            ctx.moveTo(fromx, fromy);
                            ctx.lineTo(tox, toy);
                            ctx.strokeStyle = "#cc0000";
                            ctx.lineWidth = 3;
                            ctx.stroke();

                            //starting a new path from the head of the arrow to one of the sides of the point
                            ctx.beginPath();
                            ctx.moveTo(tox, toy);
                            ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 7), toy - headlen * Math.sin(angle - Math.PI / 7));

                            //path from the side point of the arrow, to the other side point
                            ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 7), toy - headlen * Math.sin(angle + Math.PI / 7));

                            //path from the side point back to the tip of the arrow, and then again to the opposite side point
                            ctx.lineTo(tox, toy);
                            ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 7), toy - headlen * Math.sin(angle - Math.PI / 7));

                            //draws the paths created above
                            ctx.strokeStyle = "#cc0000";
                            ctx.lineWidth = 10;
                            ctx.stroke();
                            ctx.fillStyle = "#cc0000";
                            ctx.fill();
                        }
                        initialise();
                        drawArrow(100, 100, 50, 50);
                        drawArrow(200, 200, 150, 150);
                        drawArrow(300, 300, 250, 250);
                        drawArrow(150, 0, 150, 50);
                        drawArrow(200, 0, 200, 50);
                }
            }
        });

})();