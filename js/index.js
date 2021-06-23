//define programming langulanges
const WEB = [
	'HTML5',
	'JS',
	'JQUERY',
	'ANGULAR JS',
	'REACT',
	'PHP',
	'PYTHON',
	'DJANGO',
	'RUBY ON RAILS',
	'ASP .NET',
	'MAGENTO'
];
const FRONTEND = [ 'HTML5', 'CSS', 'SAAS', 'JS', 'JQUERY', 'REACT', 'ANGULAR JS' ];
const BACKEND = [ 'RUBY', 'RUBY ON RAILS', 'PYTHON', 'DJANGO', 'PHP', 'LARAVEL', 'SYMPHONY', 'C#', 'ASP .NET' ];
const MOBILE = [ 'ANDROID', 'IOS', 'JAVA', 'C#', 'SWIFT', 'CORDOVA', 'XAMARIN', 'TITANIUM' ];
const QualityAssurance = [ 'HEWLETT PACKARD', 'JIRA', 'JMETER', 'QA', 'SELENIUM', 'RSPEC', 'SILK TEST' ];
const InternetofThings = [ 'PYTHON', 'LINUX', 'EMBEDDED C', 'NFC', 'C++' ];
const BigData = [
	'HTML5',
	'JS',
	'JQUERY',
	'ANGULAR JS',
	'REACT',
	'PHP',
	'PYTHON',
	'DJANGO',
	'RUBY ON RAILS',
	'ASP .NET',
	'MAGENTO'
];
const DevOps = [ 'AMAZON AWS', 'MICROSOFT AZURE', 'CHEF', 'PUPPET', 'ANSIBLE', 'LINUX' ];
const Ecommerce = [ 'MAGENTO', 'SAP', 'SHOPIFY', 'OPENCART' ];
const Database = [ 'MONGO DB', 'MYSQL', 'ORACLE', 'REDIS', 'SQLITE', 'SQL SERVER', 'HADOOP' ];
const CloudSolutions = [ 'AWS', 'GCP', 'AZURE', 'HEROKU' ];

//golbal variable selectedItem
var selectedItem = 0;
$(window).on('load', function() {
	$('#firstweb').show();
	Animation3d(WEB);
});
$('body').on('click', 'h4', function(e) {
	// customAnimation();
	gspAnimation();
	// $('.sector circle').removeClass('sector_svganimation');

	customAnimation();

	e.preventDefault();

	selectedItem = $(this).parent('li').index();
	// alert(selectedItem);
	console.log(selectedItem);
	MovmentList(selectedItem);
	// console.log($(this).eq(selectedItem).addClass('active'));
	$('.submenu').hide();
	$('.submenu').eq(selectedItem).slideDown();
	switchItem(selectedItem);
});

//rotate For the selected Items
function switchItem(selectedItem) {
	console.log(typeof selectedItem);
	switch (selectedItem) {
		case 0:
			Animation3d(WEB);
			break;
		case 1:
			Animation3d(FRONTEND);
			break;
		case 2:
			Animation3d(BACKEND);
			break;
		case 3:
			Animation3d(MOBILE);
			break;
		case 4:
			Animation3d(QualityAssurance);
			break;
		case 5:
			Animation3d(InternetofThings);
			break;
		case 6:
			Animation3d(BigData);
			break;
		case 7:
			Animation3d(DevOps);
			break;
		case 8:
			Animation3d(Ecommerce);
			break;
		case 9:
			Animation3d(Database);
			break;
		case 10:
			Animation3d(CloudSolutions);
			break;
		default:
			Animation3d(WEB);
			break;
	}
}

//rotate 3d text
function Animation3d(programmingLanuguages) {
	console.log(programmingLanuguages);
	var entries = [];
	console.log('before');
	console.log(entries);
	programmingLanuguages.map((item) => {
		entries.push({ label: item });
	});
	console.log(entries);
	var settings = {
		entries: entries,
		width: 350,
		height: 350,
		radius: '65%',
		radiusMin: 75,
		bgDraw: true,
		bgColor: 'transparent',
		opacityOver: 1.0,
		opacityOut: 0.05,
		opacitySpeed: 6,
		fov: 800,
		speed: 2,
		fontFamily: 'Oswald, Arial, sans-serif',
		fontSize: '15',
		fontColor: '#00cbd5',
		fontWeight: 'normal', //bold
		fontStyle: 'normal', //italic
		fontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
		fontToUpperCase: true,
		tooltipFontFamily: 'Oswald, Arial, sans-serif',
		tooltipFontSize: '11',
		tooltipFontColor: '#fff',
		tooltipFontWeight: 'normal', //bold
		tooltipFontStyle: 'normal', //italic
		tooltipFontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
		tooltipFontToUpperCase: false,
		tooltipTextAnchor: 'left',
		tooltipDiffX: 0,
		tooltipDiffY: 10
	};

	$('.active_submenu').svg3DTagCloud(settings);
	console.log('after');
	console.log(entries);
}

