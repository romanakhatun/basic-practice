/**
 * Simple Sidebar
 * Version : 2.0
 *
 * Copyright (c) Ali Bakhtiar <https://twitter.com/ali_bakhtiar>
 * The MIT License
 *
 * @modefiled : 16 October 2019
 * @created   : 08 August 2015
 * @author    : Ali Bakhtiar
 * @license   : MIT (http://opensource.org/licenses/MIT)
*/

'use strict';

$.fn.SimpleSidebar = function(options) {
	let config = $.extend({
		rtl: false,
		mainDiv: null,
		toggleEl: null, /* event */
		smallWinSize: 768, /* small window siz */
		speed: 500,
	}, options);

	/* sidebar: eshare be element sidebar, baray mesal: 
	 * $('#example').SimpleSidebar > $sidebar => $('#example')
	*/
	let $sidebar = $(this);

	/* mainDiv: eshare be element div asli. eg: div#main */
	let $mainDiv = config.mainDiv;

	/* $sidebar width */
	let sidebarWidth = 0;

	/* small view size: zamani ke size page andazeh mobile shavad */
	let isSmallSize = false;

	/* sidebar state */
	let sidebarState = 0;

	/* current run anim: animati ke dar hale ejra ast.
	 * hamishe 2 animate vojood darad
	 * 1 - harekate sidebar, 2 - harekate mainDiv.
	 * baray hamin az array estefade mikonim,
	 * [0] => sidebar animate
	 * [1] => mainDiv animate
	*/
	let currentAnim = [];
	currentAnim[0] = null;
	currentAnim[1] = null;

	/****************************************/

	/**
	 * Update Window Sizes
	 *
	*/
	const updateWinSizes = function() {
		sidebarWidth = $sidebar.width();
		isSmallSize = $(window).width() <= config.smallWinSize ? true : false;
		return;
	};

	/**
	 * Update State
	 * status open ya close boodane $sidebar.
	*/
	const updateState= function() {
		sidebarState = $sidebar.data('sb-is-open') == 1 ? 'open' : 'close';
		return;
	};

	/**
	 * Set State
	 * status open ya close boodane $sidebar.
	*/
	const setState= function(state) {
		if (state == 'open') {
			$sidebar.data('sb-is-open', 1);
			sidebarState = 'open';
		} else {
			$sidebar.data('sb-is-open', 0);
			sidebarState = 'close';
		}

		return;
	};

	/**
	 * Toggle
	 * auto open/close
	*/
	const toggle = function() {
		updateState();
		if (sidebarState == 'open') {
			close();
		} else {
			open();
		}

		return;
	};

	/**
	 * Open
	*/
	const open = function() {
		setState('open');
		updateWinSizes();

		if (config.rtl == true) {
			moveSidebar({right: 0 }, config.speed);

			if (isSmallSize == true) {
				moveMainDiv({marginRight: 0}, config.speed);
			} else {
				moveMainDiv({marginRight: sidebarWidth}, config.speed);
			}
		} else {
			moveSidebar({left: 0}, config.speed);
			if (isSmallSize == true) {
				moveMainDiv({marginLeft: 0}, config.speed);
			} else {
				moveMainDiv({marginLeft: sidebarWidth}, config.speed);
			}
		}

		return;
	};

	/**
	 * Close
	*/
	const close = function() {
		setState('close');
		updateWinSizes();

		if (config.rtl == true) {
			moveSidebar({right: 0 - sidebarWidth}, config.speed);
			moveMainDiv({marginRight: 0}, config.speed);
		} else {
			moveSidebar({left: 0 - sidebarWidth}, config.speed);
			moveMainDiv({marginLeft: 0}, config.speed);
		}

		return;
	};

	/**
	 * Move Sidebar
	 * faghat sidebar ra harekat midahad,
	 * harekat sidebar & mainDiv joda anjma mishavad.
	 *
	 * @param css style (object)
	 * @param speed (int)
	*/
	const moveSidebar = function(style, speed) {
		animate($sidebar, 0, style, speed);
		return;
	};

	/**
	 * Move Main Div
	 * faghat mainDiv ra harekat midahad,
	 *
	 * @param css style (object)
	 * @param speed (int)
	*/
	const moveMainDiv = function(style, speed) {
		animate($mainDiv, 1, style, speed);
		return;
	};

	/**
	 * Animate
	*/
	const animate = function($el, index, style, speed) {
		if (currentAnim[index]) {
			currentAnim[index].stop();
			currentAnim[index] = null;
		}

		currentAnim[index] = $el.animate(style, speed, function() {
			currentAnim[index] = null;
		});

		return;
	};

	/****************************************/

	/**
	 * onLoad
	*/
	const onLoad = function() {
		/* Click Event */
		if (config.toggleEl) {
			config.toggleEl.on('click', function() {
				toggle();
				return;
			});
		}

		/* Window Resize */
		$(window).resize(function() {
			if ($(window).width() <= config.smallWinSize) {
				close();
			}
		});

		close();
	};

	onLoad();

	/****************************************/

	return {
		open: function() {
			open();
			return;
		},
		close: function() {
			close();
			return;
		},
		toggle: function() {
			toggle();
			return;
		},
	}
};
