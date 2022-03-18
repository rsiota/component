<div class="container" x-data="{ clicked: true}">
	<button class="button"
		@click="clicked = !clicked"
		:class="clicked && 'animation'"
		scroll>
		more info
	</button>
	<div class="box" scroll></div>
	<div class="second-box" scroll></div>
</div>