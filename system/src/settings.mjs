/**
 * Register all of the system"s settings.
 */
export default function registerSystemSettings() {

	// -------------------
	//  INTERNAL SETTINGS
	// -------------------
	//
	game.settings.register("shadowdark", "schemaVersion", {
		name: "Schema Version",
		scope: "world",
		config: false,
		type: Number,
		default: 0,
	});

	// ------------------------
	//  LIGHT TRACKER SETTINGS
	// ------------------------
	//
	game.settings.register("shadowdark", "trackLightSources", {
		name: "SHADOWDARK.settings.track_light_sources.name",
		hint: "SHADOWDARK.settings.track_light_sources.hint",
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
		requiresReload: true,
		onChange: () => game.shadowdark.lightSourceTracker._settingsChanged(),
	});

	game.settings.register("shadowdark", "trackLightSourcesOpen", {
		name: "SHADOWDARK.settings.track_light_sources.open_on_start.name",
		hint: "SHADOWDARK.settings.track_light_sources.open_on_start.hint",
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
	});

	game.settings.register("shadowdark", "trackInactiveUserLightSources", {
		name: "SHADOWDARK.settings.track_light_sources.inactive_user.name",
		hint: "SHADOWDARK.settings.track_light_sources.inactive_user.hint",
		scope: "world",
		config: true,
		default: false,
		type: Boolean,
		onChange: () => game.shadowdark.lightSourceTracker._settingsChanged(),
	});

	game.settings.register("shadowdark", "pauseLightTrackingWithGame", {
		name: "SHADOWDARK.settings.track_light_sources.pause_with_game.name",
		hint: "SHADOWDARK.settings.track_light_sources.pause_with_game.hint",
		scope: "world",
		config: true,
		default: true,
		type: Boolean,
		onChange: () => game.shadowdark.lightSourceTracker._settingsChanged(),
	});

	game.settings.register("shadowdark", "trackLightSourcesInterval", {
		name: "SHADOWDARK.settings.track_light_sources.interval.name",
		hint: "SHADOWDARK.settings.track_light_sources.interval.hint",
		scope: "world",
		config: true,
		default: shadowdark.defaults.LIGHT_TRACKER_UPDATE_INTERVAL_SECS,
		type: Number,
		range: {
			min: 10,
			max: 120,
			step: 10,
		},
		requiresReload: true,
	});
}
