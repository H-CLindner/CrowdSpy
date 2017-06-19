(function() {

    angular
        .module("crowdspy")
        .directive('mySquare',['dataService',
            function(dataService){
                return {
                    restrict: 'E',
                    scope: {
                        plus2: '@'
                    },
                    template: '<canvas id="canvas2" height="300" width="300" style="display:block; margin:1em auto; border:1px solid black; background-size: 100% 100%;"></canvas>',
                    link: function (scope, element, attrs) {
                        setTimeout(function() {

                            function Square(posX, posY) {
                                this.x = posX;
                                this.y = posY;
                                this.radius = 40;
                            }

                            Square.prototype.hitTest = function (hitX, hitY) {
                                return ((hitX > this.x - this.radius) && (hitX < this.x + (this.radius * 2)) && (hitY > this.y - this.radius) && (hitY < this.y + this.radius));
                            };

                            Square.prototype.drawToContext = function (theContext) {
                                theContext.strokeStyle = "#FF0000";
                                theContext.strokeRect(this.x - this.radius, this.y - this.radius, 3 * this.radius, 2 * this.radius);
                            };

                            CanvasApp();

                            function CanvasApp() {

                                var c = document.getElementById('canvas2');
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
                                    var dragging;
                                    var targetX;
                                    var targetY;
                                    var timer;
                                    var easeAmount;

                                    function init() {
                                        shapes = [];
                                        easeAmount = 0.5;

                                        makeSquare();

                                        initialise();

                                        c.addEventListener("mousedown", mouseDownListener, false);

                                    }

                                    function makeSquare() {
                                        var square1 = new Square(100, 100);

                                        shapes.push(square1);
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

                                            dragHoldX = mouseX - shapes[shapes.length - 1].x;
                                            dragHoldY = mouseY - shapes[shapes.length - 1].y;

                                            targetX = mouseX - dragHoldX;
                                            targetY = mouseY - dragHoldY;

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
                                        shapes[shapes.length - 1].x = shapes[shapes.length - 1].x + easeAmount * (targetX - shapes[shapes.length - 1].x);
                                        shapes[shapes.length - 1].y = shapes[shapes.length - 1].y + easeAmount * (targetY - shapes[shapes.length - 1].y);

                                        if ((!dragging) && (Math.abs(shapes[shapes.length - 1].x - targetX) < 0.1) && (Math.abs(shapes[shapes.length - 1].y - targetY) < 0.1)) {
                                            shapes[shapes.length - 1].x = targetX;
                                            shapes[shapes.length - 1].y = targetY;
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
                                        posX = (posX < minX) ? minX : ((posX > maxX) ? maxX : posX);
                                        posY = mouseY - dragHoldY;
                                        posY = (posY < minY) ? minY : ((posY > maxY) ? maxY : posY);

                                        targetX = posX;
                                        targetY = posY;

                                        initialise();
                                    }

                                    function drawShapes() {
                                        for (i = 0; i < shapes.length; i++) {
                                            shapes[i].drawToContext(ctx);
                                            var xCoord = shapes[i].x.toString();
                                            var yCoord = shapes[i].y.toString();
                                            var coords = xCoord + "," + yCoord;
                                            dataService.setSquareCoords(coords);
                                        }
                                    }

                                    function initialise() {
                                        var image = new Image();
                                        image.src = scope.plus2;
                                        ctx.drawImage(image, 0, 0, 300, 300);
                                        drawShapes();
                                    }

                                }

                            }
                        },50);
                    }
                }
                }]);

})();