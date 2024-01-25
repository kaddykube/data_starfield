<script>
	let name = '';
	let street = '';
	let city = '';
	/**
	 * @type {HTMLInputElement}
	 */
let node;
	function changeBG(){
		console.log(node);
	}
</script>

<div class="flex mb-2">
	<label class="text-bold pt-2 pr-2" for="name">Name:</label><input
		bind:value={name} bind:this={node}
		class="border-1 rounded-sm p-2 bg-grey"
	/>
</div>
<div class="flex mb-2">
	<label class="text-bold pt-2 pr-2" for="street">Street:</label>
	<input bind:value={street} class="border-1 rounded-sm p-2 bg-grey" />
</div>
<div class="flex mb-2">
	<label class="text-bold pt-2 pr-2" for="city">City:</label><input
		bind:value={city}
		class="border-1 rounded-sm p-2 bg-grey"
	/>
</div>
