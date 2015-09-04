# jQuery UI Datepicker CSS for WordPress

This is a CSS file you include with WordPress plugins or themes to make the jQuery UI Datepicker widget match WordPress's color schemes. It's goal is to make the jQuery UI Datepicker widget look as natural as possible inside of WordPress's dashboard.

As new color schemes are introduced and old ones are updated, this file will be maintained to match.

It's currently used by the [WP Event Calendar](https://github.com/stuttter/wp-event-calendar) plugin for WordPress.

#Screenshots

![Fresh](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/fresh.png?raw=true "Fresh")
![Light](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/light.png?raw=true "Light")
![Blue](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/blue.png?raw=true "Blue")
![Coffee](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/coffee.png?raw=true "Coffee")
![Ectoplasm](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/ectoplasm.png?raw=true "Ectoplasm")
![Midnight](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/midnight.png?raw=true "Midnight")
![Ocean](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/ocean.png?raw=true "Ocean")
![Sunrise](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/sunrise.png?raw=true "Sunrise")
![Evergreen](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/evergreen.png?raw=true "Evergreen")
![Mint](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/mint.png?raw=true "Mint")

# FAQ

### Is this a WordPress plugin?

No, it's just a CSS file.

You'll want to include this in your plugin & enqueue it however you feel is best.

### How do I use it, then?

Probably something like:

```
/**
 * Enqueue calendar styles
 *
 * @since 0.1.0
 */
function enqueue_my_calendar_styles() {

	// Enqueue the datepicker JS
	wp_enqueue_script( 'jquery-ui-datepicker' );

	// Enqueue the datepicker CSS
	wp_enqueue_style( 'my-jquery-ui-datepicker', dirname( __FILE__ ) . 'datepicker.css', false, false, false );
}
add_action( 'admin_head', 'enqueue_my_calendar_styles' );
```

### What exactly is supported?

* All WordPress color schemes
* All bbPress color schemes
* Current day (light yellow)
* Selected day (green)
* Hover days (matched to scheme)
* Disabled days (opacity 50%)
* Naturally responsive (this could probably be improved)

### Where can I get support?

Right here on Github. Since this isn't a WordPress plugin, there's no support forum.

### Can I contribute?

Yes, please!
