<template>
	<div class="w-full min-h-[20rem] flex justify-center items-center">
		<div class="animation-container spinning-dots"></div>
	</div>
</template>
<style scoped>
	
.animation-container {
	position: relative;
    align-items: center;
    justify-content: center;
    height: 175px;
    overflow: hidden;
    width: 100%;
}

.spinning-dots:before {
	animation: spin 1.5s infinite linear;
	border-radius: 10px;
	box-shadow: 25px 0px 0 0 theme(color.gray.300),
		15.58725px 19.54579px 0 0 theme(color.gray.300),
		-5.56302px 24.3732px 0 0 theme(color.gray.300),
		-22.52422px 10.84709px 0 0 theme(color.gray.300),
		-22.52422px -10.84709px 0 0 theme(color.gray.300),
		-5.56302px -24.3732px 0 0 theme(color.gray.300),
		15.58725px -19.54579px 0 0 theme(color.gray.300);
	content: '';
	height: 10px;
	width: 10px;
}

@keyframes spin {
	to { transform: rotate(360deg); }
}

</style>