# jQuery UI Datepicker CSS for WordPress

This is a CSS file you include with WordPress plugins or themes to make the jQuery UI Datepicker widget match WordPress color schemes. It's goal is to make the jQuery UI Datepicker widget look as natural as possible inside of the WordPress dashboard.

As new color schemes are introduced and old ones are updated, this file will be maintained to match.

It is updated for changes to WordPress 5.7 colors.

It is used by the [Sugar Calendar](https://sugarcalendar.com) plugin for WordPress, if you'd like an example.

# Screenshots

The following screenshots show off what this CSS file looks like in the Sugar Calendar plugin.

## Fresh
![Fresh](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/fresh.png?raw=true "Fresh")

## Light
![Light](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/light.png?raw=true "Light")

## Modern
![Modern](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/modern.png?raw=true "Modern")

## Blue
![Blue](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/blue.png?raw=true "Blue")

## Coffee
![Coffee](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/coffee.png?raw=true "Coffee")

## Ectoplasm
![Ectoplasm](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/ectoplasm.png?raw=true "Ectoplasm")

## Midnight
![Midnight](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/midnight.png?raw=true "Midnight")

## Ocean
![Ocean](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/ocean.png?raw=true "Ocean")

## Sunrise
![Sunrise](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/sunrise.png?raw=true "Sunrise")

## Evergreen
![Evergreen](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/evergreen.png?raw=true "Evergreen")

## Mint
![Mint](https://github.com/stuttter/wp-datepicker-styling/blob/master/screenshots/mint.png?raw=true "Mint")

# FAQ

### Is this a WordPress plugin?

No, it's just a CSS file.

You'll want to include this in your plugin & enqueue it however you feel is best.

### How will I use it, then?

Probably something like:

```php
/**
 * Enqueue calendar styles
 *
 * @since 0.1.0
 */
function enqueue_my_calendar_styles() {

	// Enqueue the datepicker JS
	wp_enqueue_script( 'jquery-ui-datepicker' );

	// Enqueue the datepicker CSS
	wp_enqueue_style( 'my-jquery-ui-datepicker', dirname( __FILE__ ) . '/datepicker.css' );
}
add_action( 'admin_head', 'enqueue_my_calendar_styles' );
```

But you'll want to basically rename all of this to fit your needs, and if you're reading this, chances are you already know how to do this bit.

### What exactly is supported?

* All WordPress color schemes (including Modern)
* Both bbPress color schemes (Evergreen, Mint)
* Current day (light yellow)
* Selected day (green)
* Hover days (matched to scheme)
* Disabled days (opacity 50%)
* Adjacent month days (opacity 30%)
* Naturally responsive (this could be improved)

### Where can I get support?

https://github.com/stuttter/wp-datepicker-styling/discussions

### Can I contribute?

Yes, please!
