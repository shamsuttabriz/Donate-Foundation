document.getElementById('btn-blog')?.addEventListener('click', function () {
    window.location.href = '/blog.html';
});

document.getElementById('btn-blog-sm')?.addEventListener('click', function () {
    window.location.href = '/blog.html';
});

document.getElementById('btn-home')?.addEventListener('click', function () {
    window.location.href = '/';
});

document.getElementById('btn-home-sm')?.addEventListener('click', function () {
    window.location.href = '/';
});

document.getElementById('btn-history')?.addEventListener('click', function () {
    showSectionById('show-history');
    document.getElementById('btn-history').style.backgroundColor = '#B4F461';
    document.getElementById('btn-donation').style.backgroundColor = '#ffffff';
})

document.getElementById('btn-donation')?.addEventListener('click', function () {
    showSectionById('show-donation');
    document.getElementById('btn-donation').style.backgroundColor = '#B4F461';
    document.getElementById('btn-history').style.backgroundColor = '#ffffff';
})