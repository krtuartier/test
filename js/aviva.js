function RootNodeFont() {
	if(window.screen.width <= 1024) {
		this.html = document.documentElement;
		this.hWidth = this.html.getBoundingClientRect().width;
		this.html.style.fontSize = this.hWidth / 18 + "px";
	} else {
		this.html = document.documentElement;
		this.hWidth = this.html.getBoundingClientRect().width;
		this.html.style.fontSize = this.hWidth / 36 + "px";
	}
}

function extend(origin, newType) {
	for(var i in newType) {
		origin[i] = newType[i];
	}
}

function assets() {

	var information = {
		sex: null,
		name: '',
		age: 0,
		enter: 18,
		country: 0,
		degree: 'General',
		aside: null
	}
	var pieChart = {
		'UK': {
			'General': [{
					per: .111,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .57,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .068,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .251,
					content: 'Living expenses',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .114,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .558,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .069,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .259,
					content: 'Living expenses',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .105,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .591,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .065,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .239,
					content: 'Living expenses',
					color: '#ffe552'
				}
			]
		},
		'US': {
			'General': [{
					per: .194,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .504,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .085,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .217,
					content: 'Living expenses',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .171,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .563,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .075,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .191,
					content: 'Living expenses',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .179,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .542,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .078,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .201,
					content: 'Living expenses',
					color: '#ffe552'
				}
			]
		},
		'USP': {
			'General': [{
					per: .202,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .44,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .01,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .258,
					content: 'Living expenses',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .179,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .504,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .089,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .228,
					content: 'Living expenses',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .188,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .478,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .094,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .24,
					content: 'Living expenses',
					color: '#ffe552'
				}
			]
		},
		'Australia': {
			'General': [{
					per: .202,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .532,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .049,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .217,
					content: 'Living expenses',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .141,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .673,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .034,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .152,
					content: 'Living expenses',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .159,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .632,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .038,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .171,
					content: 'Living expenses',
					color: '#ffe552'
				}
			]
		},
		'Canada': {
			'General': [{
					per: .212,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .47,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .132,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .186,
					content: 'Living expenses',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .133,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .668,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .083,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .116,
					content: 'Living expenses',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .159,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .60,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .101,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .14,
					content: 'Living expenses',
					color: '#ffe552'
				}
			]
		},
		'HongKong': {
			'General': [{
					per: .119,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .623,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .0,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .258,
					content: 'Living expenses',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .119,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .623,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .0,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .258,
					content: 'Living expenses',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .119,
					content: 'Room & Board',
					color: '#c9a90a'
				},
				{
					per: .623,
					content: 'Tuition fee',
					color: '#ffd900'
				},
				{
					per: .0,
					content: 'Airfares',
					remark: '(2 return economy tickets per year)',
					color: '#ffef91'
				},
				{
					per: .258,
					content: 'Living expenses',
					color: '#ffe552'
				}
			]
		}
	}
	var pieChartCh = {
		'UK': {
			'General': [{
					per: .111,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .57,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .068,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .251,
					content: '生活开支',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .114,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .558,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .069,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .259,
					content: '生活开支',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .105,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .591,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .065,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .239,
					content: '生活开支',
					color: '#ffe552'
				}
			]
		},
		'US': {
			'General': [{
					per: .194,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .504,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .085,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .217,
					content: '生活开支',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .171,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .563,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .075,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .191,
					content: '生活开支',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .179,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .542,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .078,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .201,
					content: '生活开支',
					color: '#ffe552'
				}
			]
		},
		'USP': {
			'General': [{
					per: .202,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .44,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .01,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .258,
					content: '生活开支',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .179,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .504,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .089,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .228,
					content: '生活开支',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .188,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .478,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .094,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .24,
					content: '生活开支',
					color: '#ffe552'
				}
			]
		},
		'Australia': {
			'General': [{
					per: .202,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .532,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .049,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .217,
					content: '生活开支',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .141,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .673,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .034,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .152,
					content: '生活开支',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .159,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .632,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .038,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .171,
					content: '生活开支',
					color: '#ffe552'
				}
			]
		},
		'Canada': {
			'General': [{
					per: .212,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .47,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .132,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .186,
					content: '生活开支',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .133,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .668,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .083,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .116,
					content: '生活开支',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .159,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .60,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .101,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .14,
					content: '生活开支',
					color: '#ffe552'
				}
			]
		},
		'HongKong': {
			'General': [{
					per: .119,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .623,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .0,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .258,
					content: '生活开支',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .119,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .623,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .0,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .258,
					content: '生活开支',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .119,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .623,
					content: '学费',
					color: '#ffd900'
				},
				{
					per: .0,
					content: '机票',
					remark: '(每年两张来回机票)',
					color: '#ffef91'
				},
				{
					per: .258,
					content: '生活开支',
					color: '#ffe552'
				}
			]
		}
	}
	var pieChartChf = {
		'UK': {
			'General': [{
					per: .111,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .57,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .068,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .251,
					content: '生活開支',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .114,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .558,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .069,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .259,
					content: '生活開支',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .105,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .591,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .065,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .239,
					content: '生活開支',
					color: '#ffe552'
				}
			]
		},
		'US': {
			'General': [{
					per: .194,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .504,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .085,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .217,
					content: '生活開支',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .171,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .563,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .075,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .191,
					content: '生活開支',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .179,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .542,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .078,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .201,
					content: '生活開支',
					color: '#ffe552'
				}
			]
		},
		'USP': {
			'General': [{
					per: .202,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .44,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .01,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .258,
					content: '生活開支',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .179,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .504,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .089,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .228,
					content: '生活開支',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .188,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .478,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .094,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .24,
					content: '生活開支',
					color: '#ffe552'
				}
			]
		},
		'Australia': {
			'General': [{
					per: .202,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .532,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .049,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .217,
					content: '生活開支',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .141,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .673,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .034,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .152,
					content: '生活開支',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .159,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .632,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .038,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .171,
					content: '生活開支',
					color: '#ffe552'
				}
			]
		},
		'Canada': {
			'General': [{
					per: .212,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .47,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .132,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .186,
					content: '生活開支',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .133,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .668,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .083,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .116,
					content: '生活開支',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .159,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .60,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .101,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .14,
					content: '生活開支',
					color: '#ffe552'
				}
			]
		},
		'HongKong': {
			'General': [{
					per: .119,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .623,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .0,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .258,
					content: '生活開支',
					color: '#ffe552'
				}
			],
			'Medical': [{
					per: .119,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .623,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .0,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .258,
					content: '生活開支',
					color: '#ffe552'
				}
			],
			'Law': [{
					per: .119,
					content: '住宿',
					color: '#c9a90a'
				},
				{
					per: .623,
					content: '學費',
					color: '#ffd900'
				},
				{
					per: .0,
					content: '機票',
					remark: '(每年兩張來回機票)',
					color: '#ffef91'
				},
				{
					per: .258,
					content: '生活開支',
					color: '#ffe552'
				}
			]
		}
	}
	information = JSON.stringify(information);
	pieChart = JSON.stringify(pieChart);
	pieChartCh = JSON.stringify(pieChartCh);
	pieChartChf = JSON.stringify(pieChartChf);
	window.sessionStorage.setItem('information', information);
	window.sessionStorage.setItem('pieChart', pieChart);
	window.sessionStorage.setItem('pieChartCh', pieChartCh);
	window.sessionStorage.setItem('pieChartChf', pieChartChf);
}
window.onload = function() {
	new RootNodeFont();
	assets();

	var information = {
		template: `<section class="wrap">
		
		<!--模态框-->
		
		<div class="modal fade" style="height: 100%;width: 100%;" id="myModal" tabindex="-1">
			<div class="modal-dialog" style="height: 90%;">
				<div class="modal-content" style="height: 100%;">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title" style="color: #004FB6;" id="myModalLabel">{{choose}}</h4>
					</div>
					<div class="modal-body" style="height:73.5%;overflow: auto;">
						<ul>
							<li v-if="choose=='Age'" ref='ageList' v-for='val in aryAge'>
								<input @click="age=val" class="btn btn-primary" type="button" style="width: 100%;margin-bottom: .1rem;" name="age" :value="val" />
							</li>
							<li v-if="choose=='Enter age'" ref='enterList' v-for='val in aryEnter'>
								<input @click="enter=val" class="btn btn-primary" type="button" style="width: 100%;margin-bottom: .1rem;" name="enter" :value="val" />
							</li>
							<li v-if="choose=='Country'" ref='countryList' v-for='(val,index) in aryCountryVal'>
								<input @click="country=val" class="btn btn-primary" type="button" style="width: 100%;margin-bottom: .1rem;" name="enter" :value="aryCountry[index]" />
							</li>
						</ul>
					</div>
					<div class="modal-footer">
						<input data-dismiss="modal" @click="cancelFn()" type="button" class="btn btn-danger btn-sm" value="cancel" />
						<input data-dismiss="modal" @click="tmp=null" type="button" class="btn btn-primary btn-sm" value="confirm" />
					</div>
				</div>
			</div>
		</div>
		
		<!--页面内容-->
		
		<section class="main container">
			<section class="pull-left title">
				<h2>
					My Child's <br class="br" />information
				</h2>
			</section>
			<section class="pull-right content form_wrap">
				
				<!--切换语言-->
				<div class="switch_wrap">
					<label>
						<input type="checkbox"/>
						<i class="switch"></i>
						<router-link to='/information'>
							English
						</router-link>
						<router-link to='/information_chf'>
							繁
						</router-link>
						<router-link to='/information_ch'>
							简
						</router-link>
					</label>
				</div>
				
				<!--提示信息-->
				<div class="incomplete"><span ref="incomplete">Please enter or select all the fields</span></div>
				
				<!--表单-->
				<div class="form mobile_cut_off">
					<p class="half half_left mobile_center">
						My child's gender
					</p>
					<p class="half half_right mobile_center">
						<label class="radio">
							<input v-model="sex" type="radio" name="sex" value="boy"/>
							<span ref="boy"><i></i>Boy</span>
						</label>
						<label class="radio">
							<input v-model="sex" type="radio" name="sex" value="girl"/>
							<span ref="girl"><i></i>Girl</span>
						</label>
					</p>
				</div>
				<div class="form mobile_cut_off">
					<p class="half half_left mobile_center">
						Name
					</p>
					<p class="half half_right mobile_center">
						<input ref="name" type="text" class="form-control input_name" name="name" v-model="name" value="" />
					</p>
				</div>
				<div class="form cut_off mobile_half mobile_half_left">
					<p class="half half_left mobile_center mobile_input_tips">
						Age
					</p>
					<p class="half half_right mobile_center">
						<input @keyup="ageFn()" ref="age" type="number" class="form-control input_age" name="age" value="0" v-model="age" />
						<span class="tips" ref="ageTips">Age must be 0 - 14</span>
						<button @click="choose='Age';tmp=age" class="btn mobile_age mobile_visible" data-toggle="modal" data-target="#myModal">{{age}}</button>
					</p>
				</div>
				<div class="form mobile_half mobile_half_right">
					<p class="half half_left mobile_center mobile_input_tips">
						Entering university at
					</p>
					<p class="half half_right mobile_center">
						<input @keyup="enterFn()" ref="enter" type="number" class="form-control input_age" name="enter" value="18" v-model="enter" />
						<span class="tips" ref="enterTips">Enter age must be 18 - 21</span>
						<button @click="choose='Enter age';tmp=enter" class="btn mobile_age mobile_visible" data-toggle="modal" data-target="#myModal">{{enter}}</button>
					</p>
				</div>
				<div class="form cut_off mobile_cut_off">
					<p class="half half_left calculate_group_one">
						Which is
					</p>
					<p class="half half_right mobile_center calculate_group_two">
						<span class="mobile_visible">Which is</span><span class="calculate"> {{enter-age}}</span> years from now
					</p>
				</div>
				<div class="form">
					<p class="half half_left mobile_center">
						Studying in
					</p>
					<p class="half half_right mobile_center">
						<select class="selectCountry" ref="country" v-model="country">
							<option name="country" value="0"> --- select country --- </option>
							<option name="country" value="UK">United Kingdom</option>
							<option name="country" value="US">United States (Private)</option>
							<option name="country" value="USP">United States (Public)</option>
							<option name="country" value="Australia">Australia</option>
							<option name="country" value="Canada">Canada</option>
							<option name="country" value="HongKong">Hong Kong</option>
						</select>
						<button ref="selectBtn" @click="choose='Country';tmp=country" class="btn mobile_visible mobile_SC" data-toggle="modal" data-target="#myModal">{{showCountry}}</button>
					</p>
				</div>
				<div class="form mobile_cut_off">
					<p ref="degree" class="degree">
						<span class="degree_tips">Type of degree: </span>
						<label class="degree_left">
							<input v-model="degree" type="radio" name="degree" value="General" />
							<span>General</span>
						</label>
						<label>
							<input v-model="degree" type="radio" name="degree" value="Medical" />
							<span>Medical</span>
						</label>
						<label class="degree_right">
							<input v-model="degree" type="radio" name="degree" value="Law" />
							<span>Law</span>
						</label>
					</p>
				</div>
				<div class="form">
					<p class="half half_right mobile_center">
						<input type="button" class="btn next" @click="nextFn(sex,name,age,enter,country,degree)" value="Next" />
					</p>
				</div>
				
				<!--移动端显示底部-->
				<div class="mobile_footer">
					<img src="img/mobile_logo.png" />
				</div>
			</section>
		</section>
		
		<!--页面向导-->
		
		<router-view></router-view>
	</section>`,
		name: 'information',
		data() {
			return {
				show: true,
				choose: null,
				tmp: null,
				aryAge: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
				aryEnter: [18, 19, 20, 21],
				aryCountry: [' --- select country --- ', 'United Kingdom', 'United States (Private)', 'United States (Public)', 'Australia', 'Canada', 'Hong Kong'],
				aryCountryVal: [0, 'UK', 'US', 'USP', 'Australia', 'Canada', 'HongKong'],
				showCountry: ' --- select country --- ',
				sex: null,
				name: '',
				age: 0,
				enter: 18,
				country: 0,
				degree: 'General'
			}
		},
		computed: {},
		methods: {
			cancelFn: function() {
				if(this.choose == 'Age') {
					this.age = this.tmp;
				} else if(this.choose == 'Enter age') {
					this.enter = this.tmp;
				} else if(this.choose == 'Country') {
					this.country = this.tmp;
				}
			},
			ageFn: function() {
				this.age = this.age.toString().substring(0, 2);
			},
			enterFn: function() {
				this.enter = this.enter.toString().substring(0, 2);
			},
			nextFn: function(sex, name, age, enter, country, degree) {
				if(this.sex == null) {
					this.$refs.boy.style.borderColor = 'red';
					this.$refs.girl.style.borderColor = 'red';
				} else {
					this.$refs.boy.style.borderColor = '#cccccc';
					this.$refs.girl.style.borderColor = '#cccccc';
				}
				if(this.name == '') {
					this.$refs.name.style.borderColor = 'red';
				} else {
					this.$refs.name.style.borderColor = '#cccccc';
				}
				if(this.country == 0) {
					this.$refs.country.style.borderColor = 'red';
					this.$refs.selectBtn.style.borderColor = 'red';
				} else {
					this.$refs.country.style.borderColor = '#a9a9a9';
					this.$refs.selectBtn.style.borderColor = '#a9a9a9';
				}
				if(this.sex != null && this.name != '' && (this.age <= 14 && this.age >= 0 && this.age !== '') && (this.enter <= 21 && this.enter >= 18 && this.enter !== '') && this.country != 0) {
					this.$refs.incomplete.style.display = 'none';

					/*
					 * vuex数据通信
					 */

					//					this.$store.commit('fillIn', {
					//						sex,name,age,enter,country,degree
					//					});

					/*
					 * 添加页面缓存
					 */

					var userData = window.sessionStorage.getItem('userinf');
					if(userData) {
						userData = JSON.parse(userData);
						var upDate = {
							'name': name,
							'sex': sex,
							'age': age,
							'enter': enter,
							'country': country,
							'degree': degree
						};
						for(var i in upDate) {
							userData[i] = upDate[i];
						}
						userData = JSON.stringify(userData);
						window.sessionStorage.setItem('userinf', userData);
					} else {
						userData = {
							'name': name,
							'sex': sex,
							'age': age,
							'enter': enter,
							'country': country,
							'degree': degree
						};
						userData = JSON.stringify(userData);
						window.sessionStorage.setItem('userinf', userData);
					}

					router.push({
						path: '/planned'
					});
				} else {
					this.$refs.incomplete.style.display = 'block';
				}
			}
		},
		watch: {
			sex: {
				handler: function(val) {
					if(val != 'boy' && val != 'girl') {
						this.$refs.boy.style.borderColor = 'red';
						this.$refs.girl.style.borderColor = 'red';
					} else {
						this.$refs.boy.style.borderColor = '#cccccc';
						this.$refs.girl.style.borderColor = '#cccccc';
					}
					if(val != null && this.name != '' && (this.age <= 14 && this.age >= 0 || this.age !== '') && (this.enter <= 21 && this.enter >= 18 || this.enter !== '') && this.country != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			},
			name: {
				handler: function(val) {
					if(val == '') {
						this.$refs.name.style.borderColor = 'red';
					} else {
						this.$refs.name.style.borderColor = '#cccccc';
					}
					if(this.sex != null && val != '' && (this.age <= 14 && this.age >= 0 || this.age !== '') && (this.enter <= 21 && this.enter >= 18 || this.enter !== '') && this.country != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			},
			age: {
				handler: function(val) {
					if(val > 14 || val < 0 || val === '') {
						this.$refs.age.style.borderColor = 'red';
						this.$refs.ageTips.style.display = 'inline-block';
					} else {
						this.$refs.age.style.borderColor = '#cccccc';
						this.$refs.ageTips.style.display = 'none';
					}
					if(this.sex != null && this.name != '' && (val <= 14 && val >= 0 || val !== '') && (this.enter <= 21 && this.enter >= 18 || this.enter !== '') && this.country != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			},
			enter: {
				handler: function(val) {
					if(val > 21 || val < 18 || val === '') {
						this.$refs.enter.style.borderColor = 'red';
						this.$refs.enterTips.style.display = 'inline-block';
					} else {
						this.$refs.enter.style.borderColor = '#cccccc';
						this.$refs.enterTips.style.display = 'none';
					}
					if(this.sex != null && this.name != '' && (this.age <= 14 && this.age >= 0 || this.age !== '') && (val <= 21 && val >= 18 || val !== '') && this.country != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			},
			country: {
				handler: function(val) {
					for(var i = 0, len = this.aryCountryVal.length; i < len; i++) {
						if(this.aryCountryVal[i] == val) {
							this.showCountry = this.aryCountry[i];
						}
					}
					if(val == 0) {
						this.$refs.country.style.borderColor = 'red';
						this.$refs.selectBtn.style.borderColor = 'red';
					} else {
						this.$refs.country.style.borderColor = '#a9a9a9';
						this.$refs.selectBtn.style.borderColor = '#a9a9a9';
					}
					if(val != 0 && val != 'HongKong') {
						this.$refs.degree.style.display = 'block';
					} else {
						this.$refs.degree.style.display = 'none';
					}
					if(this.sex != null && this.name != '' && (this.age <= 14 && this.age >= 0 || this.age !== '') && (this.enter <= 21 && this.enter >= 18 || this.enter !== '') && val != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			}
		},
		mounted() {
			/*
			 * 获取页面缓存
			 */

			var userData = window.sessionStorage.getItem('userinf');
			if(userData) {
				userData = JSON.parse(userData);
				this.name = userData.name;
				this.age = userData.age;
				this.sex = userData.sex;
				this.enter = userData.enter;
				this.country = userData.country;
				this.degree = userData.degree;
			}
		}
	};

	var information_ch = {
		template: `
	<section class="wrap">
		
		<!--模态框-->
		
		<div class="modal fade" style="height: 100%;width: 100%;" id="myModal" tabindex="-1">
			<div class="modal-dialog" style="height: 90%;">
				<div class="modal-content" style="height: 100%;">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title" style="color: #004FB6;" id="myModalLabel">{{choose}}</h4>
					</div>
					<div class="modal-body" style="height:73.5%;overflow: auto;">
						<ul>
							<li v-if="choose=='年龄'" ref='ageList' v-for='val in aryAge'>
								<input @click="age=val" class="btn btn-primary" type="button" style="width: 100%;margin-bottom: .1rem;" name="age" :value="val" />
							</li>
							<li v-if="choose=='将入读大学年龄'" ref='enterList' v-for='val in aryEnter'>
								<input @click="enter=val" class="btn btn-primary" type="button" style="width: 100%;margin-bottom: .1rem;" name="enter" :value="val" />
							</li>
							<li v-if="choose=='将入读大学的国家'" ref='countryList' v-for='(val,index) in aryCountryVal'>
								<input @click="country=val" class="btn btn-primary" type="button" style="width: 100%;margin-bottom: .1rem;" name="enter" :value="aryCountry[index]" />
							</li>
						</ul>
					</div>
					<div class="modal-footer">
						<input data-dismiss="modal" @click="cancelFn()" type="button" class="btn btn-danger btn-sm" value="取消" />
						<input data-dismiss="modal" @click="tmp=null" type="button" class="btn btn-primary btn-sm" value="确定" />
					</div>
				</div>
			</div>
		</div>
		
		<!--页面内容-->
		
		<section class="main container">
			<section class="pull-left title">
				<h2>
					孩子的教育之路
				</h2>
			</section>
			<section class="pull-right content form_wrap">
				
				<!--切换语言-->
				<div class="switch_wrap">
					<label>
						<input type="checkbox"/>
						<i class="switch"></i>
						<router-link to='/information'>
							English
						</router-link>
						<router-link to='/information_chf'>
							繁
						</router-link>
						<router-link to='/information_ch'>
							简
						</router-link>
					</label>
				</div>
				
				<!--提示信息-->
				<div class="incomplete"><span ref="incomplete">请输入或选择所有资料</span></div>
				
				<!--表单-->
				<div class="form mobile_cut_off">
					<p class="half half_left mobile_center">
						孩子的性别
					</p>
					<p class="half half_right mobile_center">
						<label class="radio">
							<input v-model="sex" type="radio" name="sex" value="boy"/>
							<span ref="boy"><i></i>男</span>
						</label>
						<label class="radio">
							<input v-model="sex" type="radio" name="sex" value="girl"/>
							<span ref="girl"><i></i>女</span>
						</label>
					</p>
				</div>
				<div class="form mobile_cut_off">
					<p class="half half_left mobile_center">
						名字
					</p>
					<p class="half half_right mobile_center">
						<input ref="name" type="text" class="form-control input_name" name="name" v-model="name" value="" />
					</p>
				</div>
				<div class="form cut_off mobile_half mobile_half_left">
					<p class="half half_left mobile_center mobile_input_tips">
						年龄
					</p>
					<p class="half half_right mobile_center">
						<input @keyup="ageFn()" ref="age" type="number" class="form-control input_age" name="age" value="0" v-model="age" />
						<span class="tips" ref="ageTips">必须介乎 0 至 14 岁</span>
						<button @click="choose='年龄';tmp=age" class="btn mobile_age mobile_visible" data-toggle="modal" data-target="#myModal">{{age}}</button>
					</p>
				</div>
				<div class="form mobile_half mobile_half_right">
					<p class="half half_left mobile_center mobile_input_tips">
						将入读大学年龄
					</p>
					<p class="half half_right mobile_center">
						<input @keyup="enterFn()" ref="enter" type="number" class="form-control input_age" name="enter" value="18" v-model="enter" />
						<span class="tips" ref="enterTips">Enter age must be 18 - 21</span>
						<button @click="choose='将入读大学年龄';tmp=enter" class="btn mobile_age mobile_visible" data-toggle="modal" data-target="#myModal">{{enter}}</button>
					</p>
				</div>
				<div class="form cut_off mobile_cut_off">
					<p class="half half_left calculate_group_one">
						即是
					</p>
					<p class="half half_right mobile_center calculate_group_two">
						<span class="mobile_visible">即是</span><span class="calculate"> {{enter-age}}</span> 年之后
					</p>
				</div>
				<div class="form">
					<p class="half half_left mobile_center">
						将入读大学的国家
					</p>
					<p class="half half_right mobile_center">
						<select class="selectCountry" ref="country" v-model="country">
							<option name="country" value="0"> --- 请选择 --- </option>
							<option name="country" value="UK">英国</option>
							<option name="country" value="US">美国 (私立学校)</option>
							<option name="country" value="USP">美国 (公立学校)</option>
							<option name="country" value="Australia">澳洲</option>
							<option name="country" value="Canada">加拿大</option>
							<option name="country" value="HongKong">香港</option>
						</select>
						<button ref="selectBtn" @click="choose='将入读大学的国家';tmp=country" class="btn mobile_visible mobile_SC" data-toggle="modal" data-target="#myModal">{{showCountry}}</button>
					</p>
				</div>
				<div class="form mobile_cut_off">
					<p ref="degree" class="degree">
						<span class="degree_tips">学位类别: </span>
						<label class="degree_left">
							<input v-model="degree" type="radio" name="degree" value="General" />
							<span>一般学位</span>
						</label>
						<label>
							<input v-model="degree" type="radio" name="degree" value="Medical" />
							<span>医科</span>
						</label>
						<label class="degree_right">
							<input v-model="degree" type="radio" name="degree" value="Law" />
							<span>法律</span>
						</label>
					</p>
				</div>
				<div class="form">
					<p class="half half_right mobile_center">
						<input type="button" class="btn next" @click="nextFn(sex,name,age,enter,country,degree)" value="下一页" />
					</p>
				</div>
				
				<!--移动端显示底部-->
				<div class="mobile_footer">
					<img src="img/mobile_logo.png" />
				</div>
			</section>
		</section>
		
		<!--页面向导-->
		
		<router-view></router-view>
	</section>`,
		name: 'information_ch',
		data() {
			return {
				show: true,
				choose: null,
				tmp: null,
				aryAge: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
				aryEnter: [18, 19, 20, 21],
				aryCountry: [' --- 请选择 --- ', '英国', '美国 (私立学校)', '美国 (公立学校)', '澳洲', '加拿大', '香港'],
				aryCountryVal: [0, 'UK', 'US', 'USP', 'Australia', 'Canada', 'HongKong'],
				showCountry: ' --- select country --- ',
				sex: null,
				name: '',
				age: 0,
				enter: 18,
				country: 0,
				degree: 'General'
			}
		},
		computed: {},
		methods: {
			cancelFn: function() {
				if(this.choose == '年龄') {
					this.age = this.tmp;
				} else if(this.choose == '将入读大学年龄') {
					this.enter = this.tmp;
				} else if(this.choose == '将入读大学的国家') {
					this.country = this.tmp;
				}
			},
			ageFn: function() {
				this.age = this.age.toString().substring(0, 2);
			},
			enterFn: function() {
				this.enter = this.enter.toString().substring(0, 2);
			},
			nextFn: function(sex, name, age, enter, country, degree) {
				if(this.sex == null) {
					this.$refs.boy.style.borderColor = 'red';
					this.$refs.girl.style.borderColor = 'red';
				} else {
					this.$refs.boy.style.borderColor = '#cccccc';
					this.$refs.girl.style.borderColor = '#cccccc';
				}
				if(this.name == '') {
					this.$refs.name.style.borderColor = 'red';
				} else {
					this.$refs.name.style.borderColor = '#cccccc';
				}
				if(this.country == 0) {
					this.$refs.country.style.borderColor = 'red';
					this.$refs.selectBtn.style.borderColor = 'red';
				} else {
					this.$refs.country.style.borderColor = '#a9a9a9';
					this.$refs.selectBtn.style.borderColor = '#a9a9a9';
				}
				if(this.sex != null && this.name != '' && (this.age <= 14 && this.age >= 0 && this.age !== '') && (this.enter <= 21 && this.enter >= 18 && this.enter !== '') && this.country != 0) {
					this.$refs.incomplete.style.display = 'none';
					/*
					 * 添加页面缓存
					 */

					var userData = window.sessionStorage.getItem('userinf');
					if(userData) {
						userData = JSON.parse(userData);
						var upDate = {
							'name': name,
							'sex': sex,
							'age': age,
							'enter': enter,
							'country': country,
							'degree': degree
						};
						for(var i in upDate) {
							userData[i] = upDate[i];
						}
						userData = JSON.stringify(userData);
						window.sessionStorage.setItem('userinf', userData);
					} else {
						userData = {
							'name': name,
							'sex': sex,
							'age': age,
							'enter': enter,
							'country': country,
							'degree': degree
						};
						userData = JSON.stringify(userData);
						window.sessionStorage.setItem('userinf', userData);
					}

					router.push({
						path: '/planned_ch'
					});
				} else {
					this.$refs.incomplete.style.display = 'block';
				}
			}
		},
		watch: {
			sex: {
				handler: function(val) {
					if(val != 'boy' && val != 'girl') {
						this.$refs.boy.style.borderColor = 'red';
						this.$refs.girl.style.borderColor = 'red';
					} else {
						this.$refs.boy.style.borderColor = '#cccccc';
						this.$refs.girl.style.borderColor = '#cccccc';
					}
					if(val != null && this.name != '' && (this.age <= 14 && this.age >= 0 || this.age !== '') && (this.enter <= 21 && this.enter >= 18 || this.enter !== '') && this.country != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			},
			name: {
				handler: function(val) {
					if(val == '') {
						this.$refs.name.style.borderColor = 'red';
					} else {
						this.$refs.name.style.borderColor = '#cccccc';
					}
					if(this.sex != null && val != '' && (this.age <= 14 && this.age >= 0 || this.age !== '') && (this.enter <= 21 && this.enter >= 18 || this.enter !== '') && this.country != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			},
			age: {
				handler: function(val) {
					if(val > 14 || val < 0 || val === '') {
						this.$refs.age.style.borderColor = 'red';
						this.$refs.ageTips.style.display = 'inline-block';
					} else {
						this.$refs.age.style.borderColor = '#cccccc';
						this.$refs.ageTips.style.display = 'none';
					}
					if(this.sex != null && this.name != '' && (val <= 14 && val >= 0 || val !== '') && (this.enter <= 21 && this.enter >= 18 || this.enter !== '') && this.country != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			},
			enter: {
				handler: function(val) {
					if(val > 21 || val < 18 || val === '') {
						this.$refs.enter.style.borderColor = 'red';
						this.$refs.enterTips.style.display = 'inline-block';
					} else {
						this.$refs.enter.style.borderColor = '#cccccc';
						this.$refs.enterTips.style.display = 'none';
					}
					if(this.sex != null && this.name != '' && (this.age <= 14 && this.age >= 0 || this.age !== '') && (val <= 21 && val >= 18 || val !== '') && this.country != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			},
			country: {
				handler: function(val) {
					for(var i = 0, len = this.aryCountryVal.length; i < len; i++) {
						if(this.aryCountryVal[i] == val) {
							this.showCountry = this.aryCountry[i];
						}
					}
					if(val == 0) {
						this.$refs.country.style.borderColor = 'red';
						this.$refs.selectBtn.style.borderColor = 'red';
					} else {
						this.$refs.country.style.borderColor = '#a9a9a9';
						this.$refs.selectBtn.style.borderColor = '#a9a9a9';
					}
					if(val != 0 && val != 'HongKong') {
						this.$refs.degree.style.display = 'block';
					} else {
						this.$refs.degree.style.display = 'none';
					}
					if(this.sex != null && this.name != '' && (this.age <= 14 && this.age >= 0 || this.age !== '') && (this.enter <= 21 && this.enter >= 18 || this.enter !== '') && val != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			}
		},
		mounted() {
			/*
			 * 获取页面缓存
			 */

			var userData = window.sessionStorage.getItem('userinf');
			if(userData) {
				userData = JSON.parse(userData);
				this.name = userData.name;
				this.age = userData.age;
				this.sex = userData.sex;
				this.enter = userData.enter;
				this.country = userData.country;
				this.degree = userData.degree;
			}
		}

	}

	var information_chf = {
		template: `
	<section class="wrap">
		
		<!--模态框-->
		
		<div class="modal fade" style="height: 100%;width: 100%;" id="myModal" tabindex="-1">
			<div class="modal-dialog" style="height: 90%;">
				<div class="modal-content" style="height: 100%;">
					<div class="modal-header">
						<button type="button" class="close" data-dismiss="modal">&times;</button>
						<h4 class="modal-title" style="color: #004FB6;" id="myModalLabel">{{choose}}</h4>
					</div>
					<div class="modal-body" style="height:73.5%;overflow: auto;">
						<ul>
							<li v-if="choose=='年齡'" ref='ageList' v-for='val in aryAge'>
								<input @click="age=val" class="btn btn-primary" type="button" style="width: 100%;margin-bottom: .1rem;" name="age" :value="val" />
							</li>
							<li v-if="choose=='將入讀大學年齡'" ref='enterList' v-for='val in aryEnter'>
								<input @click="enter=val" class="btn btn-primary" type="button" style="width: 100%;margin-bottom: .1rem;" name="enter" :value="val" />
							</li>
							<li v-if="choose=='將入讀大學的國家'" ref='countryList' v-for='(val,index) in aryCountryVal'>
								<input @click="country=val" class="btn btn-primary" type="button" style="width: 100%;margin-bottom: .1rem;" name="enter" :value="aryCountry[index]" />
							</li>
						</ul>
					</div>
					<div class="modal-footer">
						<input data-dismiss="modal" @click="cancelFn()" type="button" class="btn btn-danger btn-sm" value="取消" />
						<input data-dismiss="modal" @click="tmp=null" type="button" class="btn btn-primary btn-sm" value="確定" />
					</div>
				</div>
			</div>
		</div>
		
		<!--頁面内容-->
		
		<section class="main container">
			<section class="pull-left title">
				<h2>
					孩子的教育之路
				</h2>
			</section>
			<section class="pull-right content form_wrap">
				
				<!--切换语言-->
				<div class="switch_wrap">
					<label>
						<input type="checkbox"/>
						<i class="switch"></i>
						<router-link to='/information'>
							English
						</router-link>
						<router-link to='/information_chf'>
							繁
						</router-link>
						<router-link to='/information_ch'>
							简
						</router-link>
					</label>
				</div>
				
				<!--提示信息-->
				<div class="incomplete"><span ref="incomplete">请输入或选择所有资料</span></div>
				
				<!--表单-->
				<div class="form mobile_cut_off">
					<p class="half half_left mobile_center">
						孩子的性别
					</p>
					<p class="half half_right mobile_center">
						<label class="radio">
							<input v-model="sex" type="radio" name="sex" value="boy"/>
							<span ref="boy"><i></i>男</span>
						</label>
						<label class="radio">
							<input v-model="sex" type="radio" name="sex" value="girl"/>
							<span ref="girl"><i></i>女</span>
						</label>
					</p>
				</div>
				<div class="form mobile_cut_off">
					<p class="half half_left mobile_center">
						名字
					</p>
					<p class="half half_right mobile_center">
						<input ref="name" type="text" class="form-control input_name" name="name" v-model="name" value="" />
					</p>
				</div>
				<div class="form cut_off mobile_half mobile_half_left">
					<p class="half half_left mobile_center mobile_input_tips">
						年齡
					</p>
					<p class="half half_right mobile_center">
						<input @keyup="ageFn()" ref="age" type="number" class="form-control input_age" name="age" value="0" v-model="age" />
						<span class="tips" ref="ageTips">必须介乎 0 至 14 岁</span>
						<button @click="choose='年齡';tmp=age" class="btn mobile_age mobile_visible" data-toggle="modal" data-target="#myModal">{{age}}</button>
					</p>
				</div>
				<div class="form mobile_half mobile_half_right">
					<p class="half half_left mobile_center mobile_input_tips">
						將入讀大學年齡
					</p>
					<p class="half half_right mobile_center">
						<input @keyup="enterFn()" ref="enter" type="number" class="form-control input_age" name="enter" value="18" v-model="enter" />
						<span class="tips" ref="enterTips">Enter age must be 18 - 21</span>
						<button @click="choose='將入讀大學年齡';tmp=enter" class="btn mobile_age mobile_visible" data-toggle="modal" data-target="#myModal">{{enter}}</button>
					</p>
				</div>
				<div class="form cut_off mobile_cut_off">
					<p class="half half_left calculate_group_one">
						即是
					</p>
					<p class="half half_right mobile_center calculate_group_two">
						<span class="mobile_visible">即是</span><span class="calculate"> {{enter-age}}</span> 年之後
					</p>
				</div>
				<div class="form">
					<p class="half half_left mobile_center">
						將入讀大學的國家
					</p>
					<p class="half half_right mobile_center">
						<select class="selectCountry" ref="country" v-model="country">
							<option name="country" value="0"> --- 請選擇 --- </option>
							<option name="country" value="UK">英國</option>
							<option name="country" value="US">美國 (私立學校)</option>
							<option name="country" value="USP">美國 (公立學校)</option>
							<option name="country" value="Australia">澳洲</option>
							<option name="country" value="Canada">加拿大</option>
							<option name="country" value="HongKong">香港</option>
						</select>
						<button ref="selectBtn" @click="choose='將入讀大學的國家';tmp=country" class="btn mobile_visible mobile_SC" data-toggle="modal" data-target="#myModal">{{showCountry}}</button>
					</p>
				</div>
				<div class="form mobile_cut_off">
					<p ref="degree" class="degree">
						<span class="degree_tips">學位類别: </span>
						<label class="degree_left">
							<input v-model="degree" type="radio" name="degree" value="General" />
							<span>一般學位</span>
						</label>
						<label>
							<input v-model="degree" type="radio" name="degree" value="Medical" />
							<span>醫科</span>
						</label>
						<label class="degree_right">
							<input v-model="degree" type="radio" name="degree" value="Law" />
							<span>法律</span>
						</label>
					</p>
				</div>
				<div class="form">
					<p class="half half_right mobile_center">
						<input type="button" class="btn next" @click="nextFn(sex,name,age,enter,country,degree)" value="下一頁" />
					</p>
				</div>
				
				<!--移动端显示底部-->
				<div class="mobile_footer">
					<img src="img/mobile_logo.png" />
				</div>
			</section>
		</section>
		
		<!--頁面向导-->
		
		<router-view></router-view>
	</section>`,
		name: 'information_chf',
		data() {
			return {
				show: true,
				choose: null,
				tmp: null,
				aryAge: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
				aryEnter: [18, 19, 20, 21],
				aryCountry: [' --- 請選擇 --- ', '英國', '美國 (私立學校)', '美國 (公立學校)', '澳洲', '加拿大', '香港'],
				aryCountryVal: [0, 'UK', 'US', 'USP', 'Australia', 'Canada', 'HongKong'],
				showCountry: ' --- select country --- ',
				sex: null,
				name: '',
				age: 0,
				enter: 18,
				country: 0,
				degree: 'General'
			}
		},
		computed: {},
		methods: {
			cancelFn: function() {
				if(this.choose == '年齡') {
					this.age = this.tmp;
				} else if(this.choose == '將入讀大學年齡') {
					this.enter = this.tmp;
				} else if(this.choose == '將入讀大學的國家') {
					this.country = this.tmp;
				}
			},
			ageFn: function() {
				this.age = this.age.toString().substring(0, 2);
			},
			enterFn: function() {
				this.enter = this.enter.toString().substring(0, 2);
			},
			nextFn: function(sex, name, age, enter, country, degree) {
				if(this.sex == null) {
					this.$refs.boy.style.borderColor = 'red';
					this.$refs.girl.style.borderColor = 'red';
				} else {
					this.$refs.boy.style.borderColor = '#cccccc';
					this.$refs.girl.style.borderColor = '#cccccc';
				}
				if(this.name == '') {
					this.$refs.name.style.borderColor = 'red';
				} else {
					this.$refs.name.style.borderColor = '#cccccc';
				}
				if(this.country == 0) {
					this.$refs.country.style.borderColor = 'red';
					this.$refs.selectBtn.style.borderColor = 'red';
				} else {
					this.$refs.country.style.borderColor = '#a9a9a9';
					this.$refs.selectBtn.style.borderColor = '#a9a9a9';
				}
				if(this.sex != null && this.name != '' && (this.age <= 14 && this.age >= 0 && this.age !== '') && (this.enter <= 21 && this.enter >= 18 && this.enter !== '') && this.country != 0) {
					this.$refs.incomplete.style.display = 'none';

					/*
					 * 添加頁面缓存
					 */

					var userData = window.sessionStorage.getItem('userinf');
					if(userData) {
						userData = JSON.parse(userData);
						var upDate = {
							'name': name,
							'sex': sex,
							'age': age,
							'enter': enter,
							'country': country,
							'degree': degree
						};
						for(var i in upDate) {
							userData[i] = upDate[i];
						}
						userData = JSON.stringify(userData);
						window.sessionStorage.setItem('userinf', userData);
					} else {
						userData = {
							'name': name,
							'sex': sex,
							'age': age,
							'enter': enter,
							'country': country,
							'degree': degree
						};
						userData = JSON.stringify(userData);
						window.sessionStorage.setItem('userinf', userData);
					}

					router.push({
						path: '/planned_chf'
					});
				} else {
					this.$refs.incomplete.style.display = 'block';
				}
			}
		},
		watch: {
			sex: {
				handler: function(val) {
					if(val != 'boy' && val != 'girl') {
						this.$refs.boy.style.borderColor = 'red';
						this.$refs.girl.style.borderColor = 'red';
					} else {
						this.$refs.boy.style.borderColor = '#cccccc';
						this.$refs.girl.style.borderColor = '#cccccc';
					}
					if(val != null && this.name != '' && (this.age <= 14 && this.age >= 0 || this.age !== '') && (this.enter <= 21 && this.enter >= 18 || this.enter !== '') && this.country != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			},
			name: {
				handler: function(val) {
					if(val == '') {
						this.$refs.name.style.borderColor = 'red';
					} else {
						this.$refs.name.style.borderColor = '#cccccc';
					}
					if(this.sex != null && val != '' && (this.age <= 14 && this.age >= 0 || this.age !== '') && (this.enter <= 21 && this.enter >= 18 || this.enter !== '') && this.country != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			},
			age: {
				handler: function(val) {
					if(val > 14 || val < 0 || val === '') {
						this.$refs.age.style.borderColor = 'red';
						this.$refs.ageTips.style.display = 'inline-block';
					} else {
						this.$refs.age.style.borderColor = '#cccccc';
						this.$refs.ageTips.style.display = 'none';
					}
					if(this.sex != null && this.name != '' && (val <= 14 && val >= 0 || val !== '') && (this.enter <= 21 && this.enter >= 18 || this.enter !== '') && this.country != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			},
			enter: {
				handler: function(val) {
					if(val > 21 || val < 18 || val === '') {
						this.$refs.enter.style.borderColor = 'red';
						this.$refs.enterTips.style.display = 'inline-block';
					} else {
						this.$refs.enter.style.borderColor = '#cccccc';
						this.$refs.enterTips.style.display = 'none';
					}
					if(this.sex != null && this.name != '' && (this.age <= 14 && this.age >= 0 || this.age !== '') && (val <= 21 && val >= 18 || val !== '') && this.country != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			},
			country: {
				handler: function(val) {
					for(var i = 0, len = this.aryCountryVal.length; i < len; i++) {
						if(this.aryCountryVal[i] == val) {
							this.showCountry = this.aryCountry[i];
						}
					}
					if(val == 0) {
						this.$refs.country.style.borderColor = 'red';
						this.$refs.selectBtn.style.borderColor = 'red';
					} else {
						this.$refs.country.style.borderColor = '#a9a9a9';
						this.$refs.selectBtn.style.borderColor = '#a9a9a9';
					}
					if(val != 0 && val != 'HongKong') {
						this.$refs.degree.style.display = 'block';
					} else {
						this.$refs.degree.style.display = 'none';
					}
					if(this.sex != null && this.name != '' && (this.age <= 14 && this.age >= 0 || this.age !== '') && (this.enter <= 21 && this.enter >= 18 || this.enter !== '') && val != 0) {
						this.$refs.incomplete.style.display = 'none';
					}
				}
			}
		},
		mounted() {
			/*
			 * 获取頁面缓存
			 */

			var userData = window.sessionStorage.getItem('userinf');
			if(userData) {
				userData = JSON.parse(userData);
				this.name = userData.name;
				this.age = userData.age;
				this.sex = userData.sex;
				this.enter = userData.enter;
				this.country = userData.country;
				this.degree = userData.degree;
			}
		}
	};

	var guide = {
		template: `
	<section class="screen_overlay">
		<section class="accept">
			
			<!--切换语言-->
			<p class="switch_wrap">
				<i class="switch"></i>
				<router-link to='/information/guide'>
					English
				</router-link>
				<router-link to='/information_chf/guide_chf'>
					繁
				</router-link>
				<router-link to='/information_ch/guide_ch'>
					简
				</router-link>
			</p>
			
			<!--横幅-->
			<div class="banner">
				<img class="introduction" src="img/introduction.png" />
				<p class="tips">|Savings|Protection|</p>
				<img class="logo" src="img/logo.png" />
				<p class="mobile_switch">
					<router-link to='/information/guide'>
						English
					</router-link>
					<router-link to='/information_chf/guide_chf'>
						繁
					</router-link>
					<router-link to='/information_ch/guide_ch'>
						简
					</router-link>
				</p>
			</div>
			
			<!--内容-->
			<div class="content">
				<h2>Important notes</h2>
				<p>MyChild Education Savings Calculator is designed to assist in financial planning and is for general reference only. MyChild Education Savings Calculator shall not consider the specific financial objectives, financial situation or needs of anyone.&nbsp;For financial advice or other enquiries, please email us at
					<a href="mailto:edspecialist@aviva-asia.com">edspecialist@aviva-asia.com</a>.</p>
				<p>Actual cost may vary depending on economic conditions.&nbsp; The information provided is based on various assumptions, which are subject to change at any time without notice.</p>
				<router-link to="/information" class="btn pull-right">Accept and start</router-link>
				
				<!--移动端显示logo-->
				<p class="mobile_logo">
					<img src="img/mobile_logo.png" />
				</p>
			</div>
		</section>
	</section>`,
		name: 'guide'

	}

	var guide_ch = {
		template: `
	<section class="screen_overlay">
		<section class="accept">
			
			<!--切换语言-->
			<p class="switch_wrap">
				<i class="switch"></i>
				<router-link to='/information/guide'>
					English
				</router-link>
				<router-link to='/information_chf/guide_chf'>
					繁
				</router-link>
				<router-link to='/information_ch/guide_ch'>
					简
				</router-link>
			</p>
			
			<!--横幅-->
			<div class="banner">
				<img class="introduction" src="img/introduction.png" />
				<p class="tips">|储蓄|保障|</p>
				<img class="logo" src="img/logo.png" />
				<p class="mobile_switch">
					<router-link to='/information/guide'>
						English
					</router-link>
					<router-link to='/information_chf/guide_chf'>
						繁
					</router-link>
					<router-link to='/information_ch/guide_ch'>
						简
					</router-link>
				</p>
			</div>
			
			<!--内容-->
			<div class="content">
				<h2>注意事项</h2>
				<p>MyChild Education Savings Calculator旨在协助财务规划，仅作参考之用。 MyChild Education Savings Calculator并没有将具体的财务目标、财务状况或个人需要列入考虑之内。有关财务建议及其他查询，请电邮至
					<a href="mailto:edspecialist@aviva-asia.com">edspecialist@aviva-asia.com</a>.</p>
				<p>实际费用可能会因应经济环境而有所不同，所提供的内容和分析基于各种假设，或会随时更改及不作另行通知。</p>
				<router-link to="/information_ch" class="btn pull-right">接受及开始</router-link>
				
				<!--移动端显示logo-->
				<p class="mobile_logo">
					<img src="img/mobile_logo.png" />
				</p>
			</div>
		</section>
	</section>
`,
		name: 'guide_ch'
	};

	var guide_chf = {
		template: `
	<section class="screen_overlay">
		<section class="accept">
			
			<!--切换语言-->
			<p class="switch_wrap">
				<i class="switch"></i>
				<router-link to='/information/guide'>
					English
				</router-link>
				<router-link to='/information_chf/guide_chf'>
					繁
				</router-link>
				<router-link to='/information_ch/guide_ch'>
					简
				</router-link>
			</p>
			
			<!--横幅-->
			<div class="banner">
				<img class="introduction" src="img/introduction.png" />
				<p class="tips">|儲蓄|保障|</p>
				<img class="logo" src="img/logo.png" />
				<p class="mobile_switch">
					<router-link to='/information/guide'>
						English
					</router-link>
					<router-link to='/information_chf/guide_chf'>
						繁
					</router-link>
					<router-link to='/information_ch/guide_ch'>
						简
					</router-link>
				</p>
			</div>
				
			<!--内容-->
			<div class="content">
				<h2>注意事項</h2>
				<p>MyChild Education Savings Calculator旨在協助財務規劃，僅作參考之用。MyChild Education Savings Calculator並沒有將具體的財務目標、財務狀況或個人需要列入考慮之內。有關財務建議及其他查詢，請電郵至
					<a href="mailto:edspecialist@aviva-asia.com">edspecialist@aviva-asia.com</a>.</p>
				<p>實際費用可能會因應經濟環境而有所不同，所提供的內容和分析基於各種假設，或會隨時更改及不作另行通知。</p>
				<router-link to="/information_chf" class="btn pull-right">接受及開始</router-link>
				
				<!--移动端显示logo-->
				<p class="mobile_logo">
					<img src="img/mobile_logo.png" />
				</p>
			</div>
		</section>
	</section>`,
		name: 'guide_chf'
	};

	var planned = {
		template: `
	<section class="wrap">
		<section class="main container">
			
			<!--标题-->
			<section class="pull-left title">
				<h2>
					What <br class="br" /><span>I have planned...</span>
				</h2>
			</section>
			
			<!--内容-->
			<section class="pull-right content planned">
			
				<!--切换语言-->
				<div class="switch_wrap">
					<span @click="backFn()" class="back">
						<i class="glyphicon glyphicon-menu-left"></i>
					</span>
					<label>
						<input type="checkbox"/>
						<i class="switch"></i>
						<router-link to='/planned'>
							English
						</router-link>
						<router-link to='/planned_chf'>
							繁
						</router-link>
						<router-link to='/planned_ch'>
							简
						</router-link>
					</label>
				</div>
				
				<!--移动端显示底部-->
				<div class="mobile_footer">
					<img src="img/mobile_logo.png" />
				</div>
				<div class="planned_wrap" ref="planned">
					<p>I have already set aside</p>
					<div class="input-group aside">
						<span class="input-group-addon">HK$</span>
						<input ref="aside" v-model="aside" @keyup="asideFn()" class="form-control" type="text" name="" id="" value="0" />
					</div>
					<p>for {{name}}'s education</p>
					<p class="tips" ref="asideTips">Must be below HK$9,999,000</p>
					<div class="btn_wrap">
						<input class="btn back" @click="backFn()" type="button" value="< Back" />
						<input class="btn next" @click="nextFn(aside)" type="button" value="Next >" />
					</div>
				</div>
			</section>
		</section>
	</section>
	`,
		name: 'planned',
		data() {
			return {
				name: null,
				aside: 0,
				verify: 1
			}
		},
		computed: {},
		methods: {
			asideFn: function() {
				if(this.aside.replace) {
					this.aside = this.aside.replace(/[^0-9]/g, "");
					this.aside = this.aside.replace(/^[0]+/, "");
				}
				if(this.aside == '') {
					this.aside = 0;
				}
				this.aside = this.aside.toString().substring(0, 8);
				if(this.aside > 9999000) {
					this.$refs.aside.style.borderColor = 'red';
					this.$refs.asideTips.style.opacity = 1;
					this.verify = null;
				} else {
					this.$refs.aside.style.borderColor = '#cccccc';
					this.$refs.asideTips.style.opacity = 0;
					this.verify = 1;
				}
				this.aside = this.aside.split('').reverse().join('').replace(/\w{3}/g, function(a) {
					a = a + ',';
					return a;
				});
				if(this.aside.substr(-1) == ',') {
					this.aside = this.aside.split('');
					this.aside.pop();
					this.aside = this.aside.reverse().join('');
				} else {
					this.aside = this.aside.split('');
					this.aside = this.aside.reverse().join('');
				}
			},
			backFn: function() {
				router.push({
					path: '/information'
				});
			},
			nextFn: function(aside) {
				if(this.verify == 1) {
					if(aside.replace) {
						var aside = aside.replace(/[^0-9]/g, "");
					}
					var userData = window.sessionStorage.getItem('userinf');
					userData = JSON.parse(userData);
					userData.aside = aside;
					userData = JSON.stringify(userData);
					window.sessionStorage.setItem('userinf', userData);
					router.push({
						path: '/showRes'
					});
				}
			}
		},
		watch: {},
		mounted() {
			var xTop = (window.innerHeight - this.$refs.planned.clientHeight) * .5;
			this.$refs.planned.style.opacity = 0;
			var setCss = setInterval(function() {
				var mTop = (window.innerHeight - this.$refs.planned.clientHeight) * .5;
				this.$refs.planned.style.marginTop = mTop + 'px';
				this.$refs.planned.style.opacity = 1;
				clearInterval(setCss);
			}.bind(this), 1);
			var userData = window.sessionStorage.getItem('userinf');
			if(userData) {
				userData = JSON.parse(userData);
				this.name = userData.name;
				if(userData.aside) {
					this.aside = userData.aside;
					var test = this.aside.replace(/[^0-9]/g, "");
					if(test <= 9999000) {
						this.verify = 1;
					}
				}
			}

		}
	};

	var planned_ch = {
		template: `<section class="wrap">
		<section class="main container">
			
			<!--标题-->
			<section class="pull-left title">
				<h2>
					我的储备...</span>
				</h2>
			</section>
			
			<!--内容-->
			<section class="pull-right content planned">
			
				<!--切换语言-->
				<div class="switch_wrap">
					<span @click="backFn()" class="back">
						<i class="glyphicon glyphicon-menu-left"></i>
					</span>
					<label>
						<input type="checkbox"/>
						<i class="switch"></i>
						<router-link to='/planned'>
							English
						</router-link>
						<router-link to='/planned_chf'>
							繁
						</router-link>
						<router-link to='/planned_ch'>
							简
						</router-link>
					</label>
				</div>
				
				<!--移动端显示底部-->
				<div class="mobile_footer">
					<img src="img/mobile_logo.png" />
				</div>
				<div class="planned_wrap" ref="planned">
					<p>我已储备了</p>
					<div class="input-group aside">
						<span class="input-group-addon">港币</span>
						<input ref="aside" v-model="aside" @keyup="asideFn()" class="form-control" type="text" name="" id="" value="0" />
					</div>
					<p>作为 {{name}} 的教育开支</p>
					<p class="tips" ref="asideTips">必须少于9,999,000港元</p>
					<div class="btn_wrap">
						<input class="btn back" @click="backFn()" type="button" value="< 上一页" />
						<input class="btn next" @click="nextFn(aside)" type="button" value="下一页 >" />
					</div>
				</div>
			</section>
		</section>
	</section>
	`,
		name: 'planned_ch',
		data() {
			return {
				name: null,
				aside: 0,
				verify: 1
			}
		},
		computed: {},
		methods: {
			asideFn: function() {
				if(this.aside.replace) {
					this.aside = this.aside.replace(/[^0-9]/g, "");
					this.aside = this.aside.replace(/^[0]+/, "");
				}
				if(this.aside == '') {
					this.aside = 0;
				}
				this.aside = this.aside.toString().substring(0, 8);
				if(this.aside > 9999000) {
					this.$refs.aside.style.borderColor = 'red';
					this.$refs.asideTips.style.opacity = 1;
					this.verify = null;
				} else {
					this.$refs.aside.style.borderColor = '#cccccc';
					this.$refs.asideTips.style.opacity = 0;
					this.verify = 1;
				}
				this.aside = this.aside.split('').reverse().join('').replace(/\w{3}/g, function(a) {
					a = a + ',';
					return a;
				});
				if(this.aside.substr(-1) == ',') {
					this.aside = this.aside.split('');
					this.aside.pop();
					this.aside = this.aside.reverse().join('');
				} else {
					this.aside = this.aside.split('');
					this.aside = this.aside.reverse().join('');
				}
			},
			backFn: function() {
				router.push({
					path: '/information_ch'
				});
			},
			nextFn: function(aside) {
				if(this.verify == 1) {
					if(aside.replace) {
						var aside = aside.replace(/[^0-9]/g, "");
					}
					var userData = window.sessionStorage.getItem('userinf');
					userData = JSON.parse(userData);
					userData.aside = aside;
					userData = JSON.stringify(userData);
					window.sessionStorage.setItem('userinf', userData);
					router.push({
						path: '/showRes_ch'
					});
				}
			}
		},
		watch: {},
		mounted() {
			var xTop = (window.innerHeight - this.$refs.planned.clientHeight) * .5;
			this.$refs.planned.style.opacity = 0;
			var setCss = setInterval(function() {
				var mTop = (window.innerHeight - this.$refs.planned.clientHeight) * .5;
				this.$refs.planned.style.marginTop = mTop + 'px';
				this.$refs.planned.style.opacity = 1;
				clearInterval(setCss);
			}.bind(this), 1);
			var userData = window.sessionStorage.getItem('userinf');
			if(userData) {
				userData = JSON.parse(userData);
				this.name = userData.name;
				if(userData.aside) {
					this.aside = userData.aside;
					var test = this.aside.replace(/[^0-9]/g, "");
					if(test <= 9999000) {
						this.verify = 1;
					}
				}
			}

		}
	};

	var planned_chf = {
		template: `<section class="wrap">
		<section class="main container">
			
			<!--标题-->
			<section class="pull-left title">
				<h2>
					我的儲備...</span>
				</h2>
			</section>
			
			<!--内容-->
			<section class="pull-right content planned">
			
				<!--切换语言-->
				<div class="switch_wrap">
					<span @click="backFn()" class="back">
						<i class="glyphicon glyphicon-menu-left"></i>
					</span>
					<label>
						<input type="checkbox"/>
						<i class="switch"></i>
						<router-link to='/planned'>
							English
						</router-link>
						<router-link to='/planned_chf'>
							繁
						</router-link>
						<router-link to='/planned_ch'>
							简
						</router-link>
					</label>
				</div>
				
				<!--移动端显示底部-->
				<div class="mobile_footer">
					<img src="img/mobile_logo.png" />
				</div>
				<div class="planned_wrap" ref="planned">
					<p>我已儲備了</p>
					<div class="input-group aside">
						<span class="input-group-addon">港幣</span>
						<input ref="aside" v-model="aside" @keyup="asideFn()" class="form-control" type="text" name="" id="" value="0" />
					</div>
					<p>作為 {{name}} 的教育開支</p>
					<p class="tips" ref="asideTips">必須少於9,999,000港元</p>
					<div class="btn_wrap">
						<input class="btn back" @click="backFn()" type="button" value="< 上一頁" />
						<input class="btn next" @click="nextFn(aside)" type="button" value="下一頁 >" />
					</div>
				</div>
			</section>
		</section>
	</section>
	`,
		name: 'planned_chf',
		data() {
			return {
				name: null,
				aside: 0,
				verify: 1
			}
		},
		computed: {},
		methods: {
			asideFn: function() {
				if(this.aside.replace) {
					this.aside = this.aside.replace(/[^0-9]/g, "");
					this.aside = this.aside.replace(/^[0]+/, "");
				}
				if(this.aside == '') {
					this.aside = 0;
				}
				this.aside = this.aside.toString().substring(0, 8);
				if(this.aside > 9999000) {
					this.$refs.aside.style.borderColor = 'red';
					this.$refs.asideTips.style.opacity = 1;
					this.verify = null;
				} else {
					this.$refs.aside.style.borderColor = '#cccccc';
					this.$refs.asideTips.style.opacity = 0;
					this.verify = 1;
				}
				this.aside = this.aside.split('').reverse().join('').replace(/\w{3}/g, function(a) {
					a = a + ',';
					return a;
				});
				if(this.aside.substr(-1) == ',') {
					this.aside = this.aside.split('');
					this.aside.pop();
					this.aside = this.aside.reverse().join('');
				} else {
					this.aside = this.aside.split('');
					this.aside = this.aside.reverse().join('');
				}
			},
			backFn: function() {
				router.push({
					path: '/information_chf'
				});
			},
			nextFn: function(aside) {
				if(this.verify == 1) {
					if(aside.replace) {
						var aside = aside.replace(/[^0-9]/g, "");
					}
					var userData = window.sessionStorage.getItem('userinf');
					userData = JSON.parse(userData);
					userData.aside = aside;
					userData = JSON.stringify(userData);
					window.sessionStorage.setItem('userinf', userData);
					router.push({
						path: '/showRes_chf'
					});
				}
			}
		},
		watch: {},
		mounted() {
			var xTop = (window.innerHeight - this.$refs.planned.clientHeight) * .5;
			this.$refs.planned.style.opacity = 0;
			var setCss = setInterval(function() {
				var mTop = (window.innerHeight - this.$refs.planned.clientHeight) * .5;
				this.$refs.planned.style.marginTop = mTop + 'px';
				this.$refs.planned.style.opacity = 1;
				clearInterval(setCss);
			}.bind(this), 1);
			var userData = window.sessionStorage.getItem('userinf');
			if(userData) {
				userData = JSON.parse(userData);
				this.name = userData.name;
				if(userData.aside) {
					this.aside = userData.aside;
					var test = this.aside.replace(/[^0-9]/g, "");
					if(test <= 9999000) {
						this.verify = 1;
					}
				}
			}

		}
	};

	var showRes = {
		template: `<section class="wrap">
			<section class="main container">
				
				<!--标题-->
				<section class="pull-left title">
					<h2>
						How much <br class="br" /><span>more I need...</span>
					</h2>
				</section>
				
				<!--内容-->
				<section class="pull-right content showRes">
					<div class="back_btn">
						<input class="btn" @click="backFn()" type="button" value="< Back" />
					</div>
					
					<!--切换语言-->
					<div class="switch_wrap">
						<span @click="backFn()" class="back">
							<i class="glyphicon glyphicon-menu-left"></i>
						</span>
						<label>
							<input type="checkbox"/>
							<i class="switch"></i>
							<router-link to='/showRes'>
								English
							</router-link>
							<router-link to='/showRes_chf'>
								繁
							</router-link>
							<router-link to='/showRes_ch'>
								简
							</router-link>
						</label>
					</div>
					
					<!--移动端显示底部-->
					<div class="mobile_footer">
						<img src="img/mobile_logo.png" />
					</div>
					
					<!--显示计算结果-->
					<div class="showRes_wrap" ref="showRes">
						<p>Total education cost</p>
						<h1 class="cut_off">"HK$"{{cost|thousand}}</h1>
						
						<!--canvas-->
						<div ref="viewWrap" class="view_wrap">
							<canvas ref="view">
								
								<!--显示则不兼容-->
								<span>This browser is not compatible</span>
							</canvas>
						</div>
						
						<!--切换利率-->
						<div ref="conWrap" class="con_wrap">
							<transition-group
								:enter-active-class='enterClass'
								:leave-active-class='leaveClass'
							>
								<div ref="con" class="con" v-for="(v,i) in jCAGR" v-if="jIndex==i" :key="i">
									<h3>{{v.type}}</h3>
									<p>
										<span>{{v.rate}}</span>
										compound annual growth rate
										<br />
										of my savings
									</p>
								</div>
							</transition-group>
							<div class="index_btn">
								<ol>
									<li ref="indexBtn" @click="indexFn(i)" v-for="(v,i) in jCAGR"></li>
								</ol>
							</div>
							<div @click="prevFn()" class="prev">
								
							</div>
							<div @click="nextFn()" class="next">
								
							</div>
						</div>
						
						<!--更多和咨询-->
						<div class="btn_wrap">
							<router-link to="showRes/ask" class="btn ask">I want to ask</router-link>
							<router-link to="showRes/more" class="btn more">More information</router-link>
						</div>
					</div>
				</section>
			</section>
			
			<!--更多和帮助-->
			<router-view></router-view>
		</section>`,
		name: 'showRes',
		data() {
			return {
				jCAGR: [{
						'type': 'Conservative',
						'rate': '1%'
					},
					{
						'type': 'Moderately conservative',
						'rate': '2%'
					},
					{
						'type': 'Moderate',
						'rate': '4%'
					},
					{
						'type': 'Moderate Aggressive',
						'rate': '5%'
					},
					{
						'type': 'Aggressive',
						'rate': '7%'
					}
				],
				jIndex: 0,
				enterClass: '',
				leaveClass: '',
				total: {
					'UK': {
						'General': 2106056,
						'Medical': 4779000,
						'Law': 2952749
					},
					'US': {
						'General': 2381284,
						'Medical': 4732148,
						'Law': 3221283
					},
					'USP': {
						'General': 2006303,
						'Medical': 3965942,
						'Law': 2690837
					},
					'Australia': {
						'General': 2120903,
						'Medical': 3032201,
						'Law': 2696599
					},
					'Canada': {
						'General': 1803298,
						'Medical': 2879629,
						'Law': 2392223
					},
					'HongKong': {
						'General': 547368,
						'Medical': 547368,
						'Law': 547368
					}
				},
				rate: [1.01, 1.02, 1.04, 1.05, 1.07],
				cost: null,
				aside: null,
				country: null,
				degree: null,
				depositTime: null,
				willNeed: null,
				ctx: null
			}
		},
		computed: {},
		methods: {
			calculatorFn: function() {
				var wfontSize = window.getComputedStyle(this.$refs.viewWrap).fontSize;
				var wWidth = this.$refs.viewWrap.clientWidth;
				var wHeight = this.$refs.viewWrap.clientHeight;
				this.$refs.view.width = wWidth;
				this.$refs.view.height = wHeight;
				var ctx = this.$refs.view.getContext('2d');
				this.willNeed = Math.ceil(this.cost - parseInt(this.aside) * Math.pow(this.rate[this.jIndex], this.depositTime));
				if(this.willNeed <= 0) {
					this.willNeed = 0;
				}
				var percent = (this.cost - this.willNeed) / this.cost;
				if(percent >= 1) {
					percent = 1;
				}
				ctx.clearRect(0, 0, wWidth, wHeight);
				ctx.beginPath();
				ctx.arc(wWidth * .5, wHeight * .65, wHeight * .6, (5 / 6) * Math.PI, (percent * (2 + 1 / 6 - 5 / 6) + 5 / 6) * Math.PI);
				ctx.lineWidth = 10;
				ctx.strokeStyle = "#013984";
				ctx.stroke();
				ctx.closePath();
				ctx.beginPath();
				ctx.arc(wWidth * .5, wHeight * .65, wHeight * .6, (percent * (2 + 1 / 6 - 5 / 6) + 5 / 6) * Math.PI, (2 + 1 / 6) * Math.PI);
				ctx.lineWidth = 10;
				ctx.strokeStyle = "#59b337";
				ctx.stroke();
				ctx.closePath();
				ctx.beginPath();
				ctx.font = wfontSize + ' SanFrancisco';
				ctx.textAlign = "center";
				ctx.fillText("I will need", wWidth * .5, wHeight * .6);
				ctx.fillStyle = '#59b337';
				ctx.fillText("HK$" + this.toThousand(this.willNeed), wWidth * .5, wHeight * .8);
				ctx.closePath();
			},
			toThousand: function(val) {
				var val = val + '';
				val = val.split('').reverse().join('').replace(/\w{3}/g, function(a) {
					a = a + ',';
					return a;
				});
				if(val.substr(-1) == ',') {
					val = val.split('');
					val.pop();
					val = val.reverse().join('');
				} else {
					val = val.split('');
					val = val.reverse().join('');
				}
				return val;
			},
			indexFn: function(i) {
				for(var q in this.$refs.indexBtn) {
					this.$refs.indexBtn[q].style.backgroundColor = '#9C9C9C';
				}
				if(this.jIndex > i) {
					this.enterClass = 'animated bounceInLeft';
					this.leaveClass = 'animated bounceOutRight';
				} else {
					this.enterClass = 'animated bounceInRight';
					this.leaveClass = 'animated bounceOutLeft';
				}
				this.jIndex = i;
				this.$refs.indexBtn[i].style.backgroundColor = '#004FB6';
			},
			prevFn: function() {
				this.enterClass = 'animated bounceInLeft';
				this.leaveClass = 'animated bounceOutRight';
				if(this.jIndex <= 0) {
					this.jIndex = this.jCAGR.length - 1;
				} else {
					this.jIndex -= 1;
				}
			},
			nextFn: function() {
				this.enterClass = 'animated bounceInRight';
				this.leaveClass = 'animated bounceOutLeft';
				if(this.jIndex >= this.jCAGR.length - 1) {
					this.jIndex = 0;
				} else {
					this.jIndex += 1;
				}
			},
			backFn: function() {
				router.push({
					path: '/planned'
				});
			}
		},
		watch: {
			jIndex: {
				handler: function(val) {
					for(var q in this.$refs.indexBtn) {
						this.$refs.indexBtn[q].style.backgroundColor = '#9C9C9C';
					}
					this.$refs.indexBtn[val].style.backgroundColor = '#004FB6';
					this.calculatorFn();
				}
			}
		},
		mounted() {
			var userData = window.sessionStorage.getItem('userinf');
			if(userData) {
				userData = JSON.parse(userData);
				this.aside = userData.aside;
				this.country = userData.country;
				this.degree = userData.degree;
				this.cost = this.total[this.country][this.degree];
				this.depositTime = userData.enter - userData.age;
			}
			this.$refs.view.style.opacity = 0;
			var setCss = setInterval(function() {
				this.$refs.conWrap.style.height = this.$refs.con['0'].clientHeight + 'px';
				this.$refs.view.style.opacity = 1;
				this.calculatorFn();
				clearInterval(setCss);
			}.bind(this), 1);
		}
	};

	var showRes_ch = {
	template: `
	<section class="wrap">
		<section class="main container">
			
			<!--标题-->
			<section class="pull-left title">
				<h2>
					我还需要多少 <br class="br" />储蓄...
				</h2>
			</section>
			
			<!--内容-->
			<section class="pull-right content showRes">
				<div class="back_btn">
					<input class="btn" @click="backFn()" type="button" value="< 上一页" />
				</div>
				
				<!--切换语言-->
				<div class="switch_wrap">
					<span @click="backFn()" class="back">
						<i class="glyphicon glyphicon-menu-left"></i>
					</span>
					<label>
						<input type="checkbox"/>
						<i class="switch"></i>
						<router-link to='/showRes'>
							English
						</router-link>
						<router-link to='/showRes_chf'>
							繁
						</router-link>
						<router-link to='/showRes_ch'>
							简
						</router-link>
					</label>
				</div>
				
				<!--移动端显示底部-->
				<div class="mobile_footer">
					<img src="img/mobile_logo.png" />
				</div>
				
				<!--显示计算结果-->
				<div class="showRes_wrap" ref="showRes">
					<p>总教育开支</p>
					<h1 class="cut_off">"港元$"{{cost|thousand}}</h1>
					
					<!--canvas-->
					<div ref="viewWrap" class="view_wrap">
						<canvas ref="view">
							
							<!--显示则不兼容-->
							<span>该浏览器不兼容</span>
						</canvas>
					</div>
					
					<!--切换利率-->
					<div ref="conWrap" class="con_wrap">
						<transition-group
							:enter-active-class='enterClass'
							:leave-active-class='leaveClass'
						>
							<div ref="con" class="con" v-for="(v,i) in jCAGR" v-if="jIndex==i" :key="i">
								<h3>{{v.type}}</h3>
								<p>
									<span>{{v.rate}}</span>
									教育储备以年均复式利率增长
								</p>
							</div>
						</transition-group>
						<div class="index_btn">
							<ol>
								<li ref="indexBtn" @click="indexFn(i)" v-for="(v,i) in jCAGR"></li>
							</ol>
						</div>
						<div @click="prevFn()" class="prev">
							
						</div>
						<div @click="nextFn()" class="next">
							
						</div>
					</div>
					
					<!--更多和咨询-->
					<div class="btn_wrap">
						<router-link to="showRes_ch/ask_ch" class="btn ask">我想查询</router-link>
						<router-link to="showRes_ch/more_ch" class="btn more">教育开支详情</router-link>
					</div>
				</div>
			</section>
		</section>
		
		<!--更多和帮助-->
		<router-view></router-view>
	</section>`,
	name: 'showRes_ch',
	data() {
		return {
			jCAGR: [{
					'type': '非常稳守',
					'rate': '1%'
				},
				{
					'type': '稳守',
					'rate': '2%'
				},
				{
					'type': '均衡',
					'rate': '4%'
				},
				{
					'type': '进取',
					'rate': '5%'
				},
				{
					'type': '积极进取',
					'rate': '7%'
				}
			],
			jIndex: 0,
			enterClass: '',
			leaveClass: '',
			total: {
				'UK': {
					'General': 2106056,
					'Medical': 4779000,
					'Law': 2952749
				},
				'US': {
					'General': 2381284,
					'Medical': 4732148,
					'Law': 3221283
				},
				'USP': {
					'General': 2006303,
					'Medical': 3965942,
					'Law': 2690837
				},
				'Australia': {
					'General': 2120903,
					'Medical': 3032201,
					'Law': 2696599
				},
				'Canada': {
					'General': 1803298,
					'Medical': 2879629,
					'Law': 2392223
				},
				'HongKong': {
					'General': 547368,
					'Medical': 547368,
					'Law': 547368
				}
			},
			rate: [1.01, 1.02, 1.04, 1.05, 1.07],
			cost: null,
			aside: null,
			country: null,
			degree: null,
			depositTime: null,
			willNeed: null,
			ctx: null
		}
	},
	computed: {},
	methods: {
		calculatorFn: function() {
			var wfontSize = window.getComputedStyle(this.$refs.viewWrap).fontSize;
			var wWidth = this.$refs.viewWrap.clientWidth;
			var wHeight = this.$refs.viewWrap.clientHeight;
			this.$refs.view.width = wWidth;
			this.$refs.view.height = wHeight;
			var ctx = this.$refs.view.getContext('2d');
			this.willNeed = Math.ceil(this.cost - parseInt(this.aside) * Math.pow(this.rate[this.jIndex], this.depositTime));
			if(this.willNeed <= 0) {
				this.willNeed = 0;
			}
			var percent = (this.cost - this.willNeed) / this.cost;
			if(percent >= 1) {
				percent = 1;
			}
			ctx.clearRect(0, 0, wWidth, wHeight);
			ctx.beginPath();
			ctx.arc(wWidth * .5, wHeight * .65, wHeight * .6, (5 / 6) * Math.PI, (percent * (2 + 1 / 6 - 5 / 6) + 5 / 6) * Math.PI);
			ctx.lineWidth = 10;
			ctx.strokeStyle = "#013984";
			ctx.stroke();
			ctx.closePath();
			ctx.beginPath();
			ctx.arc(wWidth * .5, wHeight * .65, wHeight * .6, (percent * (2 + 1 / 6 - 5 / 6) + 5 / 6) * Math.PI, (2 + 1 / 6) * Math.PI);
			ctx.lineWidth = 10;
			ctx.strokeStyle = "#59b337";
			ctx.stroke();
			ctx.closePath();
			ctx.beginPath();
			ctx.font = wfontSize + ' SanFrancisco';
			ctx.textAlign = "center";
			ctx.fillText("我还需要", wWidth * .5, wHeight * .6);
			ctx.fillStyle = '#59b337';
			ctx.fillText("港元$" + this.toThousand(this.willNeed), wWidth * .5, wHeight * .8);
			ctx.closePath();
		},
		toThousand: function(val) {
			var val = val + '';
			val = val.split('').reverse().join('').replace(/\w{3}/g, function(a) {
				a = a + ',';
				return a;
			});
			if(val.substr(-1) == ',') {
				val = val.split('');
				val.pop();
				val = val.reverse().join('');
			} else {
				val = val.split('');
				val = val.reverse().join('');
			}
			return val;
		},
		indexFn: function(i) {
			for(var q in this.$refs.indexBtn) {
				this.$refs.indexBtn[q].style.backgroundColor = '#9C9C9C';
			}
			if(this.jIndex > i) {
				this.enterClass = 'animated bounceInLeft';
				this.leaveClass = 'animated bounceOutRight';
			} else {
				this.enterClass = 'animated bounceInRight';
				this.leaveClass = 'animated bounceOutLeft';
			}
			this.jIndex = i;
			this.$refs.indexBtn[i].style.backgroundColor = '#004FB6';
		},
		prevFn: function() {
			this.enterClass = 'animated bounceInLeft';
			this.leaveClass = 'animated bounceOutRight';
			if(this.jIndex <= 0) {
				this.jIndex = this.jCAGR.length - 1;
			} else {
				this.jIndex -= 1;
			}
		},
		nextFn: function() {
			this.enterClass = 'animated bounceInRight';
			this.leaveClass = 'animated bounceOutLeft';
			if(this.jIndex >= this.jCAGR.length - 1) {
				this.jIndex = 0;
			} else {
				this.jIndex += 1;
			}
		},
		backFn: function() {
			router.push({
				path: '/planned_ch'
			});
		}
	},
	watch: {
		jIndex: {
			handler: function(val) {
				for(var q in this.$refs.indexBtn) {
					this.$refs.indexBtn[q].style.backgroundColor = '#9C9C9C';
				}
				this.$refs.indexBtn[val].style.backgroundColor = '#004FB6';
				this.calculatorFn();
			}
		}
	},
	mounted() {
		var userData = window.sessionStorage.getItem('userinf');
		if(userData) {
			userData = JSON.parse(userData);
			this.aside = userData.aside;
			this.country = userData.country;
			this.degree = userData.degree;
			this.cost = this.total[this.country][this.degree];
			this.depositTime = userData.enter - userData.age;
		}
		this.$refs.view.style.opacity = 0;
		var setCss = setInterval(function() {
			this.$refs.conWrap.style.height = this.$refs.con['0'].clientHeight + 'px';
			this.$refs.view.style.opacity = 1;
			this.calculatorFn();
			clearInterval(setCss);
		}.bind(this), 1);
	}
};

	var showRes_chf = {
	template: `
	<section class="wrap">
		<section class="main container">
			
			<!--标题-->
			<section class="pull-left title">
				<h2>
					我還需要多少 <br class="br" />儲蓄...
				</h2>
			</section>
			
			<!--内容-->
			<section class="pull-right content showRes">
				<div class="back_btn">
					<input class="btn" @click="backFn()" type="button" value="< 上一頁" />
				</div>
				
				<!--切换语言-->
				<div class="switch_wrap">
					<span @click="backFn()" class="back">
						<i class="glyphicon glyphicon-menu-left"></i>
					</span>
					<label>
						<input type="checkbox"/>
						<i class="switch"></i>
						<router-link to='/showRes'>
							English
						</router-link>
						<router-link to='/showRes_chf'>
							繁
						</router-link>
						<router-link to='/showRes_ch'>
							简
						</router-link>
					</label>
				</div>
				
				<!--移动端显示底部-->
				<div class="mobile_footer">
					<img src="img/mobile_logo.png" />
				</div>
				
				<!--显示计算结果-->
				<div class="showRes_wrap" ref="showRes">
					<p>總教育開支</p>
					<h1 class="cut_off">"港元$"{{cost|thousand}}</h1>
					
					<!--canvas-->
					<div ref="viewWrap" class="view_wrap">
						<canvas ref="view">
							
							<!--显示则不兼容-->
							<span>該瀏覽器不兼容</span>
						</canvas>
					</div>
					
					<!--切换利率-->
					<div ref="conWrap" class="con_wrap">
						<transition-group
							:enter-active-class='enterClass'
							:leave-active-class='leaveClass'
						>
							<div ref="con" class="con" v-for="(v,i) in jCAGR" v-if="jIndex==i" :key="i">
								<h3>{{v.type}}</h3>
								<p>
									<span>{{v.rate}}</span>
									教育儲備以年均複式利率增長
								</p>
							</div>
						</transition-group>
						<div class="index_btn">
							<ol>
								<li ref="indexBtn" @click="indexFn(i)" v-for="(v,i) in jCAGR"></li>
							</ol>
						</div>
						<div @click="prevFn()" class="prev">
							
						</div>
						<div @click="nextFn()" class="next">
							
						</div>
					</div>
					
					<!--更多和咨詢-->
					<div class="btn_wrap">
						<router-link to="showRes_chf/ask_chf" class="btn ask">我想查詢</router-link>
						<router-link to="showRes_chf/more_chf" class="btn more">教育開支詳情</router-link>
					</div>
				</div>
			</section>
		</section>
		
		<!--更多和帮助-->
		<router-view></router-view>
	</section>`,
	name: 'showRes_chf',
	data() {
		return {
			jCAGR: [{
					'type': '非常穩守',
					'rate': '1%'
				},
				{
					'type': '穩守',
					'rate': '2%'
				},
				{
					'type': '均衡',
					'rate': '4%'
				},
				{
					'type': '進取',
					'rate': '5%'
				},
				{
					'type': '積極進取',
					'rate': '7%'
				}
			],
			jIndex: 0,
			enterClass: '',
			leaveClass: '',
			total: {
				'UK': {
					'General': 2106056,
					'Medical': 4779000,
					'Law': 2952749
				},
				'US': {
					'General': 2381284,
					'Medical': 4732148,
					'Law': 3221283
				},
				'USP': {
					'General': 2006303,
					'Medical': 3965942,
					'Law': 2690837
				},
				'Australia': {
					'General': 2120903,
					'Medical': 3032201,
					'Law': 2696599
				},
				'Canada': {
					'General': 1803298,
					'Medical': 2879629,
					'Law': 2392223
				},
				'HongKong': {
					'General': 547368,
					'Medical': 547368,
					'Law': 547368
				}
			},
			rate: [1.01, 1.02, 1.04, 1.05, 1.07],
			cost: null,
			aside: null,
			country: null,
			degree: null,
			depositTime: null,
			willNeed: null,
			ctx: null
		}
	},
	computed: {},
	methods: {
		calculatorFn: function() {
			var wfontSize = window.getComputedStyle(this.$refs.viewWrap).fontSize;
			var wWidth = this.$refs.viewWrap.clientWidth;
			var wHeight = this.$refs.viewWrap.clientHeight;
			this.$refs.view.width = wWidth;
			this.$refs.view.height = wHeight;
			var ctx = this.$refs.view.getContext('2d');
			this.willNeed = Math.ceil(this.cost - parseInt(this.aside) * Math.pow(this.rate[this.jIndex], this.depositTime));
			if(this.willNeed <= 0) {
				this.willNeed = 0;
			}
			var percent = (this.cost - this.willNeed) / this.cost;
			if(percent >= 1) {
				percent = 1;
			}
			ctx.clearRect(0, 0, wWidth, wHeight);
			ctx.beginPath();
			ctx.arc(wWidth * .5, wHeight * .65, wHeight * .6, (5 / 6) * Math.PI, (percent * (2 + 1 / 6 - 5 / 6) + 5 / 6) * Math.PI);
			ctx.lineWidth = 10;
			ctx.strokeStyle = "#013984";
			ctx.stroke();
			ctx.closePath();
			ctx.beginPath();
			ctx.arc(wWidth * .5, wHeight * .65, wHeight * .6, (percent * (2 + 1 / 6 - 5 / 6) + 5 / 6) * Math.PI, (2 + 1 / 6) * Math.PI);
			ctx.lineWidth = 10;
			ctx.strokeStyle = "#59b337";
			ctx.stroke();
			ctx.closePath();
			ctx.beginPath();
			ctx.font = wfontSize + ' SanFrancisco';
			ctx.textAlign = "center";
			ctx.fillText("我還需要", wWidth * .5, wHeight * .6);
			ctx.fillStyle = '#59b337';
			ctx.fillText("港元$" + this.toThousand(this.willNeed), wWidth * .5, wHeight * .8);
			ctx.closePath();
		},
		toThousand: function(val) {
			var val = val + '';
			val = val.split('').reverse().join('').replace(/\w{3}/g, function(a) {
				a = a + ',';
				return a;
			});
			if(val.substr(-1) == ',') {
				val = val.split('');
				val.pop();
				val = val.reverse().join('');
			} else {
				val = val.split('');
				val = val.reverse().join('');
			}
			return val;
		},
		indexFn: function(i) {
			for(var q in this.$refs.indexBtn) {
				this.$refs.indexBtn[q].style.backgroundColor = '#9C9C9C';
			}
			if(this.jIndex > i) {
				this.enterClass = 'animated bounceInLeft';
				this.leaveClass = 'animated bounceOutRight';
			} else {
				this.enterClass = 'animated bounceInRight';
				this.leaveClass = 'animated bounceOutLeft';
			}
			this.jIndex = i;
			this.$refs.indexBtn[i].style.backgroundColor = '#004FB6';
		},
		prevFn: function() {
			this.enterClass = 'animated bounceInLeft';
			this.leaveClass = 'animated bounceOutRight';
			if(this.jIndex <= 0) {
				this.jIndex = this.jCAGR.length - 1;
			} else {
				this.jIndex -= 1;
			}
		},
		nextFn: function() {
			this.enterClass = 'animated bounceInRight';
			this.leaveClass = 'animated bounceOutLeft';
			if(this.jIndex >= this.jCAGR.length - 1) {
				this.jIndex = 0;
			} else {
				this.jIndex += 1;
			}
		},
		backFn: function() {
			router.push({
				path: '/planned_chf'
			});
		}
	},
	watch: {
		jIndex: {
			handler: function(val) {
				for(var q in this.$refs.indexBtn) {
					this.$refs.indexBtn[q].style.backgroundColor = '#9C9C9C';
				}
				this.$refs.indexBtn[val].style.backgroundColor = '#004FB6';
				this.calculatorFn();
			}
		}
	},
	mounted() {
		var userData = window.sessionStorage.getItem('userinf');
		if(userData) {
			userData = JSON.parse(userData);
			this.aside = userData.aside;
			this.country = userData.country;
			this.degree = userData.degree;
			this.cost = this.total[this.country][this.degree];
			this.depositTime = userData.enter - userData.age;
		}
		this.$refs.view.style.opacity = 0;
		var setCss = setInterval(function() {
			this.$refs.conWrap.style.height = this.$refs.con['0'].clientHeight + 'px';
			this.$refs.view.style.opacity = 1;
			this.calculatorFn();
			clearInterval(setCss);
		}.bind(this), 1);
	}
};

	var ask = {
	template: `
	<section class="screen_overlay">
		<section ref="ask" class="askPage">
			
			<!--标题-->
			
			<h2 class="title">
				<span class="title_txt" ref="title">I want to ask</span>
				<span @click="closeFn()" class="close"></span>
			</h2>
			
			<!--内容-->
			
			<div class="content" ref="content">
				
				<!--成功提示-->
				<div ref="success" class="success">Thank You!<span>We will contact you shortly.</span></div>
				
				<!--表单填写-->
				<div class="pull-left con_part">
					<div class="input-group msg">
						<span class="input-group-addon">Name</span>
						<input class="form-control" type="text" v-model="pName"/>
					</div>
					<div ref="tipsName" class="tips">
						Please enter your name
					</div>
					<div class="input-group msg">
						<span class="input-group-addon">Mobile</span>
						<input class="form-control" maxlength="15" type="tel" v-model="pMobile"/>
					</div>
				</div>
				<div class="pull-right con_part">
					<div class="input-group msg">
						<span class="input-group-addon">Email</span>
						<input class="form-control" type="email" v-model="pEmail"/>
					</div>
					<div ref="tipsEmail" class="tips">
						Please enter your email
					</div>
				</div>
				
				<!--声明书-->
				<div class="ask_txt">
	                <b>Personal Information Collection Statement</b>
	                <p>This Personal Information Collection Statement ("PICS") is made in accordance with the (i) guidelines issued by the Privacy Commissioner for personal data; and (ii) Personal Data (Privacy) Ordinance (Cap. 486) ("PDPO") together with amendments thereto. “Personal Data” means personal data as defined in the PDPO. The PICS sets out the purposes for which your Personal Data will be used following collection, what you are agreeing to with respect to Aviva's use of your Personal Data, and your rights under the PDPO.<br>For the purposes of this PICS, "Aviva", "we", "us" and "our" mean Aviva Life Insurance Company Limited and "Aviva Group" means Aviva Life Insurance Company Limited and its holding companies, branches,subsidiaries, representative offices and affiliates, wherever situated. Affiliates include branches,subsidiaries, representative offices and affiliates of Aviva's holding companies, wherever situated.</p>
	                <div class="ask_mt1">Purposes of Collection<br>
	                    It is voluntary for you to provide the Personal Data per our request. However, if you fail to do so, we may not be able to process your enquiries. The Personal Data/ information collected from you will be used for the following purposes (all purposes particularized in this paragraph shall collectively be referred to as the “Purposes”):<br>
	                    <div class="ask_pl"> a.processing your enquiries and the report of your child’s education cost;<br>
	                                            b.providing you with information and latest updates relating to education;<br>
	                                            c.enabling your participation in education-related activities;<br>
	                                            d.providing you with promotional materials of products and services relating to education or financial services which are offered by Aviva or Aviva Group;<br>
	                                            e.communication with you; and<br>
	                                            f.fulfilling any other purposes directly related to (a) to (e) above.
	                    </div>
	                </div>
	                <div class="ask_mt1">Transfer of Personal Data<br>
	                    The data that you have supplied for the Purposes may be transferred within or outside of Hong Kong to:<br>
	                    <div class="ask_pl">a. other companies within the Aviva Group;<br>
	                                            b. any insurance intermediaries who have an agency or brokerage agreement with Aviva;<br>
	                                            c. partnering institutions;<br>
	                                            d. third party administrators;<br>
	                                            e. professional advisors;<br>
	                                            f. any agents, affiliates, contractors or third party service providers who provides administrative, telecommunications, computer, payment, printing, or other services to Aviva in relation to the operation of the business of Aviva;<br>
	                                            g. researchers;<br>
	                                            h. any persons and corporate entities to whom Aviva is obliged to disclose under the requirement of any law relating to Aviva or any of its affiliates or business partners;<br>
	                                            i. any local or foreign governmental and judicial bodies, legal, regulatory, governmental, tax, law enforcement or other authorities, or financial intermediary, or self-regulatory or industry bodies or associations of financial services providers arising out of or in connection with the disclosure requirements of Aviva and / or companies within the Aviva Group; and<br>
	                                            j. information intelligence provider(s).
	                    </div>
	                </div>
	                <div class="ask_mt1">Access to data<br>
	                    You have a right under the PDPO to make a data access or correction request concerning your Personal Data held by us. You may make such request by writing to:<br>
	                    <div class="ask_pl">Att. Contact Centre Manager of the Customer Services Department<br>
	                                            Aviva Life Insurance Company Limited<br>
	                                            Suite 1701, Cityplaza One, 1111 King's Road, Taikoo Shing Hong Kong
	                    </div>
	                </div>
	                <div class="ask_mt1">Application of the PDPO<br>
	                    Nothing in this PICS shall limit your rights under the PDPO.
	                </div>
				</div>
				
				<!--提示信息-->
				<div ref="tipsAgree" class="ask_tips">
					Please confirm you have read and agree with the “Personal Information Collection Statement”
				</div>
				
				<!--选项-->
				<div class="ask_agree clearfix">
					<p class="check">
						<label>
							<input type="checkbox" v-model="understood"/>
							<i></i>
						</label>
					</p>
					<p class="ask_agree_con">
						<b>
							I have read and understood the Personal Information Collection Statement and agree to be bound by the same.
						</b>
					</p>
				</div>
				<div class="ask_agree clearfix">
					<p class="check">
						<label>
							<input type="checkbox" v-model="pData"/>
							<i></i>
						</label>
					</p>
					<p class="ask_agree_con">
						Aviva Life Insurance Company Limited (“Aviva”) intends to use your name, mobile phone number, and email address for direct marketing of education related insurance / financial products and services. 
						<br />
						<b>I agree to the above use of my Personal Data in direct marketing.</b>
					</p>
				</div>
				
				<!--确认按钮-->
				<button type="button" @click="okFn(understood,pData,pName,pEmail,pMobile)" class="btn">OK</button>
			</div>
		</section>
	</section>`,
	name: 'ask',
	data() {
		return {
			verify: [0, 0, 0],
			understood: false,
			pData: false,
			pName: null,
			pEmail: null,
			pMobile: null
		}
	},
	computed: {},
	methods: {
		closeFn: function() {
			router.back();
		},
		okFn: function(understood, pData, pName, pEmail, pMobile) {
			if(understood) {
				this.$refs.tipsAgree.style.opacity = 0;
				this.verify[0] = 1;
			} else {
				this.$refs.tipsAgree.style.opacity = 1;
				this.verify[0] = 0;
			}
			if(pName) {
				this.$refs.tipsName.style.opacity = 0;
				this.verify[1] = 1;
			} else {
				this.$refs.tipsName.style.opacity = 1;
				this.verify[1] = 0;
			}
			if(pEmail) {
				if(/^[a-zA-Z0-9]\w*@\w+\.\w{2,3}(\.\w{2})?$/.test(pEmail)) {
					this.$refs.tipsEmail.style.opacity = 0;
					this.verify[2] = 1;
				} else {
					this.$refs.tipsEmail.innerHTML = 'Please enter valid email';
					this.$refs.tipsEmail.style.opacity = 1;
					this.verify[2] = 0;
				}
			} else {
				this.$refs.tipsEmail.innerHTML = 'Please enter your email';
				this.$refs.tipsEmail.style.opacity = 1;
				this.verify[2] = 0;
			}
			if(this.verify[0] == 1 & this.verify[1] == 1 & this.verify[2] == 1) {

				/*
				 * 添加页面缓存
				 */

				var userData = window.sessionStorage.getItem('userinf');
				userData = JSON.parse(userData);
				userData.pData = pData;
				userData.pName = pName;
				userData.pEmail = pEmail;
				userData.pMobile = pMobile;
				userData.understood = understood;
				userData = JSON.stringify(userData);
				window.sessionStorage.setItem('userinf', userData);

				this.$refs.title.innerHTML = '';
				this.$refs.content.innerHTML = '';
				this.$refs.content.appendChild(this.$refs.success);
				this.$refs.success.style.display = 'block';
				this.$refs.content.style.padding = 0;
				if(window.screen.width <= 1024) {
					this.$refs.ask.children[0].style.backgroundColor = 'transparent';
				} else {
					this.$refs.success.style.marginTop = (this.$refs.ask.clientHeight - this.$refs.title.parentNode.clientHeight - this.$refs.success.clientHeight) * .5 + 'px';
				}

			}
		}
	},
	watch: {

	},
	mounted() {
		/*
		 * 获取页面缓存
		 */
		var userData = window.sessionStorage.getItem('userinf');
		if(userData) {
			userData = JSON.parse(userData);
			if(userData.pData) {
				this.pData = userData.pData;
			}
			if(userData.pName) {
				this.pName = userData.pName;
			}
			if(userData.pEmail) {
				this.pEmail = userData.pEmail;
			}
			if(userData.pMobile) {
				this.pMobile = userData.pMobile;
			}
			if(userData.understood) {
				this.understood = userData.understood;
			}
		}
	}
};

var ask_ch = {
	template: `
	<section class="screen_overlay">
		<section ref="ask" class="askPage">
			
			<!--标题-->
			
			<h2 class="title">
				<span class="title_txt" ref="title">我想查询</span>
				<span @click="closeFn()" class="close"></span>
			</h2>
			
			<!--内容-->
			
			<div class="content" ref="content">
				
				<!--成功提示-->
				<div ref="success" class="success">谢谢您的查询!<span>我们将尽快联络您。</span></div>
				
				<!--表单填写-->
				<div class="pull-left con_part">
					<div class="input-group msg">
						<span class="input-group-addon">姓名</span>
						<input class="form-control" type="text" v-model="pName"/>
					</div>
					<div ref="tipsName" class="tips">
						请输入姓名
					</div>
					<div class="input-group msg">
						<span class="input-group-addon">手提电话</span>
						<input class="form-control" maxlength="15" type="tel" v-model="pMobile"/>
					</div>
				</div>
				<div class="pull-right con_part">
					<div class="input-group msg">
						<span class="input-group-addon">电邮</span>
						<input class="form-control" type="email" v-model="pEmail"/>
					</div>
					<div ref="tipsEmail" class="tips">
						请输入电邮
					</div>
				</div>
				
				<!--声明书-->
				<div class="ask_txt">
					<b>个人资料收集声明书</b>
					<p>本个人资料收集声明书（「声明书」）是按照（i）由香港个人资料私隐专员公署所发出的指引；及（ii）《个人资料（私隐）条例》（第486 章）（《个人资料（私隐）条例》）及其修订条例而编写的。 「个人资料」是指《个人资料（私隐）条例》所界定的个人资料。本声明书列出向阁下收集个人资料的原因、阁下就Aviva 使用阁下的个人资料而同意的事项及阁下在《个人资料（私隐）条例》下所享有的权利。<br>就本声明书的目的而言，「Aviva」及「本公司」指Aviva Life Insurance Company Limited，而「Aviva Group」指Aviva Life Insurance Company Limited 及其控股公司、分公司、附属公司、代表处及联属公司（不论该公司位于何地）。联属公司包括Aviva 的控股公司之分公司、附属公司、代表处及联属公司（不论该公司位于何地）。</p>
					<div class="ask_mt1">收集资料之目的<br> 阁下可自愿提供所需的个人资料，如阁下未能提供所要求的资料，我们将无法处理阁下的登记及/ 或参与有关活动之申请。向阁下收集的资料将用作以下用途 (在本段详列的所有用途统称为「有关用途」)：<br>
						<div class="ask_pl">a. 处理查询及您子女的教育开支;<br> b. 为阁下提供有关教育的资料及最新资讯;<br> c. 让阁下参与有关教育的活动;<br> d. 向阁下推广本公司及Aviva Group 内其他公司有关教育及保险金融服务的产品与服务;<br> e. 与阁下联络；及<br> f. 达致任何其他有关以上第（a）至（d）项之目的。
						</div>
					</div>
					<div class="ask_mt1">转移个人资料<br> 阁下就有关用途所提供之个人资料或会被转移至香港境内或境外:
						<br>
						<div class="ask_pl">a. 其他Aviva Group 内的公司;<br> b. 任何与Aviva 有代理人或经纪合约的保险中介人;<br> c. 伙伴机构;<br> d. 第三方管理人;<br> e. 专业咨询顾问;<br> f. 任何向Aviva 提供行政、电讯、电脑、付款、印刷或其他服务之代理、联属公司、承包商或第三方服务供应商，而所提供之服务乃与Aviva 之业务经营有关;<br> g. 调查机构/ 人员;<br> h. 根据有关Aviva 或其任何联属公司或商业伙伴之任何法律规定，Aviva 有责任向其披露资料之任何人士及法团实体;<br> i. Aviva 及/ 或Aviva Group 内的公司的披露要求所引起或与之有关之任何本地或外国政府及司法机构、法律、监管、政府、税务、执法机关或其他机构、或金融中介人、或金融服务供应商之自我监管或行业组织或协会；及<br> j. 情报资讯服务供应商.
						</div>
					</div>
					<div class="ask_mt1">查阅资料<br> 阁下有权提出在《个人资料（私隐）条例》下所享有有关查阅或更改由本公司所持有阁下之个人资料的要求。阁下可将有关要求递交至:
						<br>
						<div class="ask_pl">顾客服务部客户中心经理<br> Aviva Life Insurance Company Limited<br> 香港太古城英皇道1111号太古城中心1期1701室
						</div>
					</div>
					<div class="ask_mt1">执行《个人资料（私隐）条例》<br> 本声明书不会限制阁下在《个人资料（私隐）条例》下所享有的权利。
					</div>
				</div>
				
				<!--提示信息-->
				<div ref="tipsAgree" class="ask_tips">
					请确定您已阅读及同意 『个人资料收集声明书』
				</div>
				
				<!--选项-->
				<div class="ask_agree clearfix">
					<p class="check">
						<label>
							<input type="checkbox" v-model="understood"/>
							<i></i>
						</label>
					</p>
					<p class="ask_agree_con">
						<b>
							我已阅读及明白个人资料收集声明书并同意受此约束。
						</b>
					</p>
				</div>
				<div class="ask_agree clearfix">
					<p class="check">
						<label>
							<input type="checkbox" v-model="pData"/>
							<i></i>
						</label>
					</p>
					<p class="ask_agree_con">
						Aviva Life Insurance Company Limited (“Aviva”) 希望透过您的姓名、流动电话号码及电邮地址作直接促销与教育相关的保险/理财产品及服务。
						<br />
						<b>我同意使用我的个人资料于上述的直接促销。</b>
					</p>
				</div>
				
				<!--确认按钮-->
				<button type="button" @click="okFn(understood,pData,pName,pEmail,pMobile)" class="btn">确定</button>
			</div>
		</section>
	</section>`,
	name: 'ask_ch',
	data() {
		return {
			verify: [0, 0, 0],
			understood: false,
			pData: false,
			pName: null,
			pEmail: null,
			pMobile: null
		}
	},
	computed: {},
	methods: {
		closeFn: function() {
			router.back();
		},
		okFn: function(understood, pData, pName, pEmail, pMobile) {
			if(understood) {
				this.$refs.tipsAgree.style.opacity = 0;
				this.verify[0] = 1;
			} else {
				this.$refs.tipsAgree.style.opacity = 1;
				this.verify[0] = 0;
			}
			if(pName) {
				this.$refs.tipsName.style.opacity = 0;
				this.verify[1] = 1;
			} else {
				this.$refs.tipsName.style.opacity = 1;
				this.verify[1] = 0;
			}
			if(pEmail) {
				if(/^[a-zA-Z0-9]\w*@\w+\.\w{2,3}(\.\w{2})?$/.test(pEmail)) {
					this.$refs.tipsEmail.style.opacity = 0;
					this.verify[2] = 1;
				} else {
					this.$refs.tipsEmail.innerHTML = '请输入有效电邮';
					this.$refs.tipsEmail.style.opacity = 1;
					this.verify[2] = 0;
				}
			} else {
				this.$refs.tipsEmail.innerHTML = '请输入电邮';
				this.$refs.tipsEmail.style.opacity = 1;
				this.verify[2] = 0;
			}
			if(this.verify[0] == 1 & this.verify[1] == 1 & this.verify[2] == 1) {

				/*
				 * 添加页面缓存
				 */

				var userData = window.sessionStorage.getItem('userinf');
				userData = JSON.parse(userData);
				userData.pData = pData;
				userData.pName = pName;
				userData.pEmail = pEmail;
				userData.pMobile = pMobile;
				userData.understood = understood;
				userData = JSON.stringify(userData);
				window.sessionStorage.setItem('userinf', userData);

				this.$refs.title.innerHTML = '';
				this.$refs.content.innerHTML = '';
				this.$refs.content.appendChild(this.$refs.success);
				this.$refs.success.style.display = 'block';
				this.$refs.content.style.padding = 0;
				if(window.screen.width <= 1024) {
					this.$refs.ask.children[0].style.backgroundColor = 'transparent';
				} else {
					this.$refs.success.style.marginTop = (this.$refs.ask.clientHeight - this.$refs.title.parentNode.clientHeight - this.$refs.success.clientHeight) * .5 + 'px';
				}

			}
		}
	},
	watch: {

	},
	mounted() {
		/*
		 * 获取页面缓存
		 */
		var userData = window.sessionStorage.getItem('userinf');
		if(userData) {
			userData = JSON.parse(userData);
			if(userData.pData) {
				this.pData = userData.pData;
			}
			if(userData.pName) {
				this.pName = userData.pName;
			}
			if(userData.pEmail) {
				this.pEmail = userData.pEmail;
			}
			if(userData.pMobile) {
				this.pMobile = userData.pMobile;
			}
			if(userData.understood) {
				this.understood = userData.understood;
			}
		}
	}
};

var ask_chf = {
	template: `
	<section class="screen_overlay">
		<section ref="ask" class="askPage">
			
			<!--标题-->
			
			<h2 class="title">
				<span class="title_txt" ref="title">我想查詢</span>
				<span @click="closeFn()" class="close"></span>
			</h2>
			
			<!--内容-->
			
			<div class="content" ref="content">
				
				<!--成功提示-->
				<div ref="success" class="success">謝謝您的查詢!<span>我們將盡快聯絡您。</span></div>
				
				<!--表单填写-->
				<div class="pull-left con_part">
					<div class="input-group msg">
						<span class="input-group-addon">姓名</span>
						<input class="form-control" type="text" v-model="pName"/>
					</div>
					<div ref="tipsName" class="tips">
						請輸入姓名
					</div>
					<div class="input-group msg">
						<span class="input-group-addon">手提電話</span>
						<input class="form-control" maxlength="15" type="tel" v-model="pMobile"/>
					</div>
				</div>
				<div class="pull-right con_part">
					<div class="input-group msg">
						<span class="input-group-addon">電郵</span>
						<input class="form-control" type="email" v-model="pEmail"/>
					</div>
					<div ref="tipsEmail" class="tips">
						請輸入電郵
					</div>
				</div>
				
				<!--聲明書-->
				<div class="ask_txt">
	                <b>個人資料收集聲明書</b>
					<p>本個人資料收集聲明書（「聲明書」）是按照（i）由香港個人資料私隱專員公署所發出的指引；及（ii）《個人資料（私隱）條例》（第486 章）（《個人資料（私隱）條例》）及其修訂條例而編寫的。「個人資料」是指《個人資料（私隱）條例》所界定的個人資料。本聲明書列出向閣下收集個人資料的原因、閣下就Aviva 使用閣下的個人資料而同意的事項及閣下在《個人資料（私隱）條例》下所享有的權利。<br>就本聲明書的目的而言，「Aviva」及「本公司」指Aviva Life Insurance Company Limited，而「Aviva Group」指Aviva Life Insurance Company Limited 及其控股公司、分公司、附屬公司、代表處及聯屬公司（不論該公司位於何地）。聯屬公司包括Aviva 的控股公司之分公司、附屬公司、代表處及聯屬公司（不論該公司位於何地）。</p>
					<div class="ask_mt1">收集資料之目的<br> 閣下可自願提供所需的個人資料，如閣下未能提供所要求的資料，我們將無法處理閣下的登記及/ 或參與有關活動之申請。向閣下收集的資料將用作以下用途 (在本段詳列的所有用途統稱為「有關用途」)：<br>
						<div class="ask_pl">a. 處理查詢及您子女的教育開支;<br> b. 為閣下提供有關教育的資料及最新資訊;<br> c. 讓閣下參與有關教育的活動;<br> d. 向閣下推廣本公司及Aviva Group 內其他公司有關教育及保險金融服務的產品與服務;<br> e. 與閣下聯絡；及<br> f. 達致任何其他有關以上第（a）至（d）項之目的。
						</div>
					</div>
					<div class="ask_mt1">轉移個人資料<br> 閣下就有關用途所提供之個人資料或會被轉移至香港境內或境外:
						<br>
						<div class="ask_pl">a. 其他Aviva Group 內的公司;<br> b. 任何與Aviva有代理人或經紀合約的保險中介人;<br> c. 夥伴機構;<br> d. 第三方管理人;<br> e. 專業諮詢顧問;<br> f. 任何向Aviva 提供行政、電訊、電腦、付款、印刷或其他服務之代理、聯屬公司、承包商或第三方服務供應商，而所提供之服務乃與Aviva 之業務經營有關;<br> g. 調查機構/人員;<br> h. 根據有關Aviva 或其任何聯屬公司或商業夥伴之任何法律規定，Aviva 有責任向其披露資料之任何人士及法團實體;<br> i. Aviva 及/ 或Aviva Group 內的公司的披露要求所引起或與之有關之任何本地或外國政府及司法機構、法律、監管、政府、稅務、執法機關或其他機構、或金融中介人、或金融服務供應商之自我監管或行業組織或協會；及<br> j. 情報資訊服務供應商.
						</div>
					</div>
					<div class="ask_mt1">查閱資料<br> 閣下有權提出在《個人資料（私隱）條例》下所享有有關查閱或更改由本公司所持有閣下之個人資料的要求。閣下可將有關要求遞交至:
						<br>
						<div class="ask_pl">顧客服務部客戶中心經理<br> Aviva Life Insurance Company Limited<br> 香港太古城英皇道1111號太古城中心1期1701室
						</div>
					</div>
					<div class="ask_mt1">執行《個人資料（私隱）條例》<br> 本聲明書不會限制閣下在《個人資料（私隱）條例》下所享有的權利。
					</div>
				</div>
				
				<!--提示信息-->
				<div ref="tipsAgree" class="ask_tips">
					請確定您已閱讀及同意『個人資料收集聲明書』
				</div>
				
				<!--选项-->
				<div class="ask_agree clearfix">
					<p class="check">
						<label>
							<input type="checkbox" v-model="understood"/>
							<i></i>
						</label>
					</p>
					<p class="ask_agree_con">
						<b>
							我已閱讀及明白個人資料收集聲明書並同意受此約束。
						</b>
					</p>
				</div>
				<div class="ask_agree clearfix">
					<p class="check">
						<label>
							<input type="checkbox" v-model="pData"/>
							<i></i>
						</label>
					</p>
					<p class="ask_agree_con">
						Aviva Life Insurance Company Limited (“Aviva”) 希望透過您的姓名、流動電話號碼及電郵地址作直接促銷與教育相關的保險/ 理財產品及服務。
						<br />
						<b>我同意使用我的個人資料於上述的直接促銷。</b>
					</p>
				</div>
				
				<!--确认按钮-->
				<button type="button" @click="okFn(understood,pData,pName,pEmail,pMobile)" class="btn">確定</button>
			</div>
		</section>
	</section>`,
	name: 'ask_chf',
	data() {
		return {
			verify: [0, 0, 0],
			understood: false,
			pData: false,
			pName: null,
			pEmail: null,
			pMobile: null
		}
	},
	computed: {},
	methods: {
		closeFn: function() {
			router.back();
		},
		okFn: function(understood, pData, pName, pEmail, pMobile) {
			if(understood) {
				this.$refs.tipsAgree.style.opacity = 0;
				this.verify[0] = 1;
			} else {
				this.$refs.tipsAgree.style.opacity = 1;
				this.verify[0] = 0;
			}
			if(pName) {
				this.$refs.tipsName.style.opacity = 0;
				this.verify[1] = 1;
			} else {
				this.$refs.tipsName.style.opacity = 1;
				this.verify[1] = 0;
			}
			if(pEmail) {
				if(/^[a-zA-Z0-9]\w*@\w+\.\w{2,3}(\.\w{2})?$/.test(pEmail)) {
					this.$refs.tipsEmail.style.opacity = 0;
					this.verify[2] = 1;
				} else {
					this.$refs.tipsEmail.innerHTML = '請輸入有效電郵';
					this.$refs.tipsEmail.style.opacity = 1;
					this.verify[2] = 0;
				}
			} else {
				this.$refs.tipsEmail.innerHTML = '請輸入電郵';
				this.$refs.tipsEmail.style.opacity = 1;
				this.verify[2] = 0;
			}
			if(this.verify[0] == 1 & this.verify[1] == 1 & this.verify[2] == 1) {

				/*
				 * 添加页面缓存
				 */

				var userData = window.sessionStorage.getItem('userinf');
				userData = JSON.parse(userData);
				userData.pData = pData;
				userData.pName = pName;
				userData.pEmail = pEmail;
				userData.pMobile = pMobile;
				userData.understood = understood;
				userData = JSON.stringify(userData);
				window.sessionStorage.setItem('userinf', userData);

				this.$refs.title.innerHTML = '';
				this.$refs.content.innerHTML = '';
				this.$refs.content.appendChild(this.$refs.success);
				this.$refs.success.style.display = 'block';
				this.$refs.content.style.padding = 0;
				if(window.screen.width <= 1024) {
					this.$refs.ask.children[0].style.backgroundColor = 'transparent';
				} else {
					this.$refs.success.style.marginTop = (this.$refs.ask.clientHeight - this.$refs.title.parentNode.clientHeight - this.$refs.success.clientHeight) * .5 + 'px';
				}

			}
		}
	},
	watch: {

	},
	mounted() {
		/*
		 * 获取页面缓存
		 */
		var userData = window.sessionStorage.getItem('userinf');
		if(userData) {
			userData = JSON.parse(userData);
			if(userData.pData) {
				this.pData = userData.pData;
			}
			if(userData.pName) {
				this.pName = userData.pName;
			}
			if(userData.pEmail) {
				this.pEmail = userData.pEmail;
			}
			if(userData.pMobile) {
				this.pMobile = userData.pMobile;
			}
			if(userData.understood) {
				this.understood = userData.understood;
			}
		}
	}
};

var more = {
	template: `
	<section class="screen_overlay">
		<section ref="more" class="more">
			
			<!--标题-->
			<h2 ref="title" class="title">
				<span>Education costs information</span>
				<span @click="closeFn()" class="close"></span>
			</h2>
			
			<!--内容-->
			<div class="content">
				<transition
					:enter-active-class='enterClass'
					:leave-active-class='leaveClass'
				>
					<router-view></router-view>
				</transition>
				<div class="prev" @click="prevFn(sIndex)">
					
				</div>
				<div class="next" @click="nextFn(sIndex)">
					
				</div>
			</div>
			
			<!--控制按钮-->
			<div class="index_btn">
				<ol ref="indexBtnWrap">
					<li ref="indexBtn" @click="indexFn(i)" v-for="(v,i) in 5"></li>
				</ol>
			</div>
		</section>
	</section>`,
	name: 'more',
	data() {
		return {
			jIndex: 0,
			enterClass: '',
			leaveClass: '',
			router: [
				'/showRes/more/calculation',
				'/showRes/more/clude',
				'/showRes/more/tuitionFee',
				'/showRes/more/costOfLiving',
				'/showRes/more/source'
			],
			sIndex: 0
		}
	},
	computed: {},
	methods: {
		indexFn: function(i) {
			if(this.sIndex > i) {
				this.enterClass = 'animated zoomInLeft';
				this.leaveClass = 'animated zoomOutRight';
			} else {
				this.enterClass = 'animated zoomInRight';
				this.leaveClass = 'animated zoomOutLeft';
			}
			this.sIndex = i;
		},
		prevFn: function(sIndex) {
			this.enterClass = 'animated zoomInLeft';
			this.leaveClass = 'animated zoomOutRight';
			if(sIndex <= 0) {
				this.sIndex = this.router.length - 1;
			} else {
				this.sIndex = sIndex - 1
			}
		},
		nextFn: function(sIndex) {
			this.enterClass = 'animated zoomInRight';
			this.leaveClass = 'animated zoomOutLeft';
			if(sIndex >= this.router.length - 1) {
				this.sIndex = 0;
			} else {
				this.sIndex = sIndex + 1
			}
		},
		closeFn: function() {
			router.back();
		}
	},
	watch: {
		sIndex: {
			handler: function(val) {
				router.replace({
					path: this.router[val]
				});
				for(var q in this.$refs.indexBtn) {
					this.$refs.indexBtn[q].style.backgroundColor = '#9C9C9C';
				}
				this.$refs.indexBtn[val].style.backgroundColor = '#ffffff';

				/*
				 * 将页码存储在页面缓存
				 */
				var userData = window.sessionStorage.getItem('userinf');
				userData = JSON.parse(userData);
				userData.routerPage = val;
				userData = JSON.stringify(userData);
				window.sessionStorage.setItem('userinf', userData);
			}
		}
	},
	beforeMount() {

		/*
		 * 获取页面缓存
		 */

		var userData = window.sessionStorage.getItem('userinf');
		userData = JSON.parse(userData);
		if(userData.routerPage) {
			this.sIndex = userData.routerPage;
		}
	},
	mounted() {
		router.replace({
			path: this.router[this.sIndex]
		});
		this.$refs.title.style.lineHeight = this.$refs.title.clientHeight + 'px';
		this.$refs.indexBtnWrap.style.lineHeight = this.$refs.indexBtnWrap.clientHeight + 'px';
	}
};

var more_ch = {
	template: `
	<section class="screen_overlay">
		<section ref="more" class="more">
			
			<!--标题-->
			<h2 ref="title" class="title">
				<span>教育开支详情</span>
				<span @click="closeFn()" class="close"></span>
			</h2>
			
			<!--内容-->
			<div class="content">
				<transition
					:enter-active-class='enterClass'
					:leave-active-class='leaveClass'
				>
					<router-view></router-view>
				</transition>
				<div class="prev" @click="prevFn(sIndex)">
					
				</div>
				<div class="next" @click="nextFn(sIndex)">
					
				</div>
			</div>
			
			<!--控制按钮-->
			<div class="index_btn">
				<ol ref="indexBtnWrap">
					<li ref="indexBtn" @click="indexFn(i)" v-for="(v,i) in 5"></li>
				</ol>
			</div>
		</section>
	</section>`,
	name: 'more_ch',
	data() {
		return {
			jIndex: 0,
			enterClass: '',
			leaveClass: '',
			router: [
				'/showRes_ch/more_ch/calculation_ch',
				'/showRes_ch/more_ch/clude_ch',
				'/showRes_ch/more_ch/tuitionFee_ch',
				'/showRes_ch/more_ch/costOfLiving_ch',
				'/showRes_ch/more_ch/source_ch'
			],
			sIndex: 0
		}
	},
	computed: {},
	methods: {
		indexFn: function(i) {
			if(this.sIndex > i) {
				this.enterClass = 'animated zoomInLeft';
				this.leaveClass = 'animated zoomOutRight';
			} else {
				this.enterClass = 'animated zoomInRight';
				this.leaveClass = 'animated zoomOutLeft';
			}
			this.sIndex = i;
		},
		prevFn: function(sIndex) {
			this.enterClass = 'animated zoomInLeft';
			this.leaveClass = 'animated zoomOutRight';
			if(sIndex <= 0) {
				this.sIndex = this.router.length - 1;
			} else {
				this.sIndex = sIndex - 1
			}
		},
		nextFn: function(sIndex) {
			this.enterClass = 'animated zoomInRight';
			this.leaveClass = 'animated zoomOutLeft';
			if(sIndex >= this.router.length - 1) {
				this.sIndex = 0;
			} else {
				this.sIndex = sIndex + 1
			}
		},
		closeFn: function() {
			router.back();
		}
	},
	watch: {
		sIndex: {
			handler: function(val) {
				router.replace({
					path: this.router[val]
				});
				for(var q in this.$refs.indexBtn) {
					this.$refs.indexBtn[q].style.backgroundColor = '#9C9C9C';
				}
				this.$refs.indexBtn[val].style.backgroundColor = '#ffffff';

				/*
				 * 将页码存储在页面缓存
				 */
				var userData = window.sessionStorage.getItem('userinf');
				userData = JSON.parse(userData);
				userData.routerPage = val;
				userData = JSON.stringify(userData);
				window.sessionStorage.setItem('userinf', userData);
			}
		}
	},
	beforeMount() {

		/*
		 * 获取页面缓存
		 */

		var userData = window.sessionStorage.getItem('userinf');
		userData = JSON.parse(userData);
		if(userData.routerPage) {
			this.sIndex = userData.routerPage;
		}
	},
	mounted() {
		router.replace({
			path: this.router[this.sIndex]
		});
		this.$refs.title.style.lineHeight = this.$refs.title.clientHeight + 'px';
		this.$refs.indexBtnWrap.style.lineHeight = this.$refs.indexBtnWrap.clientHeight + 'px';
	}
};

var more_chf = {
	template: `
	<section class="screen_overlay">
		<section ref="more" class="more">
			
			<!--标题-->
			<h2 ref="title" class="title">
				<span>教育開支詳情</span>
				<span @click="closeFn()" class="close"></span>
			</h2>
			
			<!--内容-->
			<div class="content">
				<transition
					:enter-active-class='enterClass'
					:leave-active-class='leaveClass'
				>
					<router-view></router-view>
				</transition>
				<div class="prev" @click="prevFn(sIndex)">
					
				</div>
				<div class="next" @click="nextFn(sIndex)">
					
				</div>
			</div>
			
			<!--控制按钮-->
			<div class="index_btn">
				<ol ref="indexBtnWrap">
					<li ref="indexBtn" @click="indexFn(i)" v-for="(v,i) in 5"></li>
				</ol>
			</div>
		</section>
	</section>`,
	name: 'more_chf',
	data() {
		return {
			jIndex: 0,
			enterClass: '',
			leaveClass: '',
			router: [
				'/showRes_chf/more_chf/calculation_chf',
				'/showRes_chf/more_chf/clude_chf',
				'/showRes_chf/more_chf/tuitionFee_chf',
				'/showRes_chf/more_chf/costOfLiving_chf',
				'/showRes_chf/more_chf/source_chf'
			],
			sIndex: 0
		}
	},
	computed: {},
	methods: {
		indexFn: function(i) {
			if(this.sIndex > i) {
				this.enterClass = 'animated zoomInLeft';
				this.leaveClass = 'animated zoomOutRight';
			} else {
				this.enterClass = 'animated zoomInRight';
				this.leaveClass = 'animated zoomOutLeft';
			}
			this.sIndex = i;
		},
		prevFn: function(sIndex) {
			this.enterClass = 'animated zoomInLeft';
			this.leaveClass = 'animated zoomOutRight';
			if(sIndex <= 0) {
				this.sIndex = this.router.length - 1;
			} else {
				this.sIndex = sIndex - 1
			}
		},
		nextFn: function(sIndex) {
			this.enterClass = 'animated zoomInRight';
			this.leaveClass = 'animated zoomOutLeft';
			if(sIndex >= this.router.length - 1) {
				this.sIndex = 0;
			} else {
				this.sIndex = sIndex + 1
			}
		},
		closeFn: function() {
			router.back();
		}
	},
	watch: {
		sIndex: {
			handler: function(val) {
				router.replace({
					path: this.router[val]
				});
				for(var q in this.$refs.indexBtn) {
					this.$refs.indexBtn[q].style.backgroundColor = '#9C9C9C';
				}
				this.$refs.indexBtn[val].style.backgroundColor = '#ffffff';

				/*
				 * 将页码存储在页面缓存
				 */
				var userData = window.sessionStorage.getItem('userinf');
				userData = JSON.parse(userData);
				userData.routerPage = val;
				userData = JSON.stringify(userData);
				window.sessionStorage.setItem('userinf', userData);
			}
		}
	},
	beforeMount() {

		/*
		 * 获取页面缓存
		 */

		var userData = window.sessionStorage.getItem('userinf');
		userData = JSON.parse(userData);
		if(userData.routerPage) {
			this.sIndex = userData.routerPage;
		}
	},
	mounted() {
		router.replace({
			path: this.router[this.sIndex]
		});
		this.$refs.title.style.lineHeight = this.$refs.title.clientHeight + 'px';
		this.$refs.indexBtnWrap.style.lineHeight = this.$refs.indexBtnWrap.clientHeight + 'px';
	}
};


var calculation = {
	template: `
	<section class="calculation">
		
		<!--标题-->
		<h4>Calculation formula</h4>
		
		<!--内容-->
		<div class="calculation_txt">
			<p>
				<span class="tag">United Kingdom</span>
				<br>
				<b>Education cost required<i class="under">after t years</i>=</b>Min[ (Average tuition fee for UK <i class="under">now</i> ) &times; (1 + Inflation rate for UK <i class="under">tuition fee</i>) <i class="on">t</i> , (Average tuition fee for US <i class="under">now</i> ) &times; (1 + Inflation rate for US <i class="under">tuition fee</i>) <i class="on">t</i> ] + (Average living expenses for UK <i class="under">now</i> + Average room &amp; board for UK <i class="under">now</i> + Average airfares for UK <i class="under">now</i> ) &times; (1 + Inflation rate for UK <i class="under">cost of living</i>) <i class="on">t</i>
			</p>
			<p>
				<span class="tag">United States, Australia, Canada and Hong Kong</span>
				<br>
				<b>Education cost required <i class="under">after t years</i> =</b> (Average tuition fee <i class="under">now</i> ) &times; (1 + Inflation rate <i class="under">tuition fee</i>) <i class="on">t</i> + (Average living expenses <i class="under">now</i> + Average room &amp; board <i class="under">now</i> + Average airfares <i class="on">*</i> <i class="under">now</i> ) &times; (1 + Inflation rate <i class="under">living expense</i>) <i class="on">t</i>
			</p>
			<p>*Excluding Hong Kong</p>
		</div>
		<div class="saving formula">
			<span class="blue">Savings after t years = </span>Savings now &times; (1 + Asset growth rate)<i class="on">t</i>
		</div>
		<div class="balance formula">
			<span class="green">Required Balance = </span>Education cost required after t years - <span class="blue">Savings after t years</span>
		</div>
	</section>`,
	name: 'calculation',
	data() {
		return {}
	},
	computed: {},
	methods: {},
	watch: {},
	mounted() {}
};

var calculation_ch = {
	template: `
	<section class="calculation">
		
		<!--标题-->
		<h4>计算公式</h4>
		
		<!--内容-->
		<div class="calculation_txt">
			<p>
				<span class="tag">英国</span>
				<br>
				<b>t 年后的教育开支 =</b> 两者较低 [ (英国现时平均学费) &times; (1 + 英国学费通胀率) <i class="on">t</i> ,
(美国现时平均学费) &times; (1 + 美国学费通胀率) <i class="on">t</i> ] +
(英国现时平均生活开支 + 英国现时平均住宿 + 英国现时平均来回机票) &times; (1 + 英国生活成本通胀率) <i class="on">t</i>
			</p>
			<p>
				<span class="tag">美国/澳洲/加拿大/香港</span>
				<br>
				<b>t 年后的教育开支 = </b> (现时平均学费) &times; (1 + 学费通胀率) <i class="on">t</i> + (现时平均生活开支 + 现时平均住宿 + 现时平均来回机票*) &times; (1 + 生活成本通胀率) <i class="on">t</i>
			</p>
			<p>*香港除外</p>
		</div>
		<div class="saving formula">
			<span class="blue">t 年后的储备 = </span> 现时储备 &times; (1 + 增长率) <i class="on">t</i>
		</div>
		<div class="balance formula">
			<span class="green">还需要多少储备 = </span> t 年后的教育开支 - <span class="blue">t 年后的储备</span>
		</div>
	</section>`,
	name: 'calculation_ch',
	data() {
		return {}
	},
	computed: {},
	methods: {},
	watch: {},
	mounted() {}
};

var calculation_chf = {
	template: `
	<section class="calculation">
		
		<!--标题-->
		<h4>計算公式</h4>
		
		<!--内容-->
		<div class="calculation_txt">
			<p>
				<span class="tag">英國</span>
				<br>
				<b>t 年後的教育開支 = </b>兩者較低 [ (英國現時平均學費) &times; (1 + 英國學費通脹率) <i class="on">t</i> , (美國現時平均學費) &times; (1 +美國學費通脹率) <i class="on">t</i> ] +
(英國現時平均生活開支 + 英國現時平均住宿 + 英國現時平均來回機票) &times; (1 + 英國生活成本通脹率) <i class="on">t</i>
			</p>
			<p>
				<span class="tag">美國/澳洲/加拿大/香港</span>
				<br>
				<b>t 年後的教育開支 = </b> (現時平均學費) &times; (1 + 學費通脹率) <i class="on">t</i> + (現時平均生活開支 + 現時平均住宿 + 現時平均來回機票*) &times; (1 + 生活成本通脹率) <i class="on">t</i>
			</p>
			<p>*香港除外</p>
		</div>
		<div class="saving formula">
			<span class="blue">t 年後的儲備 = </span> 現時儲備 &times; (1 + 增長率) <i class="on">t</i>
		</div>
		<div class="balance formula">
			<span class="green">還需要多少儲備 = </span> t 年後的教育開支 - <span class="blue">t 年後的儲備</span>
		</div>
	</section>`,
	name: 'calculation_chf',
	data() {
		return {}
	},
	computed: {},
	methods: {},
	watch: {},
	mounted() {}
};

var clude = {
	template: `
	<section class="clude">
		<div ref="include" class="include clude_con">
			
			<!--标题-->
			<div ref="title" class="clude_title">
				<h5>Education costs breakdown</h5>
				<h2>include</h2>
			</div>
			
			<!--canvas-->
			<div ref="viewWrap" class="clude_view">
				<canvas ref="view">
					
					<!--显示则不兼容-->
					<span>This browser is not compatible</span>
				</canvas>
			</div>
		</div>
		<div class="exclude clude_con">
			
			<!--标题-->
			<div class="clude_title">
				<h5>Education costs breakdown</h5>
				<h2>exclude</h2>
			</div>
			
			<!--内容-->
			<div ref="exclude" class="clude_ex">
				<p class="entertainment">
					Entertainment
				</p>
				<p class="clothes">
					Clothes
				</p>
			</div>
		</div>
	</section>`,
	name: 'clude',
		data() {
			return {
				country:null,
				degree:null,
				pieChartTmp:null
			}
		},
		computed: {
		},
		methods: {
		},
		watch: {
		},
		mounted() {
			this.$refs.viewWrap.style.opacity = 0;
			this.$refs.exclude.style.opacity = 0;
			var setCss = setInterval(function() {
				/*
				 * 获取页面缓存
				 */
				var userData=window.sessionStorage.getItem('userinf');
				if (userData) {
					userData=JSON.parse(userData);
					this.country=userData.country;
					this.degree=userData.degree;
				}
				var pieChart=window.sessionStorage.getItem('pieChart');
				pieChart=JSON.parse(pieChart);
				this.pieChartTmp=pieChart[this.country][this.degree];
				
				if (window.screen.width<=1024) {
					this.$refs.viewWrap.style.height=this.$refs.include.clientHeight-this.$refs.title.clientHeight+'px';
				}else{
					this.$refs.viewWrap.style.height=this.$refs.include.clientHeight-this.$refs.title.clientHeight+'px';					
					this.$refs.exclude.style.height=this.$refs.include.clientHeight-this.$refs.title.clientHeight+'px';
				}
				var wfontSize=window.getComputedStyle(this.$refs.viewWrap).fontSize;
				var wWidth=this.$refs.viewWrap.clientWidth;
				var wHeight=this.$refs.viewWrap.clientHeight;
				this.$refs.view.width=wWidth;
				this.$refs.view.height=wHeight;
				var ctx=this.$refs.view.getContext('2d');
				ctx.clearRect(0,0,wWidth,wHeight);
				var startChart=0;
				var endChart=null;
				for(var i in this.pieChartTmp){
			        endChart=this.pieChartTmp[i].per*2*Math.PI + startChart;
			        ctx.fillStyle=this.pieChartTmp[i].color;
			        ctx.beginPath();
			        ctx.moveTo(wWidth*.5,wHeight*.5);
			        ctx.arc(wWidth*.5,wHeight*.5,wHeight*.2,startChart,endChart,false);
			        ctx.fill();
					ctx.closePath();
			        ctx.beginPath();
			        ctx.moveTo(wWidth*.5,wHeight*.5);
			        ctx.lineTo(
			        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.25,
			        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.25
			        );
			        ctx.strokeStyle=this.pieChartTmp[i].color;
			        ctx.lineWidth=2;
			        ctx.stroke();
			        if ((wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26)>=wWidth*.5) {
						ctx.textAlign="left";
			        } else{
						ctx.textAlign="right";
			        }
			        var txtLH=null;
			        if ((wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26)>=wHeight*.5) {
						ctx.textBaseline="top";
						txtLH=parseInt(wfontSize);
			        } else{
						ctx.textBaseline="bottom";
						txtLH=parseInt(wfontSize)*2;
			        }
					ctx.font=parseInt(wfontSize)*1.8+'px SanFrancisco';
			        ctx.fillText(
			        	(this.pieChartTmp[i].per*100).toFixed(1)+'%',
			        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26,
			        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26
			        );
					ctx.font=wfontSize+' SanFrancisco';
			        ctx.fillStyle="#FFFFFF";
			        if (this.pieChartTmp[i].remark) {
						ctx.textAlign="center";
			        	ctx.fillText(
				        	this.pieChartTmp[i].remark,
				        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26,
				        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26-txtLH
				        );
			        	ctx.fillText(
				        	this.pieChartTmp[i].content,
				        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26,
				        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26-txtLH*1.5
				        );
			        }else{
			        	ctx.fillText(
				        	this.pieChartTmp[i].content,
				        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26,
				        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26-txtLH
				        );
			        }
					ctx.closePath();
			        startChart=endChart;
			    }
				this.$refs.viewWrap.style.opacity = 1;
				this.$refs.exclude.style.opacity = 1;
				clearInterval(setCss);
			}.bind(this), 1);
		}
};

var clude_ch = {
	template: `
	<section class="clude">
		<div ref="include" class="include clude_con">
			
			<!--标题-->
			<div ref="title" class="clude_title">
				<h5>教育开支</h5>
				<h2>包括</h2>
			</div>
			
			<!--canvas-->
			<div ref="viewWrap" class="clude_view">
				<canvas ref="view">
					
					<!--显示则不兼容-->
					<span>该浏览器不兼容</span>
				</canvas>
			</div>
		</div>
		<div class="exclude clude_con">
			
			<!--标题-->
			<div class="clude_title">
				<h5>教育开支</h5>
				<h2>不包括</h2>
			</div>
			
			<!--内容-->
			<div ref="exclude" class="clude_ex">
				<p class="entertainment">
					消遣
				</p>
				<p class="clothes">
					衣服
				</p>
			</div>
		</div>
	</section>`,
	name: 'clude_ch',
		data() {
			return {
				country:null,
				degree:null,
				pieChartTmp:null
			}
		},
		computed: {
		},
		methods: {
		},
		watch: {
		},
		mounted() {
			this.$refs.viewWrap.style.opacity = 0;
			this.$refs.exclude.style.opacity = 0;
			var setCss = setInterval(function() {
				/*
				 * 获取页面缓存
				 */
				var userData=window.sessionStorage.getItem('userinf');
				if (userData) {
					userData=JSON.parse(userData);
					this.country=userData.country;
					this.degree=userData.degree;
				}
				var pieChartCh=window.sessionStorage.getItem('pieChartCh');
				pieChartCh=JSON.parse(pieChartCh);
				this.pieChartTmp=pieChartCh[this.country][this.degree];
				
				if (window.screen.width<=1024) {
					this.$refs.viewWrap.style.height=this.$refs.include.clientHeight-this.$refs.title.clientHeight+'px';
				}else{
					this.$refs.viewWrap.style.height=this.$refs.include.clientHeight-this.$refs.title.clientHeight+'px';					
					this.$refs.exclude.style.height=this.$refs.include.clientHeight-this.$refs.title.clientHeight+'px';
				}
				var wfontSize=window.getComputedStyle(this.$refs.viewWrap).fontSize;
				var wWidth=this.$refs.viewWrap.clientWidth;
				var wHeight=this.$refs.viewWrap.clientHeight;
				this.$refs.view.width=wWidth;
				this.$refs.view.height=wHeight;
				var ctx=this.$refs.view.getContext('2d');
				ctx.clearRect(0,0,wWidth,wHeight);
				var startChart=0;
				var endChart=null;
				for(var i in this.pieChartTmp){
			        endChart=this.pieChartTmp[i].per*2*Math.PI + startChart;
			        ctx.fillStyle=this.pieChartTmp[i].color;
			        ctx.beginPath();
			        ctx.moveTo(wWidth*.5,wHeight*.5);
			        ctx.arc(wWidth*.5,wHeight*.5,wHeight*.2,startChart,endChart,false);
			        ctx.fill();
					ctx.closePath();
			        ctx.beginPath();
			        ctx.moveTo(wWidth*.5,wHeight*.5);
			        ctx.lineTo(
			        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.25,
			        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.25
			        );
			        ctx.strokeStyle=this.pieChartTmp[i].color;
			        ctx.lineWidth=2;
			        ctx.stroke();
			        if ((wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26)>=wWidth*.5) {
						ctx.textAlign="left";
			        } else{
						ctx.textAlign="right";
			        }
			        var txtLH=null;
			        if ((wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26)>=wHeight*.5) {
						ctx.textBaseline="top";
						txtLH=parseInt(wfontSize);
			        } else{
						ctx.textBaseline="bottom";
						txtLH=parseInt(wfontSize)*2;
			        }
					ctx.font=parseInt(wfontSize)*1.8+'px SanFrancisco';
			        ctx.fillText(
			        	(this.pieChartTmp[i].per*100).toFixed(1)+'%',
			        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26,
			        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26
			        );
					ctx.font=wfontSize+' SanFrancisco';
			        ctx.fillStyle="#FFFFFF";
			        if (this.pieChartTmp[i].remark) {
						ctx.textAlign="center";
			        	ctx.fillText(
				        	this.pieChartTmp[i].remark,
				        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26,
				        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26-txtLH
				        );
			        	ctx.fillText(
				        	this.pieChartTmp[i].content,
				        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26,
				        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26-txtLH*1.5
				        );
			        }else{
			        	ctx.fillText(
				        	this.pieChartTmp[i].content,
				        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26,
				        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26-txtLH
				        );
			        }
					ctx.closePath();
			        startChart=endChart;
			    }
				this.$refs.viewWrap.style.opacity = 1;
				this.$refs.exclude.style.opacity = 1;
				clearInterval(setCss);
			}.bind(this), 1);
		}
};

var clude_chf = {
	template: `
	<section class="clude">
		<div ref="include" class="include clude_con">
			
			<!--标题-->
			<div ref="title" class="clude_title">
				<h5>教育開支</h5>
				<h2>包括</h2>
			</div>
			
			<!--canvas-->
			<div ref="viewWrap" class="clude_view">
				<canvas ref="view">
					
					<!--显示则不兼容-->
					<span>该浏览器不兼容</span>
				</canvas>
			</div>
		</div>
		<div class="exclude clude_con">
			
			<!--标题-->
			<div class="clude_title">
				<h5>教育開支</h5>
				<h2>不包括</h2>
			</div>
			
			<!--内容-->
			<div ref="exclude" class="clude_ex">
				<p class="entertainment">
					消遣
				</p>
				<p class="clothes">
					衣履
				</p>
			</div>
		</div>
	</section>`,
	name: 'clude_chf',
		data() {
			return {
				country:null,
				degree:null,
				pieChartTmp:null
			}
		},
		computed: {
		},
		methods: {
		},
		watch: {
		},
		mounted() {
			this.$refs.viewWrap.style.opacity = 0;
			this.$refs.exclude.style.opacity = 0;
			var setCss = setInterval(function() {
				/*
				 * 获取页面缓存
				 */
				var userData=window.sessionStorage.getItem('userinf');
				if (userData) {
					userData=JSON.parse(userData);
					this.country=userData.country;
					this.degree=userData.degree;
				}
				var pieChartChf=window.sessionStorage.getItem('pieChartChf');
				pieChartChf=JSON.parse(pieChartChf);
				this.pieChartTmp=pieChartChf[this.country][this.degree];
				
				if (window.screen.width<=1024) {
					this.$refs.viewWrap.style.height=this.$refs.include.clientHeight-this.$refs.title.clientHeight+'px';
				}else{
					this.$refs.viewWrap.style.height=this.$refs.include.clientHeight-this.$refs.title.clientHeight+'px';					
					this.$refs.exclude.style.height=this.$refs.include.clientHeight-this.$refs.title.clientHeight+'px';
				}
				var wfontSize=window.getComputedStyle(this.$refs.viewWrap).fontSize;
				var wWidth=this.$refs.viewWrap.clientWidth;
				var wHeight=this.$refs.viewWrap.clientHeight;
				this.$refs.view.width=wWidth;
				this.$refs.view.height=wHeight;
				var ctx=this.$refs.view.getContext('2d');
				ctx.clearRect(0,0,wWidth,wHeight);
				var startChart=0;
				var endChart=null;
				for(var i in this.pieChartTmp){
			        endChart=this.pieChartTmp[i].per*2*Math.PI + startChart;
			        ctx.fillStyle=this.pieChartTmp[i].color;
			        ctx.beginPath();
			        ctx.moveTo(wWidth*.5,wHeight*.5);
			        ctx.arc(wWidth*.5,wHeight*.5,wHeight*.2,startChart,endChart,false);
			        ctx.fill();
					ctx.closePath();
			        ctx.beginPath();
			        ctx.moveTo(wWidth*.5,wHeight*.5);
			        ctx.lineTo(
			        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.25,
			        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.25
			        );
			        ctx.strokeStyle=this.pieChartTmp[i].color;
			        ctx.lineWidth=2;
			        ctx.stroke();
			        if ((wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26)>=wWidth*.5) {
						ctx.textAlign="left";
			        } else{
						ctx.textAlign="right";
			        }
			        var txtLH=null;
			        if ((wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26)>=wHeight*.5) {
						ctx.textBaseline="top";
						txtLH=parseInt(wfontSize);
			        } else{
						ctx.textBaseline="bottom";
						txtLH=parseInt(wfontSize)*2;
			        }
					ctx.font=parseInt(wfontSize)*1.8+'px SanFrancisco';
			        ctx.fillText(
			        	(this.pieChartTmp[i].per*100).toFixed(1)+'%',
			        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26,
			        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26
			        );
					ctx.font=wfontSize+' SanFrancisco';
			        ctx.fillStyle="#FFFFFF";
			        if (this.pieChartTmp[i].remark) {
						ctx.textAlign="center";
			        	ctx.fillText(
				        	this.pieChartTmp[i].remark,
				        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26,
				        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26-txtLH
				        );
			        	ctx.fillText(
				        	this.pieChartTmp[i].content,
				        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26,
				        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26-txtLH*1.5
				        );
			        }else{
			        	ctx.fillText(
				        	this.pieChartTmp[i].content,
				        	wWidth*.5+Math.cos(startChart+(endChart-startChart)*.5)*wHeight*.26,
				        	wHeight*.5+Math.sin(startChart+(endChart-startChart)*.5)*wHeight*.26-txtLH
				        );
			        }
					ctx.closePath();
			        startChart=endChart;
			    }
				this.$refs.viewWrap.style.opacity = 1;
				this.$refs.exclude.style.opacity = 1;
				clearInterval(setCss);
			}.bind(this), 1);
		}
};

var tuitionFee = {
	template: `
	<section class="tuitionFee">
		
		<!--标题-->
		<h2 class="title">Inflation rate</h2>
		<h3 class="subtitle">- Tuition fees -</h3>
		
		<!--内容-->
		<div class="view_wrap">
			<div ref="leftPart" class="left_part part">
				<dl ref="leftPartView" :style="dlSettings(leftPartHeight)">
					<dt ref="leftPartViewDt" :style="dtSettings(leftPartWidth,viewChartColor[0],.9,leftPartHeight,leftPartHeightDd)">
						{{firstChart[0].per}}
					</dt>
					<dd>{{firstChart[0].content}}</dd>
				</dl>
			</div>
			<div ref="rightPart" class="right_part part">
				<dl ref="rightPartView" v-for="(v,i) in viewChart" :style="dlSettings(rightPartHeight)">
					<dt ref="rightPartViewDt" :style="dtSettings(rightPartWidth,viewChartColor[i+1],.6,rightPartHeight,rightPartHeightDd)">
						{{v.per}}
					</dt>
					<dd>{{v.content}}</dd>
				</dl>
			</div>
		</div>
		<div class="remark">
			*Assuming that United Kingdom’s tuition fees will be converging with that of United States (private),the lower one will be adopted for United Kingdom.
		</div>
	</section>`,
	name: 'tuitionFee',
	data() {
		return {
			leftPartWidth: null,
			rightPartWidth: null,
			leftPartHeight: null,
			rightPartHeight: null,
			leftPartHeightDd: null,
			rightPartHeightDd: null,
			viewChart: [{
					per: '3.18%',
					content: 'United Kingdom',
					country: 'UK'
				},
				{
					per: '1.20%',
					content: 'United States',
					country: 'US'
				},
				{
					per: '4.31%',
					content: 'Australia',
					country: 'Australia'
				},
				{
					per: '3.20%',
					content: 'Canada',
					country: 'Canada'
				},
				{
					per: '4.00%',
					content: 'Hong Kong',
					country: 'HongKong'
				}
			],
			viewChartColor: ['#FF7E00', '#FF9600', '#FFAA00', '#FFC300', '#D8A20C'],
			firstChart: null,
			country: null
		}
	},
	computed: {},
	methods: {
		dlSettings: function(dlHeight) {
			return {
				height: dlHeight + 'px',
			}
		},
		dtSettings: function(rule, color, size, dlHeight, ddHeight) {
			return {
				backgroundColor: color,
				width: rule * size + 'px',
				height: rule * size + 'px',
				lineHeight: rule * size + 'px',
				borderRadius: rule * size + 'px',
				fontSize: rule * size * .25 + 'px',
				marginTop: (dlHeight - (rule * size + ddHeight)) * .5 + 'px',
			}
		}
	},
	watch: {},
	beforeMount() {
		/*
		 * 获取页面缓存调整数据
		 */
		var userData = window.sessionStorage.getItem('userinf');
		if(userData) {
			userData = JSON.parse(userData);
			this.country = userData.country;
			if(this.country == 'USP') {
				this.country = 'US';
			}
			for(var i in this.viewChart) {
				if(this.viewChart[i].country == this.country) {
					this.firstChart = this.viewChart.splice(i, 1);
				}
			}
		}
	},
	mounted() {
		this.$refs.leftPart.style.opacity = 0;
		this.$refs.rightPart.style.opacity = 0;
		var setCss = setInterval(function() {
			this.leftPartWidth = this.$refs.leftPart.clientWidth;
			this.rightPartWidth = this.$refs.rightPart.clientWidth * .5;
			this.leftPartHeight = this.$refs.leftPart.clientHeight;
			this.rightPartHeight = this.$refs.rightPart.clientHeight * .5;
			this.leftPartHeightDd = this.$refs.leftPartView.clientHeight - this.$refs.leftPartViewDt.clientHeight;
			this.rightPartHeightDd = this.$refs.rightPartView[0].clientHeight - this.$refs.rightPartViewDt[0].clientHeight;
			this.$refs.leftPart.style.opacity = 1;
			this.$refs.rightPart.style.opacity = 1;
			clearInterval(setCss);
		}.bind(this), 1);
	}
};

var tuitionFee_ch = {
	template: `
	<section class="tuitionFee">
		
		<!--标题-->
		<h2 class="title">通胀率</h2>
		<h3 class="subtitle">- 学费 -</h3>
		
		<!--内容-->
		<div class="view_wrap">
			<div ref="leftPart" class="left_part part">
				<dl ref="leftPartView" :style="dlSettings(leftPartHeight)">
					<dt ref="leftPartViewDt" :style="dtSettings(leftPartWidth,viewChartColor[0],.9,leftPartHeight,leftPartHeightDd)">
						{{firstChart[0].per}}
					</dt>
					<dd>{{firstChart[0].content}}</dd>
				</dl>
			</div>
			<div ref="rightPart" class="right_part part">
				<dl ref="rightPartView" v-for="(v,i) in viewChart" :style="dlSettings(rightPartHeight)">
					<dt ref="rightPartViewDt" :style="dtSettings(rightPartWidth,viewChartColor[i+1],.6,rightPartHeight,rightPartHeightDd)">
						{{v.per}}
					</dt>
					<dd>{{v.content}}</dd>
				</dl>
			</div>
		</div>
		<div class="remark">
			*假设英国学费将续步攀升至与美国学费相同，现采纳较低学费作计算之用
		</div>
	</section>`,
	name: 'tuitionFee_ch',
	data() {
		return {
			leftPartWidth: null,
			rightPartWidth: null,
			leftPartHeight: null,
			rightPartHeight: null,
			leftPartHeightDd: null,
			rightPartHeightDd: null,
			viewChart: [
				{
					per: '3.18%',
					content: '英国',
					country: 'UK'
				},
				{
					per: '1.20%',
					content: '美国',
					country: 'US'
				},
				{
					per: '4.31%',
					content: '澳洲',
					country: 'Australia'
				},
				{
					per: '3.20%',
					content: '加拿大',
					country: 'Canada'
				},
				{
					per: '4.00%',
					content: '香港',
					country: 'HongKong'
				}
			],
			viewChartColor: ['#FF7E00', '#FF9600', '#FFAA00', '#FFC300', '#D8A20C'],
			firstChart: null,
			country: null
		}
	},
	computed: {},
	methods: {
		dlSettings: function(dlHeight) {
			return {
				height: dlHeight + 'px',
			}
		},
		dtSettings: function(rule, color, size, dlHeight, ddHeight) {
			return {
				backgroundColor: color,
				width: rule * size + 'px',
				height: rule * size + 'px',
				lineHeight: rule * size + 'px',
				borderRadius: rule * size + 'px',
				fontSize: rule * size * .25 + 'px',
				marginTop: (dlHeight - (rule * size + ddHeight)) * .5 + 'px',
			}
		}
	},
	watch: {},
	beforeMount() {
		/*
		 * 获取页面缓存调整数据
		 */
		var userData = window.sessionStorage.getItem('userinf');
		if(userData) {
			userData = JSON.parse(userData);
			this.country = userData.country;
			if(this.country == 'USP') {
				this.country = 'US';
			}
			for(var i in this.viewChart) {
				if(this.viewChart[i].country == this.country) {
					this.firstChart = this.viewChart.splice(i, 1);
				}
			}
		}
	},
	mounted() {
		this.$refs.leftPart.style.opacity = 0;
		this.$refs.rightPart.style.opacity = 0;
		var setCss = setInterval(function() {
			this.leftPartWidth = this.$refs.leftPart.clientWidth;
			this.rightPartWidth = this.$refs.rightPart.clientWidth * .5;
			this.leftPartHeight = this.$refs.leftPart.clientHeight;
			this.rightPartHeight = this.$refs.rightPart.clientHeight * .5;
			this.leftPartHeightDd = this.$refs.leftPartView.clientHeight - this.$refs.leftPartViewDt.clientHeight;
			this.rightPartHeightDd = this.$refs.rightPartView[0].clientHeight - this.$refs.rightPartViewDt[0].clientHeight;
			this.$refs.leftPart.style.opacity = 1;
			this.$refs.rightPart.style.opacity = 1;
			clearInterval(setCss);
		}.bind(this), 1);
	}
};

var tuitionFee_chf = {
	template: `
	<section class="tuitionFee">
		
		<!--标题-->
		<h2 class="title">通脹率</h2>
		<h3 class="subtitle">- 學費 -</h3>
		
		<!--内容-->
		<div class="view_wrap">
			<div ref="leftPart" class="left_part part">
				<dl ref="leftPartView" :style="dlSettings(leftPartHeight)">
					<dt ref="leftPartViewDt" :style="dtSettings(leftPartWidth,viewChartColor[0],.9,leftPartHeight,leftPartHeightDd)">
						{{firstChart[0].per}}
					</dt>
					<dd>{{firstChart[0].content}}</dd>
				</dl>
			</div>
			<div ref="rightPart" class="right_part part">
				<dl ref="rightPartView" v-for="(v,i) in viewChart" :style="dlSettings(rightPartHeight)">
					<dt ref="rightPartViewDt" :style="dtSettings(rightPartWidth,viewChartColor[i+1],.6,rightPartHeight,rightPartHeightDd)">
						{{v.per}}
					</dt>
					<dd>{{v.content}}</dd>
				</dl>
			</div>
		</div>
		<div class="remark">
			*假設英國學費將續步攀升至與美國學費相同，現採納較低學費作計算之用
		</div>
	</section>`,
	name: 'tuitionFee_chf',
	data() {
		return {
			leftPartWidth: null,
			rightPartWidth: null,
			leftPartHeight: null,
			rightPartHeight: null,
			leftPartHeightDd: null,
			rightPartHeightDd: null,
			viewChart: [
					{
						per:'3.18%',
						content:'英國',
						country:'UK'
					},
					{
						per:'1.20%',
						content:'美國',
						country:'US'
					},
					{
						per:'4.31%',
						content:'澳洲',
						country:'Australia'
					},
					{
						per:'3.20%',
						content:'加拿大',
						country:'Canada'
					},
					{
						per:'4.00%',
						content:'香港',
						country:'HongKong'
					}
			],
			viewChartColor: ['#FF7E00', '#FF9600', '#FFAA00', '#FFC300', '#D8A20C'],
			firstChart: null,
			country: null
		}
	},
	computed: {},
	methods: {
		dlSettings: function(dlHeight) {
			return {
				height: dlHeight + 'px',
			}
		},
		dtSettings: function(rule, color, size, dlHeight, ddHeight) {
			return {
				backgroundColor: color,
				width: rule * size + 'px',
				height: rule * size + 'px',
				lineHeight: rule * size + 'px',
				borderRadius: rule * size + 'px',
				fontSize: rule * size * .25 + 'px',
				marginTop: (dlHeight - (rule * size + ddHeight)) * .5 + 'px',
			}
		}
	},
	watch: {},
	beforeMount() {
		/*
		 * 获取页面缓存调整数据
		 */
		var userData = window.sessionStorage.getItem('userinf');
		if(userData) {
			userData = JSON.parse(userData);
			this.country = userData.country;
			if(this.country == 'USP') {
				this.country = 'US';
			}
			for(var i in this.viewChart) {
				if(this.viewChart[i].country == this.country) {
					this.firstChart = this.viewChart.splice(i, 1);
				}
			}
		}
	},
	mounted() {
		this.$refs.leftPart.style.opacity = 0;
		this.$refs.rightPart.style.opacity = 0;
		var setCss = setInterval(function() {
			this.leftPartWidth = this.$refs.leftPart.clientWidth;
			this.rightPartWidth = this.$refs.rightPart.clientWidth * .5;
			this.leftPartHeight = this.$refs.leftPart.clientHeight;
			this.rightPartHeight = this.$refs.rightPart.clientHeight * .5;
			this.leftPartHeightDd = this.$refs.leftPartView.clientHeight - this.$refs.leftPartViewDt.clientHeight;
			this.rightPartHeightDd = this.$refs.rightPartView[0].clientHeight - this.$refs.rightPartViewDt[0].clientHeight;
			this.$refs.leftPart.style.opacity = 1;
			this.$refs.rightPart.style.opacity = 1;
			clearInterval(setCss);
		}.bind(this), 1);
	}
};

var costOfLiving = {
	template: `
	<section class="costOfLiving">
		
		<!--标题-->
		<h2 class="title">Inflation rate</h2>
		<h3 class="subtitle">- Cost of living -</h3>
		
		<!--内容-->
		<div class="view_wrap">
			<div ref="leftPart" class="left_part part">
				<dl ref="leftPartView" :style="dlSettings(leftPartHeight)">
					<dt ref="leftPartViewDt" :style="dtSettings(leftPartWidth,viewChartColor[0],.9,leftPartHeight,leftPartHeightDd)">
						{{firstChart[0].per}}
					</dt>
					<dd>{{firstChart[0].content}}</dd>
				</dl>
			</div>
			<div ref="rightPart" class="right_part part">
				<dl ref="rightPartView" v-for="(v,i) in viewChart" :style="dlSettings(rightPartHeight)">
					<dt ref="rightPartViewDt" :style="dtSettings(rightPartWidth,viewChartColor[i+1],.6,rightPartHeight,rightPartHeightDd)">
						{{v.per}}
					</dt>
					<dd>{{v.content}}</dd>
				</dl>
			</div>
		</div>
	</section>`,
	name: 'costOfLiving',
	data() {
		return {
			leftPartWidth: null,
			rightPartWidth: null,
			leftPartHeight: null,
			rightPartHeight: null,
			leftPartHeightDd: null,
			rightPartHeightDd: null,
			viewChart: [
					{
						per:'1.50%',
						color:'#FF7E00',
						content:'United Kingdom',
						country:'UK'
					},
					{
						per:'1.60%',
						color:'#D8A20C',
						content:'United States',
						country:'US'
					},
					{
						per:'2.49%',
						color:'#FF9600',
						content:'Australia',
						country:'Australia'
					},
					{
						per:'2.00%',
						color:'#FFAA00',
						content:'Canada',
						country:'Canada'
					},
					{
						per:'4.40%',
						color:'#FFC300',
						content:'Hong Kong',
						country:'HongKong'
					}
			],
			viewChartColor: ['#FF7E00', '#FF9600', '#FFAA00', '#FFC300', '#D8A20C'],
			firstChart: null,
			country: null
		}
	},
	computed: {},
	methods: {
		dlSettings: function(dlHeight) {
			return {
				height: dlHeight + 'px',
			}
		},
		dtSettings: function(rule, color, size, dlHeight, ddHeight) {
			return {
				backgroundColor: color,
				width: rule * size + 'px',
				height: rule * size + 'px',
				lineHeight: rule * size + 'px',
				borderRadius: rule * size + 'px',
				fontSize: rule * size * .25 + 'px',
				marginTop: (dlHeight - (rule * size + ddHeight)) * .5 + 'px',
			}
		}
	},
	watch: {},
	beforeMount() {
		/*
		 * 获取页面缓存调整数据
		 */
		var userData = window.sessionStorage.getItem('userinf');
		if(userData) {
			userData = JSON.parse(userData);
			this.country = userData.country;
			if(this.country == 'USP') {
				this.country = 'US';
			}
			for(var i in this.viewChart) {
				if(this.viewChart[i].country == this.country) {
					this.firstChart = this.viewChart.splice(i, 1);
				}
			}
		}
	},
	mounted() {
		this.$refs.leftPart.style.opacity = 0;
		this.$refs.rightPart.style.opacity = 0;
		var setCss = setInterval(function() {
			this.leftPartWidth = this.$refs.leftPart.clientWidth;
			this.rightPartWidth = this.$refs.rightPart.clientWidth * .5;
			this.leftPartHeight = this.$refs.leftPart.clientHeight;
			this.rightPartHeight = this.$refs.rightPart.clientHeight * .5;
			this.leftPartHeightDd = this.$refs.leftPartView.clientHeight - this.$refs.leftPartViewDt.clientHeight;
			this.rightPartHeightDd = this.$refs.rightPartView[0].clientHeight - this.$refs.rightPartViewDt[0].clientHeight;
			this.$refs.leftPart.style.opacity = 1;
			this.$refs.rightPart.style.opacity = 1;
			clearInterval(setCss);
		}.bind(this), 1);
	}
};

var costOfLiving_ch = {
	template: `
	<section class="costOfLiving">
		
		<!--标题-->
		<h2 class="title">通胀率</h2>
		<h3 class="subtitle">- 生活成本 -</h3>
		
		<!--内容-->
		<div class="view_wrap">
			<div ref="leftPart" class="left_part part">
				<dl ref="leftPartView" :style="dlSettings(leftPartHeight)">
					<dt ref="leftPartViewDt" :style="dtSettings(leftPartWidth,viewChartColor[0],.9,leftPartHeight,leftPartHeightDd)">
						{{firstChart[0].per}}
					</dt>
					<dd>{{firstChart[0].content}}</dd>
				</dl>
			</div>
			<div ref="rightPart" class="right_part part">
				<dl ref="rightPartView" v-for="(v,i) in viewChart" :style="dlSettings(rightPartHeight)">
					<dt ref="rightPartViewDt" :style="dtSettings(rightPartWidth,viewChartColor[i+1],.6,rightPartHeight,rightPartHeightDd)">
						{{v.per}}
					</dt>
					<dd>{{v.content}}</dd>
				</dl>
			</div>
		</div>
	</section>`,
	name: 'costOfLiving_ch',
	data() {
		return {
			leftPartWidth: null,
			rightPartWidth: null,
			leftPartHeight: null,
			rightPartHeight: null,
			leftPartHeightDd: null,
			rightPartHeightDd: null,
			viewChart: [
					{
						per:'1.50%',
						color:'#FF7E00',
						content:'英国',
						country:'UK'
					},
					{
						per:'1.60%',
						color:'#D8A20C',
						content:'美国',
						country:'US'
					},
					{
						per:'2.49%',
						color:'#FF9600',
						content:'澳洲',
						country:'Australia'
					},
					{
						per:'2.00%',
						color:'#FFAA00',
						content:'加拿大',
						country:'Canada'
					},
					{
						per:'4.40%',
						color:'#FFC300',
						content:'香港',
						country:'HongKong'
					}
			],
			viewChartColor: ['#FF7E00', '#FF9600', '#FFAA00', '#FFC300', '#D8A20C'],
			firstChart: null,
			country: null
		}
	},
	computed: {},
	methods: {
		dlSettings: function(dlHeight) {
			return {
				height: dlHeight + 'px',
			}
		},
		dtSettings: function(rule, color, size, dlHeight, ddHeight) {
			return {
				backgroundColor: color,
				width: rule * size + 'px',
				height: rule * size + 'px',
				lineHeight: rule * size + 'px',
				borderRadius: rule * size + 'px',
				fontSize: rule * size * .25 + 'px',
				marginTop: (dlHeight - (rule * size + ddHeight)) * .5 + 'px',
			}
		}
	},
	watch: {},
	beforeMount() {
		/*
		 * 获取页面缓存调整数据
		 */
		var userData = window.sessionStorage.getItem('userinf');
		if(userData) {
			userData = JSON.parse(userData);
			this.country = userData.country;
			if(this.country == 'USP') {
				this.country = 'US';
			}
			for(var i in this.viewChart) {
				if(this.viewChart[i].country == this.country) {
					this.firstChart = this.viewChart.splice(i, 1);
				}
			}
		}
	},
	mounted() {
		this.$refs.leftPart.style.opacity = 0;
		this.$refs.rightPart.style.opacity = 0;
		var setCss = setInterval(function() {
			this.leftPartWidth = this.$refs.leftPart.clientWidth;
			this.rightPartWidth = this.$refs.rightPart.clientWidth * .5;
			this.leftPartHeight = this.$refs.leftPart.clientHeight;
			this.rightPartHeight = this.$refs.rightPart.clientHeight * .5;
			this.leftPartHeightDd = this.$refs.leftPartView.clientHeight - this.$refs.leftPartViewDt.clientHeight;
			this.rightPartHeightDd = this.$refs.rightPartView[0].clientHeight - this.$refs.rightPartViewDt[0].clientHeight;
			this.$refs.leftPart.style.opacity = 1;
			this.$refs.rightPart.style.opacity = 1;
			clearInterval(setCss);
		}.bind(this), 1);
	}
};

var costOfLiving_chf = {
	template: `
	<section class="costOfLiving">
		
		<!--标题-->
		<h2 class="title">通脹率</h2>
		<h3 class="subtitle">- 生活成本 -</h3>
		
		<!--内容-->
		<div class="view_wrap">
			<div ref="leftPart" class="left_part part">
				<dl ref="leftPartView" :style="dlSettings(leftPartHeight)">
					<dt ref="leftPartViewDt" :style="dtSettings(leftPartWidth,viewChartColor[0],.9,leftPartHeight,leftPartHeightDd)">
						{{firstChart[0].per}}
					</dt>
					<dd>{{firstChart[0].content}}</dd>
				</dl>
			</div>
			<div ref="rightPart" class="right_part part">
				<dl ref="rightPartView" v-for="(v,i) in viewChart" :style="dlSettings(rightPartHeight)">
					<dt ref="rightPartViewDt" :style="dtSettings(rightPartWidth,viewChartColor[i+1],.6,rightPartHeight,rightPartHeightDd)">
						{{v.per}}
					</dt>
					<dd>{{v.content}}</dd>
				</dl>
			</div>
		</div>
	</section>`,
	name: 'costOfLiving_chf',
	data() {
		return {
			leftPartWidth: null,
			rightPartWidth: null,
			leftPartHeight: null,
			rightPartHeight: null,
			leftPartHeightDd: null,
			rightPartHeightDd: null,
			viewChart: [
					{
						per:'1.50%',
						color:'#FF7E00',
						content:'英國',
						country:'UK'
					},
					{
						per:'1.60%',
						color:'#D8A20C',
						content:'美國',
						country:'US'
					},
					{
						per:'2.49%',
						color:'#FF9600',
						content:'澳洲',
						country:'Australia'
					},
					{
						per:'2.00%',
						color:'#FFAA00',
						content:'加拿大',
						country:'Canada'
					},
					{
						per:'4.40%',
						color:'#FFC300',
						content:'香港',
						country:'HongKong'
					}
			],
			viewChartColor: ['#FF7E00', '#FF9600', '#FFAA00', '#FFC300', '#D8A20C'],
			firstChart: null,
			country: null
		}
	},
	computed: {},
	methods: {
		dlSettings: function(dlHeight) {
			return {
				height: dlHeight + 'px',
			}
		},
		dtSettings: function(rule, color, size, dlHeight, ddHeight) {
			return {
				backgroundColor: color,
				width: rule * size + 'px',
				height: rule * size + 'px',
				lineHeight: rule * size + 'px',
				borderRadius: rule * size + 'px',
				fontSize: rule * size * .25 + 'px',
				marginTop: (dlHeight - (rule * size + ddHeight)) * .5 + 'px',
			}
		}
	},
	watch: {},
	beforeMount() {
		/*
		 * 获取页面缓存调整数据
		 */
		var userData = window.sessionStorage.getItem('userinf');
		if(userData) {
			userData = JSON.parse(userData);
			this.country = userData.country;
			if(this.country == 'USP') {
				this.country = 'US';
			}
			for(var i in this.viewChart) {
				if(this.viewChart[i].country == this.country) {
					this.firstChart = this.viewChart.splice(i, 1);
				}
			}
		}
	},
	mounted() {
		this.$refs.leftPart.style.opacity = 0;
		this.$refs.rightPart.style.opacity = 0;
		var setCss = setInterval(function() {
			this.leftPartWidth = this.$refs.leftPart.clientWidth;
			this.rightPartWidth = this.$refs.rightPart.clientWidth * .5;
			this.leftPartHeight = this.$refs.leftPart.clientHeight;
			this.rightPartHeight = this.$refs.rightPart.clientHeight * .5;
			this.leftPartHeightDd = this.$refs.leftPartView.clientHeight - this.$refs.leftPartViewDt.clientHeight;
			this.rightPartHeightDd = this.$refs.rightPartView[0].clientHeight - this.$refs.rightPartViewDt[0].clientHeight;
			this.$refs.leftPart.style.opacity = 1;
			this.$refs.rightPart.style.opacity = 1;
			clearInterval(setCss);
		}.bind(this), 1);
	}
};

var source = {
	template: `
	<section class="source">
		<div class="source_txt">
			<!--标题-->
			<h4>Source of data</h4>
			
			<!--内容-->
			<p>
				<span>Airfares</span><br> 2 return economy tickets quoted online by
				<a charset="linenone" target="_blank" href="http://www.cathaypacific.com">Cathay Pacific Airways Limited</a> on 31st August 2015 to London, New York, Sydney and Toronto.
			</p>
			<p>
				<span>Tuition fees - general degree</span><br>
				<i>Estimated average cost of a 4-year general university degree as of September 2015 </i><br>
				<em>Hong Kong:</em>
				<a target="_blank" href="http://www.studyinhongkong.edu.hk/en/">Study HK </a><br>
				<em>United Kingdom: </em>
				<a target="_blank" href="http://www.studylondon.ac.uk">Study London Official University Guide </a><br>
				<em>United States: </em>
				<a target="_blank" href="http://trends.collegeboard.org/college-pricing/figures-tables/average-published-undergraduate-charges-sector-2015-16">College Board US </a><br>
				<em>Australia: </em>
				<a target="_blank" href="http://www.studyinaustralia.gov.au/global/australian-education/education-costs">Study in Australia </a><br>
				<em>Canada: </em>
				<a target="_blank" href="http://www5.statcan.gc.ca/cansim/pick-choisir?lang=eng&amp;p2=33&amp;id=4770024">Statistics Canada </a><br>
			</p>
			<p>
				<span>Tuition fees - law and medical degrees</span><br>
				<i>Average cost released by 3 sampled universities for each country as of September 2015</i><br>
				<em>USA (Private):</em> Stanford University, Columbia University and the University of Pennsylvania<br>
				<em>USA (State):</em> University of Michigan, University of Wisconsin-Madison and the University of California, Los Angeles<br>
				<em>Canada:</em> University of Toronto, McGill University and the University of British Columbia<br>
				<em>UK:</em> University of Oxford, University of Cambridge and University of College London<br>
				<em>Australia:</em> University of Melbourne, University of Sydney and University of Queensland<br>
				<em>Hong Kong:</em> University of Hong Kong, Chinese University and University of Science and Technology<br>
			</p>
			<p>
				<span><a target="_blank" href="http://www.studyinhongkong.edu.hk/en/live-in-hong-kong/introduction.php">Living expenses and room &amp; board</a></span><br>
				<i>Estimated average cost of 4 years of expenses as of September 2015</i><br>
				<em>UK:</em>
				<a target="_blank" href="http://www.ukcisa.org.uk/International-Students/When-you-arrive/Choosing-accommodation/Rent-and-other-costs/"> UK Council for International Student Affairs</a>
				<a target="_blank" href="http://www.gov.uk/tier-4-general-visa">GOV.UK</a><br>
				<em>US:</em>
				<a target="_blank" href="http://professionals.collegeboard.com/higher-ed/financial-aid/living-expense/"> College Board Professional US </a><br>
				<em>Australia:</em>
				<a target="_blank" href="http://www.studyinaustralia.gov.au/global/live-in-australia/living-costs">Study in Australia </a><br>
				<em>Canada:</em>
				<a target="_blank" href="http://www.studycanada.ca/english"> Study Canada </a><br>
			</p>
			<p>
				<span>Inflation rate</span><br>
				<em>US: </em>
				<a target="_blank" href="http://data.bls.gov/cgi-bin/surveymost?cu">Bureau of Labor Statistics</a><br>
				<em>UK: </em>
				<a target="_blank" href="http://www.ons.gov.uk/ons/rel/cpi/consumer-price-indices/october-2015/rft-table-1.xls?format=contrast">Office for National Statistics data </a><br>
				<em>Canada:</em>
				<a target="_blank" href="http://www5.statcan.gc.ca/cansim/a26?lang=eng&amp;retrLang=eng&amp;id=3260021&amp;&amp;pattern=&amp;stByVal=1&amp;p1=1&amp;p2=-1&amp;tabMode=dataTable&amp;csid=#customizeTab"> Statistics Canada </a><br>
				<em>Australia:</em>
				<a target="_blank" href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/6401.0Jun%202015?OpenDocument"> Australian Bureau of Statistics</a><br>
				<em>Hong Kong:</em>
				<a target="_blank" href="http://www.censtatd.gov.hk/hkstat/sub/sp270.jsp?productCode=D5600002"> Census and Statistics Department </a><br>
			</p>
		</div>
	</section>`,
	name: 'source',
		data() {
			return {
			}
		},
		computed: {
		},
		methods: {
		},
		watch: {
		},
		mounted() {
		}
};

var source_ch = {
	template: `
	<section class="source">
		<div class="source_txt">
			<h4>资料来源</h4>
			<p>
				<span>机票价格</span><br> 于2015年8月31日
				<a charset="linenone" target="_blank" href="http://www.cathaypacific.com">国泰航空有限公司</a>网上报价
			</p>
			<p>
				<span>一般学位学费</span><br>
				<i>截至2015年9月，4年大学的一般学位预计平均学费成本 </i><br>
				<em>香港:</em>
				<a target="_blank" href="http://www.studyinhongkong.edu.hk/en/">Study in HK</a><br>
				<em>英国: </em>
				<a target="_blank" href="http://www.studylondon.ac.uk">Study London Official University Guide </a><br>
				<em>美国: </em>
				<a target="_blank" href="http://trends.collegeboard.org/college-pricing/figures-tables/average-published-undergraduate-charges-sector-2015-16">College Board US </a><br>
				<em>澳洲: </em>
				<a target="_blank" href="http://www.studyinaustralia.gov.au/global/australian-education/education-costs">Study in Australia </a><br>
				<em>加拿大: </em>
				<a target="_blank" href="http://www5.statcan.gc.ca/cansim/pick-choisir?lang=eng&amp;p2=33&amp;id=4770024">Statistics Canada </a><br>
			</p>
			<p>
				<span>法律及医科学位学费</span><br>
				<i>由每个国家三所大学抽样的法律和医科学位的预计平均学费成本</i><br>
				<em>美国(私立学校):</em> 斯坦福大学、哥伦比亚大学和宾夕法尼亚大学<br>
				<em>美国(公立学校):</em> 密歇根大学、威斯康星麦迪逊大学和加州洛杉矶大学<br>
				<em>加拿大:</em>多伦多大学、麦吉尔大学和哥伦比亚大学<br>
				<em>英国:</em>牛津大学、剑桥大学和伦敦大学学院<br>
				<em>澳洲:</em>墨尔本大学、悉尼大学和昆士兰大学<br>
				<em>香港:</em>香港大学、香港中文大学和香港科技大学<br>
			</p>
			<p>
				<span>生活及住宿费</span><br>
				<i>截至2015年9月，4年生活及住宿费预计平均学费成本</i><br>
				<em>英国:</em>
				<a target="_blank" href="http://www.ukcisa.org.uk/International-Students/When-you-arrive/Choosing-accommodation/Rent-and-other-costs/"> UK Council for International Student Affairs</a>
				<a target="_blank" href="http://www.gov.uk/tier-4-general-visa">GOV.UK</a><br>
				<em>美国:</em>
				<a target="_blank" href="http://professionals.collegeboard.com/higher-ed/financial-aid/living-expense/"> College Board Professional US </a><br>
				<em>澳洲:</em>
				<a target="_blank" href="http://www.studyinaustralia.gov.au/global/live-in-australia/living-costs">Study in Australia </a><br>
				<em>加拿大:</em>
				<a target="_blank" href="http://www.studycanada.ca/english"> Study Canada </a><br>
			</p>
			<p>
				<span>通胀率</span><br>
				<em>美国: </em>
				<a target="_blank" href="http://data.bls.gov/cgi-bin/surveymost?cu">Bureau of Labor Statistics</a><br>
				<em>英国: </em>
				<a target="_blank" href="http://www.ons.gov.uk/ons/rel/cpi/consumer-price-indices/october-2015/rft-table-1.xls?format=contrast">Office for National Statistics data </a><br>
				<em>加拿大:</em>
				<a target="_blank" href="http://www5.statcan.gc.ca/cansim/a26?lang=eng&amp;retrLang=eng&amp;id=3260021&amp;&amp;pattern=&amp;stByVal=1&amp;p1=1&amp;p2=-1&amp;tabMode=dataTable&amp;csid=#customizeTab"> Statistics Canada </a><br>
				<em>澳洲:</em>
				<a target="_blank" href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/6401.0Jun%202015?OpenDocument"> Australian Bureau of Statistics</a><br>
				<em>香港:</em>
				<a target="_blank" href="http://www.censtatd.gov.hk/hkstat/sub/sp270.jsp?productCode=D5600002">香港政府统计处</a><br>
			</p>
		</div>
	</section>`,
	name: 'source_ch',
		data() {
			return {
			}
		},
		computed: {
		},
		methods: {
		},
		watch: {
		},
		mounted() {
		}
};

var source_chf = {
	template: `
	<section class="source">
		<div class="source_txt">
			<h4>資料來源</h4>
			<p>
				<span>機票價格</span><br> 於2015年8月31日
				<a charset="linenone" target="_blank" href="http://www.cathaypacific.com">國泰航空有限公司</a>網上報價
			</p>
			<p>
				<span>一般學位學費</span><br>
				<i>截至2015年9月， 4年大學的一般學位預計平均學費成本</i><br>
				<em>香港:</em>
				<a target="_blank" href="http://www.studyinhongkong.edu.hk/en/">Study in HK</a><br>
				<em>英國: </em>
				<a target="_blank" href="http://www.studylondon.ac.uk">Study London Official University Guide </a><br>
				<em>美國: </em>
				<a target="_blank" href="http://trends.collegeboard.org/college-pricing/figures-tables/average-published-undergraduate-charges-sector-2015-16">College Board US </a><br>
				<em>澳洲: </em>
				<a target="_blank" href="http://www.studyinaustralia.gov.au/global/australian-education/education-costs">Study in Australia </a><br>
				<em>加拿大: </em>
				<a target="_blank" href="http://www5.statcan.gc.ca/cansim/pick-choisir?lang=eng&amp;p2=33&amp;id=4770024">Statistics Canada </a><br>
			</p>
			<p>
				<span>法律及醫科學位學費</span><br>
				<i>由每個國家三所大學抽樣的法律和醫科學位的預計平均學費成本</i><br>
				<em>美國(私立學校): </em>斯坦福大學、哥倫比亞大學和賓夕法尼亞大學<br>
				<em>美國(公立學校): </em>密歇根大學、威斯康星麥迪遜大學和加州洛杉磯大學<br>
				<em>加拿大: </em>多倫多大學、麥吉爾大學和哥倫比亞大學 <br>
				<em>英國: </em> 牛津大學、劍橋大學和倫敦大學學院<br>
				<em>澳洲: </em>墨爾本大學、悉尼大學和昆士蘭大學<br>
				<em>香港: </em>香港大學、香港中文大學和香港科技大學<br>
			</p>
			<p>
				<span>生活及住宿費</span><br>
				<i>截至2015年9月，4年生活及住宿費預計平均學費成本</i><br>
				<em>英國:</em>
				<a target="_blank" href="http://www.ukcisa.org.uk/International-Students/When-you-arrive/Choosing-accommodation/Rent-and-other-costs/"> UK Council for International Student Affairs</a>
				<a target="_blank" href="http://www.gov.uk/tier-4-general-visa">GOV.UK</a><br>
				<em>美國:</em>
				<a target="_blank" href="http://professionals.collegeboard.com/higher-ed/financial-aid/living-expense/"> College Board Professional US </a><br>
				<em>澳洲:</em>
				<a target="_blank" href="http://www.studyinaustralia.gov.au/global/live-in-australia/living-costs">Study in Australia </a><br>
				<em>加拿大:</em>
				<a target="_blank" href="http://www.studycanada.ca/english"> Study Canada </a><br>
			</p>
			<p>
				<span>通脹率</span><br>
				<em>美國: </em>
				<a target="_blank" href="http://data.bls.gov/cgi-bin/surveymost?cu">Bureau of Labor Statistics</a><br>
				<em>英國: </em>
				<a target="_blank" href="http://www.ons.gov.uk/ons/rel/cpi/consumer-price-indices/october-2015/rft-table-1.xls?format=contrast">Office for National Statistics data </a><br>
				<em>加拿大:</em>
				<a target="_blank" href="http://www5.statcan.gc.ca/cansim/a26?lang=eng&amp;retrLang=eng&amp;id=3260021&amp;&amp;pattern=&amp;stByVal=1&amp;p1=1&amp;p2=-1&amp;tabMode=dataTable&amp;csid=#customizeTab"> Statistics Canada </a><br>
				<em>澳洲:</em>
				<a target="_blank" href="http://www.abs.gov.au/AUSSTATS/abs@.nsf/DetailsPage/6401.0Jun%202015?OpenDocument"> Australian Bureau of Statistics</a><br>
				<em>香港:</em>
				<a target="_blank" href="http://www.censtatd.gov.hk/hkstat/sub/sp270.jsp?productCode=D5600002">香港政府統計處</a><br>
			</p>
		</div>
	</section>`,
	name: 'source_chf',
		data() {
			return {
			}
		},
		computed: {
		},
		methods: {
		},
		watch: {
		},
		mounted() {
		}
};

	var routes = [{
			path: '/',
			redirect: '/information/guide'
		},

		/*
		 * 英文版
		 */
		{
			path: '/information',
			name: 'information',
			component: information,
			children: [{
				path: 'guide',
				name: 'guide',
				component: guide
			}]
		},
		{
			path: '/planned',
			name: 'planned',
			component: planned
		},
		{
			path: '/showRes',
			name: 'showRes',
			component: showRes,
			children: [{
					path: 'more',
					name: 'more',
					component: more,
					children: [{
							path: 'calculation',
							name: 'calculation',
							component: calculation
						},
						{
							path: 'clude',
							name: 'clude',
							component: clude
						},
						{
							path: 'tuitionFee',
							name: 'tuitionFee',
							component: tuitionFee
						},
						{
							path: 'costOfLiving',
							name: 'costOfLiving',
							component: costOfLiving
						},
						{
							path: 'source',
							name: 'source',
							component: source
						}
					]
				},
				{
					path: 'ask',
					name: 'ask',
					component: ask
				}
			]
		},
		{
			path: '/information_ch',
			name: 'information_ch',
			component: information_ch,
			children: [{
				path: 'guide_ch',
				name: 'guide_ch',
				component: guide_ch
			}]
		},
		{
			path: '/planned_ch',
			name: 'planned_ch',
			component: planned_ch
		},
		{
			path: '/showRes_ch',
			name: 'showRes_ch',
			component: showRes_ch,
			children: [{
					path: 'more_ch',
					name: 'more_ch',
					component: more_ch,
					children: [{
							path: 'calculation_ch',
							name: 'calculation_ch',
							component: calculation_ch
						},
						{
							path: 'clude_ch',
							name: 'clude_ch',
							component: clude_ch
						},
						{
							path: 'tuitionFee_ch',
							name: 'tuitionFee_ch',
							component: tuitionFee_ch
						},
						{
							path: 'costOfLiving_ch',
							name: 'costOfLiving_ch',
							component: costOfLiving_ch
						},
						{
							path: 'source_ch',
							name: 'source_ch',
							component: source_ch
						}
					]
				},
				{
					path: 'ask_ch',
					name: 'ask_ch',
					component: ask_ch
				}
			]
		},
		{
			path: '/information_chf',
			name: 'information_chf',
			component: information_chf,
			children: [{
				path: 'guide_chf',
				name: 'guide_chf',
				component: guide_chf
			}]
		},
		{
			path: '/planned_chf',
			name: 'planned_chf',
			component: planned_chf
		},
		{
			path: '/showRes_chf',
			name: 'showRes_chf',
			component: showRes_chf,
			children: [{
					path: 'more_chf',
					name: 'more_chf',
					component: more_chf,
					children: [{
							path: 'calculation_chf',
							name: 'calculation_chf',
							component: calculation_chf
						},
						{
							path: 'clude_chf',
							name: 'clude_chf',
							component: clude_chf
						},
						{
							path: 'tuitionFee_chf',
							name: 'tuitionFee_chf',
							component: tuitionFee_chf
						},
						{
							path: 'costOfLiving_chf',
							name: 'costOfLiving_chf',
							component: costOfLiving_chf
						},
						{
							path: 'source_chf',
							name: 'source_chf',
							component: source_chf
						}
					]
				},
				{
					path: 'ask_chf',
					name: 'ask_chf',
					component: ask_chf
				}
			]
		}
	];
	var router = new VueRouter({
		routes: routes
	});

	Vue.filter('thousand', function(value) {
		if(!value) {
			return ''
		}
		var val = value + '';
		val = val.split('').reverse().join('').replace(/\w{3}/g, function(a) {
			a = a + ',';
			return a;
		});
		if(val.substr(-1) == ',') {
			val = val.split('');
			val.pop();
			val = val.reverse().join('');
		} else {
			val = val.split('');
			val = val.reverse().join('');
		}
		return val;
	});
	new Vue({
		el: '#app',
		router: router,
		data: {
			enterClass: '',
			leaveClass: '',
			routerArray: ['information', 'planned', 'showRes'],
			routerIndex: 0
		},
		computed: {},
		methods: {},
		watch: {
			'$route': {
				handler: function(val) {
					for(var i = 0, len = this.routerArray.length; i < len; i++) {
						if(val.matched[0].path.indexOf(this.routerArray[i]) > -1) {
							if(i > this.routerIndex) {
								this.enterClass = 'animated zoomInRight';
								this.leaveClass = 'animated zoomOutLeft';
								this.routerIndex = i;
							} else if(i < this.routerIndex) {
								this.enterClass = 'animated zoomInLeft';
								this.leaveClass = 'animated zoomOutRight';
								this.routerIndex = i;
							} else {
								this.enterClass = 'animated zoomIn';
								this.leaveClass = 'animated zoomOut';
							}
						}
					}
				}
			}
		},
	});
}