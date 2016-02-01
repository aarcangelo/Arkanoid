var Arkanoid = (function (module) {
    'use strict';
	
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext("2d");
	var HEIGHT = canvas.height;
	var WIDTH = canvas.width;
	var FPS = 60;
	
	module.Paddle = {
		width: 100,
		height: 20,
		x: 0,
		y: 0,
		color: '#FFFFFF',
		Draw: function() {
			if (this.x === 0) this.x = WIDTH/2 - this.width/2;
			if (this.y === 0) this.y = HEIGHT - this.height - 20;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x, this.y, this.width, this.height);
		}
	};
	
	module.Bricks = {
		bricks: [],
		color: '#FFFFFF',
		Draw: function() {
			for (var i = 0; i < this.bricks.length; i++) {
				var brick = this.bricks[i];
				ctx.beginPath();
				ctx.fillStyle = this.color;
				ctx.lineWidth="2";
				ctx.strokeStyle="green";
				ctx.rect(brick.x, brick.y, brick.width, brick.height);
				ctx.fillRect(brick.x, brick.y, brick.width, brick.height);
				ctx.stroke();
			}
		}
	};
	
	module.Brick = function(position) {
		var brick = {
			width: 78,
			height: 30,
			color: '#FFFFFF',
			x: position * 76,
			y: 2
		}		
		return brick;
	}
	
    module.Events = {
        InitAll: function () {
			var self = this;
			for(var i = 0; i < 30; i++) {
				module.Bricks.bricks.push(module.Brick(i));
			}
			setInterval(function() {
				self.Update();
				self.Draw();
			}, 1000/FPS)
        },
        Update: function () {
			
        },
		Draw: function() {
			module.Methods.ClearCanvas();
			module.Methods.FillHUD();
			module.Paddle.Draw();
			module.Bricks.Draw();
		}
	};
	
	module.Methods = {
		ClearCanvas: function() {
			ctx.clearRect(0,0, WIDTH, HEIGHT);
		},
		FillHUD: function() {
			ctx.fillStyle = '#000000';
            ctx.fillRect(0,0,WIDTH,HEIGHT);
		}
	}

    module.init = function () {
        module.Events.InitAll();
    };

    return module;
})(Arkanoid || {});