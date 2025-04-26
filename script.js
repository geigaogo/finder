function generateLinks() {
    const username = document.getElementById('username').value.trim();
    if (!username) {
        alert('Please enter a username.');
        return;
    }

    const platforms = [
        { id: 'reddit', url: `https://www.reddit.com/user/${username}` },
        { id: 'instagram', url: `https://www.instagram.com/${username}` },
        { id: 'x', url: `https://www.x.com/${username}` },
        { id: 'hypixel', url: `https://hypixel.net/player/${username}` },
        { id: 'bluesky', url: `https://bsky.app/profile/${username}` },
        { id: 'threads', url: `https://www.threads.net/@${username}` },
        { id: 'youtube', url: `https://www.youtube.com/${username}` },
        { id: 'twitch', url: `https://www.twitch.tv/${username}` },
    ];

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    let hasChecked = false;

    platforms.forEach(platform => {
        const checkbox = document.getElementById(platform.id);
        if (checkbox.checked) {
            hasChecked = true;
            const link = document.createElement('a');
            link.href = platform.url;
            link.target = '_blank';
            link.textContent = platform.url;
            link.setAttribute('generated-link', 'true'); // Hinzufügen des Attributs
            resultDiv.appendChild(link);
        }
    });

    if (!hasChecked) {
        alert('Please select at least one platform.');
        return;
    }

    document.getElementById('openAllButton').style.display = 'inline-block';
}

function openAllLinks() {
    const links = document.querySelectorAll('#result a[generated-link="true"]');
    links.forEach(link => {
        window.open(link.href, '_blank');
    });
}