// add functionality to clear Alert message

const alertBanner = document.getElementById('alert');
const alertX = document.querySelector('#dashboard > div > div > p:nth-child(2)');
const bell = document.querySelector('#header > div > div');
const notification = document.querySelector('#header > div > div > span');

alertBanner.innerHTML = `
<p><span class="font-500">Alert:</span> You have unread messages</p>
<p class="close-white">&times;</p>
`;

alertBanner.addEventListener('click', (e) => {
	if (document.querySelector('#alert > p:nth-child(2)')) {
		alertBanner.style.display = 'none';
	}
});

// ================================= Modal =================================
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const span1 = document.querySelector('#modal1 > div > .close');
const span2 = document.querySelector('#modal2 > div > .close');

bell.addEventListener('click', (e) => {
	modal1.style.display = 'block';
	modal2.style.display = 'block';
	notification.style.display = 'none';
});

span1.addEventListener('click', (e) => {
	modal1.style.display = 'none';
});

span2.addEventListener('click', (e) => {
	modal2.style.display = 'none';
});

// Line Chart Widget

const trafficCanvas = document.querySelector('#traffic-chart');
const hourlyChart = document.querySelector(
	'#traffic > div > div.chart-scope.switch-toggle > label:nth-child(2)'
);

const dailyChart = document.querySelector(
	'#traffic > div > div.chart-scope.switch-toggle > label:nth-child(4)'
);
const weeklyChart = document.querySelector(
	'#traffic > div > div.chart-scope.switch-toggle > label:nth-child(6)'
);
const monthlyChart = document.querySelector(
	'#traffic > div > div.chart-scope.switch-toggle > label:nth-child(8)'
);

const trafficDataHourly = {
	labels: [
		'0000',
		'0200',
		'0400',
		'0600',
		'0800',
		'1000',
		'1200',
		'1400',
		'1600',
		'1800',
		'2000',
		'2200',
	],
	datasets: [
		{
			data: [4, 3, 4, 7, 12, 15, 11, 14, 12, 9, 8, 6],
			backgroundColor: 'rgba(116,119,191,.3)',
			borderWidth: 1,
			fill: 'origin',
		},
	],
};
const trafficDataDaily = {
	labels: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
	datasets: [
		{
			data: [142, 285, 214, 250, 178, 264, 321],
			backgroundColor: 'rgba(116,119,191,.3)',
			borderWidth: 1,
			fill: 'origin',
		},
	],
};

const trafficDataWeekly = {
	labels: [
		'16-22',
		'23-29',
		'30-05',
		'06-12',
		'13-19',
		'20-26',
		'27-03',
		'04-10',
		'11-17',
		'18-24',
		'25-31',
		'01-07',
	],
	datasets: [
		{
			data: [1803, 2659, 2722, 1621, 1813, 2289, 1636, 821, 1314, 2320, 2062, 1075],
			backgroundColor: 'rgba(116,119,191,.3)',
			borderWidth: 1,
			fill: 'origin',
		},
	],
};

const trafficDataMonthly = {
	labels: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],
	datasets: [
		{
			data: [3495, 4271, 3315, 7541, 8946, 4611, 9787, 6912, 5626, 5729, 6465, 4812],
			backgroundColor: 'rgba(116,119,191,.3)',
			borderWidth: 1,
			fill: 'origin',
		},
	],
};

const trafficOptions = {
	aspectRatio: 2.5,
	animation: {
		duration: 0,
	},
	scales: {
		y: {
			beginAtZero: true,
		},
	},
	plugins: {
		legend: {
			display: false,
		},
	},
};

let trafficChart = new Chart(trafficCanvas, {
	type: 'line',
	data: '',
	options: trafficOptions,
});

hourlyChart.addEventListener('click', (e) => {
	if (e.target.tagName === 'LABEL') {
		if (trafficChart) {
			trafficChart.destroy();
		}

		trafficChart = new Chart(trafficCanvas, {
			type: 'line',
			data: trafficDataHourly,
			options: trafficOptions,
		});
	}
});

dailyChart.addEventListener('click', (e) => {
	if (trafficChart) {
		trafficChart.destroy();
	}
	trafficChart = new Chart(trafficCanvas, {
		type: 'line',
		data: trafficDataDaily,
		options: trafficOptions,
	});
});

weeklyChart.addEventListener('click', (e) => {
	if (trafficChart) {
		trafficChart.destroy();
	}
	trafficChart = new Chart(trafficCanvas, {
		type: 'line',
		data: trafficDataWeekly,
		options: trafficOptions,
	});
});

monthlyChart.addEventListener('click', (e) => {
	if (trafficChart) {
		trafficChart.destroy();
	}
	trafficChart = new Chart(trafficCanvas, {
		type: 'line',
		data: trafficDataMonthly,
		options: trafficOptions,
	});
});

// Bar Chart Widget

const dailyCanvas = document.querySelector('#daily-chart');

const dailyData = {
	labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
	datasets: [
		{
			label: '# of Hits',
			data: [75, 115, 175, 125, 225, 200, 100],
			backgroundColor: '#7477bf',
			borderWidth: 1,
		},
	],
};

