Vue.component('progress-bar', {
	props: {
		max: Number,
		val: Number
	},
	computed: {
		width() {
			let t = this.val / this.max * 100;
			return {
				width: t + '%'
			}
		}
	},
	template: `
	<div class="progress">
		<div class="progress-bar" v-bind:style="width"></div>
	</div>`
})
var app = new Vue({
	el: '.wrap',
	data: {
		xp: 0,
		maxNumbers: 1000
	},
	methods: {
		AddXP() {
			return this.xp += 10
		},
		DecreaseXP() {
			return this.xp -= 10
		},
		saveContent() {
			localStorage.setItem('value', JSON.stringify(this.xp));
		},
		useContent() {
			if (localStorage.getItem('value') !== null) {
				this.xp = JSON.parse(localStorage.getItem('value'));
			}
		}
	},
	computed: {
		getScore() {
			if (this.xp <= 1000) {
				return "Get 1000!"
			}
		},
		level() {
			if (this.xp >= 400) {
				return "Pro"
			} else if (this.xp >= 200) {
				return "Intermediate"
			} else if (this.xp >= 100) {
				return "Beginer"
			} else if (this.xp >= 0) {
				return "Noob"
			} else {
				return this.xp = 0
			}
		}
	}
})
function timer() {
	return app.xp -= 10;
}
document.getElementById('click').onclick = function (e) {
	if (app.xp >= 300) {
		let time = setInterval(timer, 600);
		document.getElementById('click').onclick = null;
		document.getElementById('click').onclick = function (e) {
			if (app.xp >= 1000) {
				clearInterval(time);
				app.xp = 1000;
				document.getElementById('sp').hidden = true;
				document.getElementById('sp2').hidden = false;
				document.getElementById('but').hidden = false;
			}
		}
	}
	if (app.xp <= 0) {
		app.xp = 0;
	}

}
document.getElementById('sss').onclick = function () {
	localStorage.clear('value');
}
document.getElementById('but').onclick = function () {
	location.reload();
}
document.getElementById('but').hidden = true;
document.getElementById('sp2').hidden = true;

let arr = [1, 5, 10, 38, 750];

console.log(Math.max(...arr))