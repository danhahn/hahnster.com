<script lang="ts">
</script>

<!-- This example requires Tailwind CSS v2.0+ -->
<div class="relative bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6">
		<div
			class="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
		>
			<div class="flex justify-start lg:w-0 lg:flex-1">
				<a href="/">
					<span class="sr-only">hahnster.com</span>
					<svg class="w-12 h-12" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M1 17.9042V15.8194C1 13.8491 1.46514 12.3449 2.39541 11.3069C3.32569 10.269 4.45752 9.75 5.79092 9.75C7.13981 9.75 8.21738 10.1634 9.02362 10.9903V5.7125C9.02362 5.51898 9.08564 5.35185 9.20967 5.21111C9.33371 5.07037 9.481 5 9.65155 5H13.9541C14.1246 5 14.2719 5.07037 14.396 5.21111C14.52 5.35185 14.582 5.51898 14.582 5.7125V23.0236C14.582 23.2171 14.52 23.3843 14.396 23.525C14.2719 23.6657 14.1246 23.7361 13.9541 23.7361H10.0004C9.82986 23.7361 9.68256 23.6657 9.55853 23.525C9.43449 23.3843 9.37247 23.2171 9.37247 23.0236V22.2319C8.56623 23.4106 7.42665 24 5.95371 24C4.48078 24 3.28693 23.5074 2.37216 22.5222C1.45739 21.5194 1 19.9801 1 17.9042ZM9.02362 17.7458V15.7931C8.97711 14.9134 8.58949 14.4736 7.86078 14.4736C7.08555 14.4736 6.69793 14.9838 6.69793 16.0042V17.7458C6.69793 18.7662 7.08555 19.2764 7.86078 19.2764C8.63601 19.2764 9.02362 18.7662 9.02362 17.7458Z"
							class="fill-cyan-500"
						/>
						<path
							d="M20.8368 15.925V23.0236C20.8368 23.2171 20.7748 23.3843 20.6508 23.525C20.5267 23.6657 20.3795 23.7361 20.2089 23.7361H15.6738C15.5033 23.7361 15.356 23.6657 15.2319 23.525C15.1079 23.3843 15.0459 23.2171 15.0459 23.0236V5.7125C15.0459 5.51898 15.1079 5.35185 15.2319 5.21111C15.356 5.07037 15.5033 5 15.6738 5H20.2089C20.3795 5 20.5267 5.07037 20.6508 5.21111C20.7748 5.35185 20.8368 5.51898 20.8368 5.7125V11.3861C21.7206 10.2954 22.8524 9.75 24.2323 9.75C25.6122 9.75 26.7518 10.2602 27.6511 11.2806C28.5504 12.3009 29 13.7875 29 15.7403V22.9972C29 23.1907 28.938 23.3579 28.8139 23.4986C28.6899 23.6394 28.5426 23.7097 28.3721 23.7097H23.8137C23.6432 23.7097 23.4959 23.6394 23.3718 23.4986C23.2478 23.3579 23.1858 23.1907 23.1858 22.9972V15.925C23.1858 14.9574 22.7904 14.4736 21.9997 14.4736C21.2245 14.4736 20.8368 14.9574 20.8368 15.925Z"
							class="fill-cyan-500"
						/>
					</svg>
				</a>
			</div>
			<div class="-mr-2 -my-2 md:hidden">
				<button
					type="button"
					class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-expanded="false"
				>
					<span class="sr-only">Open menu</span>
					<!-- Heroicon name: outline/menu -->
					<svg
						class="h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					</svg>
				</button>
			</div>
			<nav class="hidden md:flex space-x-10">
				<div class="relative">
					<!-- Item active: "text-gray-900", Item inactive: "text-gray-500" -->

					<!--
            'Solutions' flyout menu, show/hide based on flyout menu state.

            Entering: "transition ease-out duration-200"
              From: "opacity-0 translate-y-1"
              To: "opacity-100 translate-y-0"
            Leaving: "transition ease-in duration-150"
              From: "opacity-100 translate-y-0"
              To: "opacity-0 translate-y-1"
          -->
					<div
						class="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
					/>
				</div>

				<a href="/about" class="text-base font-medium text-gray-500 hover:text-gray-900"> About </a>
				<a href="/resume" class="text-base font-medium text-gray-500 hover:text-gray-900">
					Resume
				</a>
			</nav>
		</div>
	</div>

	<!--
    Mobile menu, show/hide based on mobile menu state.

    Entering: "duration-200 ease-out"
      From: "opacity-0 scale-95"
      To: "opacity-100 scale-100"
    Leaving: "duration-100 ease-in"
      From: "opacity-100 scale-100"
      To: "opacity-0 scale-95"
  -->
</div>
