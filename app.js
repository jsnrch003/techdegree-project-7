// ================================= Alert =================================

const alertBanner = document.getElementById('alert');

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
const bell = document.querySelector('#header > div > div.ringBell.svg-icons');
const notification = document.querySelector('#header > div > div.notification');

bell.addEventListener('click', (e) => {
	modal1.style.display = 'block';
	modal2.style.display = 'block';
	notification.style.display = 'none';
	bell.style.animation = 'none';
	alertBanner.style.display = 'none';
});

span1.addEventListener('click', (e) => {
	modal1.style.display = 'none';
});

span2.addEventListener('click', (e) => {
	modal2.style.display = 'none';
});

// ================================= Line Chart =================================

const trafficCanvas = document.getElementById('traffic-chart');
const defaultChart = document.querySelector('.chart-scope input:active + label');
const hourlyChart = document.getElementById('hour');
const dailyChart = document.getElementById('day');
const weeklyChart = document.getElementById('week');
const monthlyChart = document.getElementById('month');

window.onload = () => {
	defaultChart.setActive();
};

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
			data: [3495, 3271, 4315, 7541, 5946, 4611, 7787, 6912, 5626, 5729, 6465, 4812],
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
	if (trafficChart) {
		trafficChart.destroy();
	}
	trafficChart = new Chart(trafficCanvas, {
		type: 'line',
		data: trafficDataHourly,
		options: trafficOptions,
	});
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

// ================================= Bar Chart =================================

const barCanvas = document.querySelector('#bar-chart');

const barData = {
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

const barOptions = {
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

const barChart = new Chart(barCanvas, {
	type: 'bar',
	data: barData,
	options: barOptions,
});

// ================================= Mobile Chart =================================

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

// ================================= Settings =================================

const save = document.getElementById('save');
const clear = document.getElementById('clear');
const timezone = document.getElementById('timezone');
const email = document.getElementById('email');
const profile = document.getElementById('profile');

save.addEventListener('click', (e) => {
	localStorage.setItem('timezone', timezone.value);
	localStorage.setItem('email', email.checked);
	localStorage.setItem('profile', profile.checked);
	alert(`Settings successfully saved`);
});

clear.addEventListener('click', (e) => {
	localStorage.clear();
	clearSettings();
	alert(`Settings successfully cleared`);
});

function clearSettings() {
	timezone.value = 'default';
	email.checked = false;
	profile.checked = false;
}

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
const dropDown = document.getElementById('results');

send.addEventListener('click', (e) => {
	if (user.value === '' && message.value === '') {
		alert(`Please fill out user and message fields before sending`);
	} else if (user.value === '') {
		alert(`Please fill out user field before sending`);
	} else if (message.value === '') {
		alert(`Please fill out message field before sending`);
	} else {
		alert(`Message successfully sent to: ${user.value}`);
		user.value = '';
		message.value = '';
	}
});

// ================ Autocomplete ================

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

user.oninput = function () {
	let results = [];
	const userInput = this.value.toLowerCase();
	dropDown.innerHTML = '';
	if (userInput.length > 0) {
		results = getResults(userInput);
		dropDown.style.display = 'block';
		for (i = 0; i < results.length; i++) {
			dropDown.innerHTML += `<li class="autocomplete-items" tabindex="0">${results[i]}</li>`;
		}
	}
};

function getResults(input) {
	const results = [];
	let memberLowCas = [];
	for (let i = 0; i < members.length; i++) {
		memberLowCas.push(members[i].toLowerCase());
	}
	for (let i = 0; i < memberLowCas.length; i++) {
		if (input === memberLowCas[i].slice(0, input.length)) {
			results.push(members[i]);
		}
	}
	return results;
}

dropDown.onclick = (e) => {
	const setValue = e.target.innerText;
	user.value = setValue;
	this.innerHTML = '';
	dropDown.style.display = 'none';
};