// Arrow up function
$('.expertise_nav_circle_top_icon').click(function() {
	selectedItem -= 1;
	if (selectedItem >= 0) {
		MovmentList(selectedItem);
		$('.submenu').hide();
		$('.submenu').eq(selectedItem).slideDown();
		$('.expertise_nav_list ul li h4').removeClass('active');
		$('.expertise_nav_list ul li .submenu').removeClass('active_submenu');
		// $('.expertise_nav_list ul li h4').addClass('active');
		console.log($('.submenu').parent().find('h4').eq(selectedItem).addClass('active'));
		$('.submenu').eq(selectedItem).addClass('active_submenu');
		customAnimation();
		switchItem(selectedItem);
	}
});

//down Arrow function
$('.expertise_nav_circle_bottom_icon').click(function() {
	console.log(selectedItem);
	selectedItem += 1;
	if (selectedItem <= 10) {
		MovmentList(selectedItem);
		$('.submenu').hide();
		$('.submenu').eq(selectedItem).slideDown();
		$('.expertise_nav_list ul li h4').removeClass('active');
		$('.expertise_nav_list ul li .submenu').removeClass('active_submenu');
		// $('.expertise_nav_list ul li h4').addClass('active');
		console.log($('.submenu').parent().find('h4').eq(selectedItem).addClass('active'));
		$('.submenu').eq(selectedItem).addClass('active_submenu');
		customAnimation();
		switchItem(selectedItem);
	}
});

//active class apply
$('.expertise_nav_list ul li h4').on('click', function() {
	$('.expertise_nav_list ul li h4').removeClass('active');
	$('.expertise_nav_list ul li .submenu').removeClass('active_submenu');

	// console.log($(this).next().addClass('active_submenu'));
	$(this).addClass('active');
	$(this).next().addClass('active_submenu');
});

//list Items Move function
function MovmentList(itemNumber) {
	console.log('its worked', itemNumber * -30);
	let moveValue = itemNumber * -38;
	console.log(moveValue);
	$('.expertise_nav_list ul li h4').css('transform', `matrix(1, 0, 0, 1, 0, ${moveValue})`);
}

//circle hover effect Animation
$('.expertise_nav_list ul li,.expertise_nav_circle').hover(
	function() {
		$('.expertise_nav_circle_in').css({
			transform: 'scale(1) translate(-50%,-50%)'
		});
		$('.expertise_nav_circle_top').css({
			opacity: '1'
		});
		$('.expertise_nav_circle_bottom_icon').css({
			opacity: '1'
		});
	},
	function() {
		$('.expertise_nav_circle_in').css({
			transform: ''
		});
		$('.expertise_nav_circle_top').css({
			opacity: '0'
		});
		$('.expertise_nav_circle_bottom_icon').css({
			opacity: '0'
		});
	}
);

//half Cicle Animation
function customAnimation() {
	//half circle Animation

	$('.sector circle').animate(
		{
			'transform-origin': '0px 0px 0px',
			'stroke-dashoffset': '641.885',
			'stroke-dasharray': '641, 999999px'
		},
		function() {
			$(this).removeAttr('style');
		}
	);
}

//large circle Animation
function gspAnimation() {
	const t1 = TweenMax.fromTo(
		'#circle1',
		6,
		{ scale: 0, autoAlpha: 1, transformOrigin: 'center center' },
		{ scale: 1, autoAlpha: 0, repeat: -3 },
		{ scale: 3, r: 34, opacity: 0.04 }
	);

	const t2 = TweenMax.fromTo(
		'#circle2',
		6,
		{ scale: 0, autoAlpha: 1, transformOrigin: 'center center' },
		{ scale: 1, autoAlpha: 0, repeat: -3 },
		{ scale: 3, r: 134, opacity: 0.04 }
	);

	const t3 = TweenMax.fromTo(
		'#circle3',
		6,
		{ scale: 0, autoAlpha: 1, transformOrigin: 'center center' },
		{ scale: 2, autoAlpha: 0, repeat: -3 },
		{ scale: 3, r: 233, opacity: 0.04 }
	);

	const t4 = TweenMax.fromTo(
		'#circle4',
		6,
		{ scale: 0, autoAlpha: 1, transformOrigin: 'center center' },
		{ scale: 2, autoAlpha: 0, repeat: -3 },
		{ scale: 3, r: 334, opacity: 0.04 }
	);
	const t5 = TweenMax.fromTo(
		'#circle5',
		6,
		{ scale: 0, autoAlpha: 1, transformOrigin: 'center center' },
		{ scale: 2, autoAlpha: 0, repeat: -3 },
		{ scale: 3, r: 432, opacity: 0.04 }
	);
	const t6 = TweenMax.fromTo(
		'#circle6',
		6,
		{ scale: 0, autoAlpha: 1, transformOrigin: 'center center' },
		{ scale: 2, autoAlpha: 0, repeat: -3 },
		{ scale: 3, r: 539, opacity: 0.04 }
	);
	const t7 = TweenMax.fromTo(
		'#circle7',
		6,
		{ scale: 0, autoAlpha: 1, transformOrigin: 'center center' },
		{ scale: 2, autoAlpha: 0, repeat: -3 },
		{ scale: 3, r: 678, opacity: 0.04 }
	);
}
