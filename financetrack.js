function exploreMore() {
    const resources = document.getElementById('more-resources');
    if (resources.classList.contains('hidden')) {
        resources.classList.remove('hidden');
    } else {
        resources.classList.add('hidden');
    }
}
