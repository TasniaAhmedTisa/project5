//show section by id
function showSectionById(id){
    document.getElementById('donation-container').classList.add('hidden')
    document.getElementById('history-container').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')

}
document.getElementById('blogButton').onclick = function () {
    window.location.href = 'blog.html'; 
};

document.getElementById('historyBtn').addEventListener('click', function(){
    showSectionById('history-container')
})


document.getElementById('donationBtn').addEventListener('click', function(){
    showSectionById('donation-container') 
} );



