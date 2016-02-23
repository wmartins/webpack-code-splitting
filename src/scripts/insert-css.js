const cache = {
};

module.exports = (path) => {
    if(document && !cache[path]) { // is browser
        const link = document.createElement('link');

        link.rel = 'stylesheet';
        link.href = path;

        document.head.appendChild(link);

        cache[path] = true;
    }
}
