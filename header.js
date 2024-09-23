
const headerHTML = `<header class="sticky top-0 z-50 bg-[rgb(249, 247, 243)] backdrop-blur-md">
    <div class="navbar px-20 py-5">
        <div class="navbar-start">
            <div class="btn bg-lime-400">
                <button class="font-extrabold">Blog</button>
            </div>
        </div>
        <div class="navbar-center">
            <a class="btn btn-ghost lg:text-xl font-bold">
                <img src="./assets/logo.png" alt="">Donate Bangladesh</a>
        </div>
        <div class="navbar-end">
            <button class="btn btn-ghost lg:text-xl">
                <img src="./assets/coin.png" alt="">5500 BDT
            </button> 
        </div>
    </div>
    <div class="flex justify-center p-20 space-x-4">
        <button class="btn text-xl">Donation</button>
        <button class="btn text-xl">History</button>
    </div>
</header>`;

document.getElementById('header-container').innerHTML = headerHTML;