<?php
/**
 * The base configuration for WordPress.
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @see https://codex.wordpress.org/Editing_wp-config.php
 */
define( 'MEDIA_TRASH', true );
// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'm3k7yxx1_milkmediagroup');

/* MySQL database username */
define('DB_USER', 'm3k7yxx1_milk');

/* MySQL database password */
define('DB_PASSWORD', '119B7DDFf');

/* MySQL hostname */
define('DB_HOST', 'localhost');

/* Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/* The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

define( 'UPLOADS', 'wp-content/'.'uploads' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '7[-:Ee%N0fTbn!4V,ZhaT+Zu_S{v.vQ8|48}n,wc_.$=q}YWgW64DhoAH)9pE_!K');
define('SECURE_AUTH_KEY', 'iI^Cn|:_E.wlY&T~crZ*6]FJ}ZEh[KliQ(^3Ot)XD77h5)C-HM[8W 3Zqy03<Z@B');
define('LOGGED_IN_KEY', 'V&YKus3H7:^;@Bztk3 ?0YK-Yx@&j6PO@7#5cF+wJbw~ywPg?Q@>iGu@[#]gay0Y');
define('NONCE_KEY', '[3J7uoSA[nUk$:oe,>$W3f;OFOX(6[/%fs5LK&5]^.yuy.*$8RQFdxOKZcqJe~Qm');
define('AUTH_SALT', '&DLpo{+H,nenUA7*-j7g*v7.ACMRrBSf{sCa0|s-&7R%eMbT>jFMJB@-Rnnk}g[R');
define('SECURE_AUTH_SALT', '>(u>fS9[eOhz~^P*a/$g$dpjHnb25)AthBC73EhP::g~f9J;<N`zC-a-&2C R(|o');
define('LOGGED_IN_SALT', 'Gn4t6u=3N`,2f KmL5hC5TI_8Dz==3zhy[5dbOdMWK>+Q!G[5#[.$w28mq[&$?!1');
define('NONCE_SALT', '5Ni1*^(ltBsZ3dm&6Id??4/LQ[x<4|Bqj5^G#[7TE<%h=Z/^629X|1z@&vbdx<G/');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'mlk_';

/*
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

/* That's all, stop editing! Happy blogging. */

/* Absolute path to the WordPress directory. */
if (!defined('ABSPATH')) {
    define('ABSPATH', dirname(__FILE__).'/');
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH.'wp-settings.php';


define('FS_METHOD', 'direct');
