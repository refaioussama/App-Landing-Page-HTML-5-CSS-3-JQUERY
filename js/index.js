jQuery(document).ready(function() {
	if (jQuery('.aqua').length) {
		var words = [
			'Pop.',
			'Hip-Hop.',
			'<i class="fas fa-grin-hearts"></i>',
			'Rock.',
			'Rap.',
			'Electronic.',
			'Country.',
			'Study.',
			'Jazz.',
			'Latin.',
			'Arabic',
			'Morocco.',
			'Asian.',
			'Classical.',
			'House.',
			'Disco.',
			'<i class="fas fa-smile-wink"></i>'
		],

		i = 0;

		setInterval(function() {
			jQuery('.aqua').fadeOut(function() {
				jQuery(this).html(words[i=(i+1)%words.length]).fadeIn();
			});
		}, 1000);
	}
});