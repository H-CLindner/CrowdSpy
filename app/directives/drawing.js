(function() {

    angular
        .module("crowdspy")
        .directive('myArrow',['dataService',
        function(dataService){
            return {
                restrict: 'E',
                scope: {
                    plus: '@',
                    setFn: '&',
                    setFn2: '&'
                },
                template: '<canvas id="canvas" height="300" width="300" style="display:block; margin:1em auto; border:1px solid black; background-size: 100% 100%;"></canvas>',
                link: function (scope, element, attrs) {

                    setTimeout(function() {

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
                                var drawing;
                                var startArrowX;
                                var startArrowY;
                                var endArrowX;
                                var endArrowY;
                                var targetX;
                                var targetY;
                                var targetX2;
                                var targetY2;
                                var timer;
                                var easeAmount;
                                var arrows;

                                function init() {
                                    arrows = [];
                                    shapes = [];
                                    easeAmount = 0.5;

                                    makeArrows();

                                    initialise();

                                    c.addEventListener("mousedown", mouseDownListener, false);
                                }

                                function makeArrows(startX, startY, endX, endY) {

                                    shapes.push(new Arrow(startX, startY, endX, endY));

                                    if (shapes.length > 5) {
                                        shapes = shapes.slice(0, 6);
                                    }
                                    dataService.setArrowCoords(shapes);
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
                                        else {
                                            drawing = true;
                                            startArrowX = mouseX;
                                            startArrowY = mouseY;
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

                                    if (drawing) {
                                        window.addEventListener("mousemove", mouseMoveListener, false);

                                        dragHoldX = mouseX - startArrowX;
                                        dragHoldY = mouseY - startArrowY;

                                        endArrowX = mouseX - dragHoldX;
                                        endArrowY = mouseY - dragHoldY;

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
                                    if (drawing) {
                                        drawing = false;
                                        window.removeEventListener("mousemove", mouseMoveListener, false);
                                        makeArrows(startArrowX, startArrowY, endArrowX, endArrowY);
                                        initialise();
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

                                    endArrowX = posX;
                                    endArrowY = posY;

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

                                scope.clearCanvas = function () {
                                    shapes = [];
                                    CanvasApp();
                                };
                                scope.clearArrow = function () {
                                    shapes.splice(shapes.length - 1, 1);
                                    initialise();
                                    //funktion um arrows im dataservice wegzunehmen
                                };
                                scope.setFn({theDirFn: scope.clearCanvas});
                                scope.setFn2({theDirFn2: scope.clearArrow});
                            }
                        }
                    },50);
                }
            }
        }]);

})();