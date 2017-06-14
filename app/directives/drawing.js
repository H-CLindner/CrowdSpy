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

                    function Arrow(fromx, fromy, tox, toy) {
                        //variables to be used when creating the arrow
                        this.x1 = fromx;
                        this.y1 = fromy;
                        this.x2 = tox;
                        this.y2 = toy;
                        this.headlen = 1;
                    }

                    Arrow.prototype.drawToContext = function (context) {

                        var angle = Math.atan2(this.y2 - this.y1, this.x2 - this.x1);

                        //starting path of the arrow from the start square to the end square and drawing the stroke
                        context.beginPath();
                        context.moveTo(this.x1, this.y1);
                        context.lineTo(this.x2, this.y2);
                        context.strokeStyle = "#cc0000";
                        context.lineWidth = 3;
                        context.stroke();

                        //starting a new path from the head of the arrow to one of the sides of the point
                        context.beginPath();
                        context.moveTo(this.x2, this.y2);
                        context.lineTo(this.x2 - this.headlen * Math.cos(angle - Math.PI / 7), this.y2 - this.headlen * Math.sin(angle - Math.PI / 7));

                        //path from the side point of the arrow, to the other side point
                        context.lineTo(this.x2 - this.headlen * Math.cos(angle + Math.PI / 7), this.y2 - this.headlen * Math.sin(angle + Math.PI / 7));

                        //path from the side point back to the tip of the arrow, and then again to the opposite side point
                        context.lineTo(this.x2, this.y2);
                        context.lineTo(this.x2 - this.headlen * Math.cos(angle - Math.PI / 7), this.y2 - this.headlen * Math.sin(angle - Math.PI / 7));

                        //draws the paths created above
                        context.strokeStyle = "#cc0000";
                        context.lineWidth = 10;
                        context.stroke();
                        context.fillStyle = "#cc0000";
                        context.fill();
                        context.restore();
                    };

                    Arrow.prototype.hitTest = function (hitX, hitY) {
                        var hit1 = ((hitX > this.x1) && (hitX < this.x2) || (hitX > this.x2) && (hitX < this.x1));
                        var hit2 = ((hitY > this.y1) && (hitY < this.y2) || (hitY > this.y2) && (hitY < this.y1));
                        return (hit1 && hit2);
                    };

                    CanvasApp();

                    function CanvasApp() {

                        var c = document.getElementById('canvas');
                        var ctx = c.getContext("2d");
                        dragging();

                        function dragging() {

                            init();

                            var i;
                            var shapes;
                            var mouseX;
                            var mouseY;
                            var dragIndex;
                            var dragHoldX;
                            var dragHoldY;
                            var dragHoldX2;
                            var dragHoldY2;
                            var dragging;
                            var rotating;
                            var targetX;
                            var targetY;
                            var targetX2;
                            var targetY2;
                            var timer;
                            var easeAmount;

                            function init() {
                                shapes = [];
                                easeAmount = 0.5;

                                makeArrows();

                                initialise();

                                c.addEventListener("mousedown", mouseDownListener, false);
                            }

                            function makeArrows() {
                                var arrow1 = new Arrow(100, 100, 50, 50);
                                var arrow2 = new Arrow(200, 200, 150, 150);
                                var arrow3 = new Arrow(300, 300, 250, 250);
                                var arrow4 = new Arrow(150, 150, 100, 100);
                                var arrow5 = new Arrow(200, 250, 150, 200);

                                shapes.push(arrow1, arrow2, arrow3, arrow4, arrow5);
                            }

                            function mouseDownListener(evt) {

                                var bRect = c.getBoundingClientRect();
                                mouseX = (evt.clientX - bRect.left) * (c.width / bRect.width);
                                mouseY = (evt.clientY - bRect.top) * (c.height / bRect.height);

                                for (i = 0; i < shapes.length; i++) {
                                    if (shapes[i].hitTest(mouseX, mouseY)) {
                                        dragging = true;
                                        dragIndex = i;
                                    }
                                }

                                if (dragging) {
                                    window.addEventListener("mousemove", mouseMoveListener, false);

                                    shapes.push(shapes.splice(dragIndex, 1)[0]);

                                    dragHoldX = mouseX - shapes[shapes.length - 1].x1;
                                    dragHoldY = mouseY - shapes[shapes.length - 1].y1;
                                    dragHoldX2 = mouseX - shapes[shapes.length - 1].x2;
                                    dragHoldY2 = mouseY - shapes[shapes.length - 1].y2;


                                    targetX = mouseX - dragHoldX;
                                    targetY = mouseY - dragHoldY;
                                    targetX2 = mouseX - dragHoldX2;
                                    targetY2 = mouseY - dragHoldY2;

                                    timer = setInterval(onTimerTick, 1000 / 30);
                                }

                                c.removeEventListener("mousedown", mouseDownListener, false);
                                window.addEventListener("mouseup", mouseUpListener, false);

                                if (evt.preventDefault) {
                                    evt.preventDefault();
                                } //standard
                                else if (evt.returnValue) {
                                    evt.returnValue = false;
                                } //older IE
                                return false;
                            }

                            function onTimerTick() {
                                shapes[shapes.length - 1].x1 = shapes[shapes.length - 1].x1 + easeAmount * (targetX - shapes[shapes.length - 1].x1);
                                shapes[shapes.length - 1].y1 = shapes[shapes.length - 1].y1 + easeAmount * (targetY - shapes[shapes.length - 1].y1);
                                shapes[shapes.length - 1].x2 = shapes[shapes.length - 1].x2 + easeAmount * (targetX2 - shapes[shapes.length - 1].x2);
                                shapes[shapes.length - 1].y2 = shapes[shapes.length - 1].y2 + easeAmount * (targetY2 - shapes[shapes.length - 1].y2);

                                if ((!dragging) && (Math.abs(shapes[shapes.length - 1].x1 - targetX) < 0.1) && (Math.abs(shapes[shapes.length - 1].y1 - targetY) < 0.1) && (Math.abs(shapes[shapes.length - 1].x2 - targetX2) < 0.1) && (Math.abs(shapes[shapes.length - 1].y2 - targetY2) < 0.1)) {
                                    shapes[shapes.length - 1].x1 = targetX;
                                    shapes[shapes.length - 1].y1 = targetY;
                                    shapes[shapes.length - 1].x2 = targetX2;
                                    shapes[shapes.length - 1].y2 = targetY2;
                                    //stop timer:
                                    clearInterval(timer);
                                }
                                initialise();
                            }

                            function mouseUpListener(evt) {
                                c.addEventListener("mousedown", mouseDownListener, false);
                                window.removeEventListener("mouseup", mouseUpListener, false);
                                if (dragging) {
                                    dragging = false;
                                    window.removeEventListener("mousemove", mouseMoveListener, false);
                                }
                            }

                            function mouseMoveListener(evt) {
                                var posX;
                                var posY;
                                var posX2;
                                var posY2;
                                var minX = 2;
                                var maxX = c.width - 2;
                                var minY = 2;
                                var maxY = c.height - 2;

                                //getting mouse position correctly
                                var bRect = c.getBoundingClientRect();
                                mouseX = (evt.clientX - bRect.left) * (c.width / bRect.width);
                                mouseY = (evt.clientY - bRect.top) * (c.height / bRect.height);

                                //clamp x and y positions to prevent object from dragging outside of canvas
                                posX = mouseX - dragHoldX;
                                posX2 = mouseX - dragHoldX2;
                                posX = (posX < minX) ? minX : ((posX > maxX) ? maxX : posX);
                                posX2 = (posX2 < minX) ? minX : ((posX2 > maxX) ? maxX : posX2);
                                posY = mouseY - dragHoldY;
                                posY2 = mouseY - dragHoldY2;
                                posY = (posY < minY) ? minY : ((posY > maxY) ? maxY : posY);
                                posY2 = (posY2 < minY) ? minY : ((posY2 > maxY) ? maxY : posY2);

                                targetX = posX;
                                targetY = posY;
                                targetX2 = posX2;
                                targetY2 = posY2;

                                initialise();
                            }

                            function drawShapes() {
                                for (i = 0; i < shapes.length; i++) {
                                    shapes[i].drawToContext(ctx);
                                }
                            }

                            function initialise() {
                                var image = new Image();
                                image.src = scope.plus;
                                ctx.drawImage(image, 0, 0, 300, 300);
                                drawShapes();
                            }
                        }
                    }
                }
            }
        });

})();