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

const trafficData = {
	labels: [
		'16-22',
		'23-29',
		'30-5',
		'6-12',
		'13-19',
		'20-26',
		'27-3',
		'4-10',
		'11-17',
		'18-24',
		'25-31',
	],
	datasets: [
		{
			data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
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

const trafficChart = new Chart(trafficCanvas, {
	type: 'line',
	data: trafficData,
	options: trafficOptions,
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

// ===================== Messaging Section ===========================

const user = document.querySelector('#user-search');
const message = document.querySelector('#user-message');
const send = document.querySelector('.button-send');

send.addEventListener('click', (e) => {
	if (user.value === '' && message.value === '') {
		alert.innerText(`Please fill out user and message fields before sending`);
	} else if (user.value === '') {
		alert(`Please fill out user field before sending`);
	} else if (message.value === '') {
		alert(`Please fill out message field before sending`);
	} else {
		alert(`Message successfully sent to: ${user.value}`);
	}
});