const dailyOptions = {
	scales: {
		y: {
			beginAtZero: true,
		},
	},
	plugins: {
		legend: {
			display: false,
		},
	},
};

const dialyChart = new Chart(dailyCanvas, {
	type: 'bar',
	data: dailyData,
	options: dailyOptions,
});

// Mobile Chart Widget

const mobileCanvas = document.querySelector('#mobile-chart');

const mobileData = {
	labels: ['Desktop', 'Tablet', 'Phones'],
	datasets: [
		{
			label: '# of Users',
			data: [2000, 550, 500],
			backgroundColor: ['#7477bf', '#78cf82', '#51b6c8'],
		},
	],
};

const mobileOptions = {
	plugins: {
		legend: {
			position: 'right',
			labels: {
				boxWidth: 20,
				fontStyle: 'bold',
			},
		},
	},
	aspectRatio: 2,
};

const mobileChart = new Chart(mobileCanvas, {
	type: 'doughnut',
	data: mobileData,
	options: mobileOptions,
});

// ===================== Settings ===========================

const save = document.getElementById('save');
const cancel = document.getElementById('cancel');
const timezone = document.getElementById('timezone');
const emailPref = document.getElementById('email');
const profilePref = document.getElementById('profile');

save.addEventListener('click', (e) => {
	localStorage.setItem('timezone', timezone.value);
	localStorage.setItem('email', emailPref.checked);
	localStorage.setItem('profile', profilePref.checked);
	alert(`Settings successfully saved`);
});

cancel.addEventListener('click', (e) => {
	localStorage.clear();
	alert(`Settings successfully cleared`);
});

window.onload = () => {
	if (localStorage.timezone) {
		timezone.value = localStorage.timezone;
	} else {
		timezone.value = 'default';
	}
	if (localStorage.email === 'true') {
		email.checked = true;
	} else {
		email.checked = false;
	}
	if (localStorage.profile === 'true') {
		profile.checked = true;
	} else {
		profile.checked = false;
	}
};

// ===================== Messaging Section ===========================

const user = document.querySelector('#user-search');
const message = document.querySelector('#user-message');
const send = document.querySelector('.button-send');

send.addEventListener('click', (e) => {
	if (user.value === '' && message.value === '') {
		alert(`Please fill out user and message fields before sending`);
	} else if (user.value === '') {
		alert(`Please fill out user field before sending`);
	} else if (message.value === '') {
		alert(`Please fill out message field before sending`);
	} else {
		alert(`Message successfully sent to: ${user.value}`);
	}
});

const members = [
	'Victoria Chambers',
	'Dale Byrd',
	'Dawn Wood',
	'Dan Oliver',
	'Marissa Leach',
	'Brent Hall',
	'Manjeet Kumar',
	'Natalie Nguyen',
];

// ================================================================================
// Autocomplete functionality credit to W3 Schools
// https://www.w3schools.com/howto/howto_js_autocomplete.asp

function autocomplete(inp, arr) {
	var currentFocus;

	inp.addEventListener('input', function (e) {
		var a,
			b,
			i,
			val = this.value;
		closeAllLists();
		if (!val) {
			return false;
		}
		currentFocus = -1;
		a = document.createElement('DIV');
		a.setAttribute('id', this.id + 'autocomplete-list');
		a.setAttribute('class', 'autocomplete-items');
		this.parentNode.appendChild(a);
		for (i = 0; i < arr.length; i++) {
			if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
				b = document.createElement('DIV');

				b.innerHTML = '<strong>' + arr[i].substr(0, val.length) + '</strong>';
				b.innerHTML += arr[i].substr(val.length);
				b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
				b.addEventListener('click', function (e) {
					inp.value = this.getElementsByTagName('input')[0].value;
					closeAllLists();
				});
				a.appendChild(b);
			}
		}
	});

	inp.addEventListener('keydown', function (e) {
		var x = document.getElementById(this.id + 'autocomplete-list');
		if (x) x = x.getElementsByTagName('div');
		if (e.keyCode == 40) {
			currentFocus++;
			addActive(x);
		} else if (e.keyCode == 38) {
			currentFocus--;
			addActive(x);
		} else if (e.keyCode == 13) {
			e.preventDefault();
			if (currentFocus > -1) {
				if (x) x[currentFocus].click();
			}
		}
	});

	function addActive(x) {
		if (!x) return false;
		removeActive(x);
		if (currentFocus >= x.length) currentFocus = 0;
		if (currentFocus < 0) currentFocus = x.length - 1;
		x[currentFocus].classList.add('autocomplete-active');
	}

	function removeActive(x) {
		for (var i = 0; i < x.length; i++) {
			x[i].classList.remove('autocomplete-active');
		}
	}

	function closeAllLists(elmnt) {
		var x = document.getElementsByClassName('autocomplete-items');
		for (var i = 0; i < x.length; i++) {
			if (elmnt != x[i] && elmnt != inp) {
				x[i].parentNode.removeChild(x[i]);
			}
		}
	}

	document.addEventListener('click', function (e) {
		closeAllLists(e.target);
	});
}

autocomplete(document.getElementById('user-search'), members);
