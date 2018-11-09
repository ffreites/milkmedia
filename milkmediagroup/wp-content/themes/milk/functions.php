<?php

/* ---------------------------------------------------------------------------
 * Child Theme URI | DO NOT CHANGE
 * --------------------------------------------------------------------------- */
define( 'CHILD_THEME_URI', get_stylesheet_directory_uri() );


/* ---------------------------------------------------------------------------
 * Define | YOU CAN CHANGE THESE
 * --------------------------------------------------------------------------- */

// White Label --------------------------------------------
define( 'WHITE_LABEL', false );

// Static CSS is placed in Child Theme directory ----------
define( 'STATIC_IN_CHILD', false );


/* ---------------------------------------------------------------------------
 * Enqueue Style
 * --------------------------------------------------------------------------- */
function mfnch_enqueue_styles() {
	
	// Enqueue the parent stylesheet
// 	wp_enqueue_style( 'parent-style', get_template_directory_uri() .'/style.css' );		//we don't need this if it's empty
	
	// Enqueue the parent rtl stylesheet
	if ( is_rtl() ) {
		wp_enqueue_style( 'mfn-rtl', get_template_directory_uri() . '/rtl.css' );
	}
	
	// Enqueue the child stylesheet
	wp_dequeue_style( 'style' );
	wp_enqueue_style( 'style', get_stylesheet_directory_uri() .'/style.css' );
	
	// Enqueue milk CSS
	wp_dequeue_style( 'milk' );
	wp_enqueue_style( 'milk', get_stylesheet_directory_uri() .'/css/milk.css' );
	
}
add_action( 'wp_enqueue_scripts', 'mfnch_enqueue_styles', 101 );

/* ---------------------------------------------------------------------------
 * milk STUFFS
 * --------------------------------------------------------------------------- */
// Hide Admin Bar in frontend
show_admin_bar(false);

// Load my JS Scripts by @milk
function add_my_scripts() {

	wp_enqueue_script(
		'milk-scripts',
		get_stylesheet_directory_uri() . '/js/milk.js',
		array('jquery')
	);

	wp_enqueue_script(
		'scroll-debug',
		get_stylesheet_directory_uri() . '/js/scroll_magic/ScrollMagic.js',
		array('jquery')
	);

	wp_enqueue_script(
		'scroll_magic',
		get_stylesheet_directory_uri() . '/js/scroll_magic/plugins/debug.addIndicators.js',
		array('jquery')
	);
}

// Add my script to Wordpress
add_action('wp_enqueue_scripts', 'add_my_scripts');

// Add milk class to the body of all pages
add_filter( 'body_class','my_body_classes' );
function my_body_classes( $classes ) {

	$classes[] = 'milk';

	return $classes;

}

/* ---------------------------------------------------------------------------
 * Load Textdomain
 * --------------------------------------------------------------------------- */
add_action( 'after_setup_theme', 'mfnch_textdomain' );
function mfnch_textdomain() {
    load_child_theme_textdomain( 'betheme',  get_stylesheet_directory() . '/languages' );
    load_child_theme_textdomain( 'mfn-opts', get_stylesheet_directory() . '/languages' );
}


/* ---------------------------------------------------------------------------
 * Override theme functions
 * 
 * if you want to override theme functions use the example below
 * --------------------------------------------------------------------------- */
// require_once( get_stylesheet_directory() .'/includes/content-portfolio.php' );
